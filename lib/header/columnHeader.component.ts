import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IColumn } from '../interfaces';
import { BreakpointSizesService } from '../services/breakpointSizes.service';

@Component({
	selector: 'column-header',
	templateUrl: 'columnHeader.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnHeaderComponent<T> {
	@Input() column: IColumn<T>;
	@Output() sort: EventEmitter<IColumn<T>> = new EventEmitter<IColumn<T>>();

	sizeClass: string;

	constructor(private breakpointSizes: BreakpointSizesService) {}

	ngOnInit(): void {
		this.sizeClass = this.breakpointSizes.getClass(this.column.size);
	}
}
