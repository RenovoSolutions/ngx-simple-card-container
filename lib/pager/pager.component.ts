import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { range } from 'lodash';

export const defaultVisiblePageCount: number = 5;

@Component({
	selector: 'scc-pager',
	template: require('./pager.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagerComponent {
	@Input() totalCount: number;
	@Input() pageSize: number;
	@Input() pageNumber: number;

	@Output() pageNumberChange: EventEmitter<number> = new EventEmitter<number>();

	get lastPage(): number {
		return Math.ceil(this.totalCount / this.pageSize);
	}

	get canGoBack(): boolean {
		return this.pageNumber > 1;
	}

	get canGoForward(): boolean {
		return this.pageNumber < this.lastPage;
	}

	get pages(): number[] {
		const nonCurrentVisiblePages: number = defaultVisiblePageCount - 1;

		const before: number = Math.floor(nonCurrentVisiblePages / 2);
		const after: number = Math.ceil(nonCurrentVisiblePages / 2);

		let startPage: number = this.pageNumber - before;
		let endPage: number = this.pageNumber + after;

		if (startPage < 1) {
			startPage = 1;
			endPage = Math.min(defaultVisiblePageCount, this.lastPage);
		} else if (endPage > this.lastPage) {
			endPage = this.lastPage;
			startPage = Math.max(this.lastPage - nonCurrentVisiblePages, 1);
		}

		return range(startPage, endPage + 1);
	}
	
	first(): void {
		this.pageNumberChange.emit(1);
	}

	previous(): void {
		this.pageNumberChange.emit(this.pageNumber - 1);
	}

	goto(page: number): void {
		this.pageNumberChange.emit(page);
	}

	next(): void {
		this.pageNumberChange.emit(this.pageNumber + 1);

	}

	last(): void {
		this.pageNumberChange.emit(this.lastPage);
	}
}
