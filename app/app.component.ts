import { Component } from '@angular/core';

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
	}

	private range(low: number, high: number): number[] {
		let numbers = [];
		for (let i = low; i < high; i++) {
			numbers.push(i);
		}
		return numbers;
	}
}
