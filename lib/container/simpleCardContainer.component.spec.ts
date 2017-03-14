import { SimpleCardContainerComponent, defaultPageSize } from './simpleCardContainer.component';

interface PagingServiceMock {
	filter: sinon.SinonSpy;
}

describe('SimpleCardContainerComponent', () => {
	let component: SimpleCardContainerComponent<number>;
	let pagingService: any;

	beforeEach(() => {
		pagingService = {
			filter: sinon.spy(data => data),
		};
		component = new SimpleCardContainerComponent<number>(<any>pagingService);
	});

	describe('ngOnInit', () => {
		it('should default the page number and page size', () => {
			component.ngOnInit();

			expect(component.pageNumber).to.equal(1);
			expect(component.pageSize).to.equal(defaultPageSize);
		});

		it('should allow the consumer to set a custom page number and page size', () => {
			const pageNumber = 3;
			const pageSize = 20;
			component.pageNumber = pageNumber;
			component.pageSize = pageSize;

			component.ngOnInit();

			expect(component.pageNumber).to.equal(pageNumber);
			expect(component.pageSize).to.equal(pageSize);
		});
		
		it('should not setup the paging service as a data filter by default', () => {
			component.ngOnInit();
			sinon.assert.notCalled(pagingService.filter);
		});

		it('should setup the paging service as a data filter if paging is enabled', () => {
			component.paging = true;
			component.data = [1, 2];
			
			component.ngOnInit();

			sinon.assert.calledOnce(pagingService.filter);
			sinon.assert.calledWith(pagingService.filter, component.data, component.pageNumber, component.pageSize);
		});
	});

	describe('setPage', () => {
		it('should update the page number and emit a paging event', () => {
			const pageSpy = sinon.spy();
			component.page.subscribe(pageSpy)
			component.pageNumber = 1;
			component.pageSize = 10;

			component.setPage(3);

			expect(component.pageNumber).to.equal(3);
			sinon.assert.calledOnce(pageSpy);
			sinon.assert.calledWith(pageSpy, {
				pageSize: component.pageSize,
				pageNumber: 3,
			});
		});
	});

	describe('process', () => {
		it('should process when the data is set', () => {
			const processSpy = sinon.spy(() => [3, 4]);
			component.process = processSpy;

			component.data = [1, 2, 3, 4];

			sinon.assert.calledOnce(processSpy);
			expect(component.data).to.deep.equal([1, 2, 3, 4]);
			expect(component.processedData).to.deep.equal([3, 4]);
		});

		it('should process on init', () => {
			component.data = [1, 2, 3, 4];
			const processSpy = sinon.spy(() => [3, 4]);
			component.process = processSpy;

			component.ngOnInit();

			sinon.assert.calledOnce(processSpy);
			expect(component.processedData).to.deep.equal([3, 4]);
		});

		it('should process on a page change', () => {
			component.data = [1, 2, 3, 4];
			const processSpy = sinon.spy(() => [3, 4]);
			component.process = processSpy;

			component.setPage(1);

			sinon.assert.calledOnce(processSpy);
			expect(component.processedData).to.deep.equal([3, 4]);
		});
	});
});
