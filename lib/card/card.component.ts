import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { SimpleCardContainerComponent } from '../container/simpleCardContainer.component';

@Component({
	selector: 'scc-card',
	templateUrl: 'card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T> {
	@Input() item: T;

	constructor(public cardContainer: SimpleCardContainerComponent<T>) {}

	// toggleContent(): void {

	// 	if (this.showContent$.getValue()) {
	// 		this.close();
	// 	} else {
	// 		this.open();
	// 	}
	// }

	// open(): void {
	// 	if (isFunction(this.initCard)) {
	// 		this.initCard();
	// 	}

	// 	if (this.cardContainer.openCard()) {
	// 		this.showContent$.next(true);
	// 	}
	// }

	// close(): boolean {
	// 	if (!this.showContent$.getValue()) {
	// 		return true;
	// 	}

	// 	let canClose = true;

	// 	//hack to stop auto save when non needed or available
	// 	let obs = this.saveForm()
	// 	if (obs) { canClose = !!this.submit(); }

	// 	if (canClose) {
	// 		this.showContent$.next(false);
	// 	}

	// 	return canClose;
	// }
}
