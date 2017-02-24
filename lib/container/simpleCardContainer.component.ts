import { Component, Input } from '@angular/core';

@Component({
	selector: 'simple-card-container',
	templateUrl: 'simpleCardContainer.component.html',
})
export class SimpleCardContainer<T> {
	@Input() data: T[];
}
