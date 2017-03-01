import { Component } from '@angular/core';

import { IColumn, SortDirection } from '../lib';

export interface ICardItem {
	id: number;
	name: string;
	value: number;
}

@Component({
	selector: 'scc-app',
	templateUrl: './app.component.html',
})
export class AppComponent {
	items: ICardItem[];
	columns: IColumn<ICardItem>[];
	count = 100;
	pageNumber = 2;
	
	constructor() {
		const rangeLow: number = 11;
		const rangeHigh: number = 21;

		this.items = this.range(rangeLow, rangeHigh).map((num: number): ICardItem => {
			return {
				id: num,
				name: 'Item' + num,
				value: num,
			};
		});

		this.columns = [
			{
				name: 'name',
				label: 'Name',
				size: 6,
				getValue: 'name',
				sortDirection: SortDirection.ascending,
			},
			{
				name: 'value',
				label: 'Value',
				size: 6,
				getValue: 'value',
			},
		];
	}

	sort(sortColumn: IColumn<ICardItem>): void {
		this.columns = this.columns.map(col => {
			return col.name === sortColumn.name
				? sortColumn
				: col;
		});
	}

	private range(low: number, high: number): number[] {
		let numbers = [];
		for (let i = low; i < high; i++) {
			numbers.push(i);
		}
		return numbers;
	}
}
