import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { SimpleCardContainerComponent } from '../container/simpleCardContainer.component';

@Component({
	selector: 'scc-card',
	templateUrl: 'card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T> {
	@Input() item: T;

	isOpen: boolean;

	constructor(public cardContainer: SimpleCardContainerComponent<T>) {}

	toggleContent(): void {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	open(): void {
		this.isOpen = true;
	}

	close(): void {
		this.isOpen = false;
	}
}
