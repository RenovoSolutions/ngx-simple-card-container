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
	
	constructor() {
		const rangeLow: number = 1;
		const rangeHigh: number = 101;

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

	private range(low: number, high: number): number[] {
		let numbers = [];
		for (let i = low; i < high; i++) {
			numbers.push(i);
		}
		return numbers;
	}
}
