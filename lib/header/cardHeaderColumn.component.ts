import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IColumn } from '../interfaces';
import { BreakpointSizesService } from '../services/breakpointSizes.service';
import { ColumnContentTemplate } from '../templates';

@Component({
	selector: 'scc-card-header-column',
	template: require('./cardHeaderColumn.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderColumnComponent<T> implements OnInit {
	@Input() column: IColumn<T>;
	@Input() item: T;
	@Input() columnTemplate: ColumnContentTemplate;

	get value(): string | number | boolean {
		if (!this.item || !this.column.getValue) {
			return '';
		} else if (typeof this.column.getValue === 'string') {
			return this.item[this.column.getValue];
		} else {
			return this.column.getValue(this.item);
		}
	}

	get context(): any {
		return {
			$implicit: this.value,
			item: this.item,
		};
	}

	sizeClass: string;

	constructor(private breakpointSizes: BreakpointSizesService) {}

	ngOnInit(): void {
		this.sizeClass = this.breakpointSizes.getClass(this.column.size);
	}
}
