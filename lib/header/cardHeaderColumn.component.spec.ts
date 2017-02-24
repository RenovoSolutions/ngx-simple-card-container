import { CardHeaderColumnComponent } from './cardHeaderColumn.component';

describe('CardHeaderColumnComponent', () => {
	let component: CardHeaderColumnComponent<any>;
	let breakpointService: any;

	beforeEach(() => {
		breakpointService = {};
		component = new CardHeaderColumnComponent(breakpointService);
	});

	it('should use the breakpoint service to configure the size class', () => {
		const size = 'col-xs-1';
		breakpointService.getClass = sinon.spy(() => size);
		const sizeObject = { xs: 1 };
		component.column = <any>{ size: sizeObject };

		component.ngOnInit();

		sinon.assert.calledOnce(breakpointService.getClass);
		sinon.assert.calledWith(breakpointService.getClass, sizeObject);
		expect(component.sizeClass).to.equal(size);
	});

	it('should return an empty string if there is no item', () => {
		component.column = <any>{ getValue: 'value' };

		expect(component.value).to.be.empty;
	});

	it('should return an empty string if there is no getValue on the column', () => {
		component.item = {};
		component.column = <any>{};

		expect(component.value).to.be.empty;
	});

	it('should use the value as a key if it\'s a string', () => {
		component.column = <any>{ getValue: 'value' };
		const value = 123;
		component.item = { value };

		expect(component.value).to.equal(value);
	});

	it('should use the value as a mapper by default', () => {
		component.column = <any>{ getValue: item => item.value };
		const value = 123;
		component.item = { value };

		expect(component.value).to.equal(value);
	});
});
