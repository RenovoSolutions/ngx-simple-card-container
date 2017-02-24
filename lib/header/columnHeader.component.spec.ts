import { ColumnHeaderComponent } from './columnHeader.component';
import { SortDirection } from '../sortDirection';

describe('ColumnHeaderComponent', () => {
	let component: ColumnHeaderComponent<any>;
	let breakpointService: any;

	beforeEach(() => {
		breakpointService = {};
		component = new ColumnHeaderComponent(breakpointService);
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

	it('should emit the column with the sort direction toggled', () => {
		const column = {
			name: 'name',
			sortDirection: SortDirection.ascending,
		};
		component.column = <any>column;
		const sortSpy = sinon.spy();
		component.sort.subscribe(sortSpy);

		component.changeSort();

		sinon.assert.calledOnce(sortSpy);
		sinon.assert.calledWith(sortSpy, { 
			name: 'name', 
			sortDirection: SortDirection.descending,
		});
	});
});
