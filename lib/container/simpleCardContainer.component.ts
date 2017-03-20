import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { reduce } from 'lodash';

import { IColumn, IPage } from '../interfaces';
import { 
	CardContentTemplate, 
	CardFooterTemplate, 
	ContainerHeaderTemplate, 
	ContainerFooterTemplate,
	ColumnHeaderTemplate,
	ColumnContentTemplate,
} from '../templates';
import { PagingService } from '../services/paging.service';
import { getTemplate } from '../services/containerHelper';

export const defaultPageSize: number = 10;

@Component({
	selector: 'scc-simple-card-container',
	template: require('./simpleCardContainer.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardContainerComponent<T> {
	@Input() columns: IColumn<T>[];
	@Input() count: number;
	@Input() pageNumber: number;
	@Input() pageSize: number;
	@Input() message: string;
	@Input() paging: boolean;
	
	private _data: T[];
	@Input() set data(value: T[]) {
		this._data = value;
		this.processedData = this.process(value);
	}

	get data(): T[] {
		return this._data;
	}

	get totalItems(): number {
		return this.count || this.data.length;
	}

	@Output() sort: EventEmitter<IColumn<T>> = new EventEmitter<IColumn<T>>();
	@Output() page: EventEmitter<IPage> = new EventEmitter<IPage>();

	@ContentChild(CardContentTemplate) cardContent: CardContentTemplate;
	@ContentChild(CardFooterTemplate) cardFooter: CardFooterTemplate;
	@ContentChild(ContainerHeaderTemplate) containerHeader: ContainerHeaderTemplate;
	@ContentChild(ContainerFooterTemplate) containerFooter: ContainerFooterTemplate;
	@ContentChildren(ColumnContentTemplate) columnTemplates: QueryList<ColumnContentTemplate>;
	@ContentChildren(ColumnHeaderTemplate) columnHeaders: QueryList<ColumnHeaderTemplate>;

	processedData: T[];
	openCard: T;

	private dataFilters: { (data: T[]): T[] }[];

	constructor(private pagingService: PagingService) {}

	ngOnInit(): void {
		this.pageNumber = this.pageNumber || 1;
		this.pageSize = this.pageSize || defaultPageSize;

		this.dataFilters = [];

		if (this.paging) {
			this.dataFilters.push(data => this.pagingService.filter(data, this.pageNumber, this.pageSize));
		}

		this.processedData = this.process(this.data);
	}

	setPage(pageNumber: number): void {
		this.pageNumber = pageNumber;
		this.processedData = this.process(this.data);
		this.page.emit({
			pageSize: this.pageSize,
			pageNumber,
		});
	}

	process(dataSet: T[]): T[] {
		return reduce(this.dataFilters, (data, filter) => filter(data), dataSet);
	}

	getHeaderTemplate = name => getTemplate(name, this.columnHeaders);
}
