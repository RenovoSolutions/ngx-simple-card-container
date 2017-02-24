import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IColumn } from '../interfaces';
import { BreakpointSizesService } from '../services/breakpointSizes.service';
import { SortDirection } from '../sortDirection';

@Component({
	selector: 'scc-column-header',
	template: require('./columnHeader.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnHeaderComponent<T> {
	@Input() column: IColumn<T>;
	@Output() sort: EventEmitter<IColumn<T>> = new EventEmitter<IColumn<T>>();

	sizeClass: string;
	sortDirection = SortDirection;

	constructor(private breakpointSizes: BreakpointSizesService) {}

	ngOnInit(): void {
		this.sizeClass = this.breakpointSizes.getClass(this.column.size);
	}

	changeSort(): void {
		const columnWithSortChanged = {
			...this.column,
			sortDirection: SortDirection.toggle(this.column.sortDirection),
		};
		this.sort.emit(columnWithSortChanged);
	}
}
