import { CardComponent } from './card.component';

describe('CardComponent', () => {
	let card: CardComponent<any>;

	beforeEach(() => {
		card = new CardComponent(<any>{});
	});

	it('should emit an open event if isOpen is false', () => {
		const openSpy = sinon.spy();
		const item = { id: 11 };
		card.open.subscribe(openSpy);
		card.item = item;
		
		card.toggleContent();

		sinon.assert.calledOnce(openSpy);
		sinon.assert.calledWith(openSpy, item);
	});

	it('should emit an close event if isOpen is true', () => {
		card.isOpen = true;
		const closeSpy = sinon.spy();
		card.close.subscribe(closeSpy);
		
		card.toggleContent();

		sinon.assert.calledOnce(closeSpy);
	});
});
