import { PagerComponent } from './pager.component';

describe('PagerComponent', () => {
	let pager: PagerComponent;

	beforeEach(() => {
		pager = new PagerComponent();
	});

	describe('lastPage', () => {
		it('should get the total number of pages based on the count and page size', () => {
			pager.totalCount = 40;
			pager.pageSize = 4;
			
			expect(pager.lastPage).to.equal(10);
		});

		it('should round up to the nearest page', () => {
			pager.totalCount = 41;
			pager.pageSize = 4;
			
			expect(pager.lastPage).to.equal(11);
		});
	});

	describe('canGoBack', () => {
		it('should be true if the page number is greater than 1', () => {
			pager.pageNumber = 4;
			expect(pager.canGoBack).to.be.true;
		});

		it('should be false if the page number is 1', () => {
			pager.pageNumber = 1;
			expect(pager.canGoBack).to.be.false;
		});
	});

	describe('canGoForward', () => {
		it('should be true if the page number is less than the last page', () => {
			pager.pageNumber = 4;
			pager.totalCount = 40;
			pager.pageSize = 4;
			
			expect(pager.canGoForward).to.be.true;
		});

		it('should be false if the page number is equal to the last page', () => {
			pager.pageNumber = 4;
			pager.totalCount = 40;
			pager.pageSize = 10;
			
			expect(pager.canGoForward).to.be.false;
		});
	});

	describe('pages', () => {
		beforeEach(() => {
			pager.pageSize = 1;
		});

		it('should generate a range of pages centered around the current page', () => {
			pager.totalCount = 5;
			pager.pageNumber = 3;
			
			expect(pager.pages).to.deep.equal([1, 2, 3, 4, 5]);
		});

		it('should show more pages after the current page if too close to the first page', () => {
			pager.totalCount = 5;
			pager.pageNumber = 2;

			expect(pager.pages).to.deep.equal([1, 2, 3, 4, 5]);
		});

		it('should show more pages before the current page if too close to the last page', () => {
			pager.totalCount = 8;
			pager.pageNumber = 7;

			expect(pager.pages).to.deep.equal([4, 5, 6, 7, 8]);
		});

		it('should show all pages if the page count is greater than the number of pages', () => {
			pager.totalCount = 3;
			pager.pageNumber = 3;

			expect(pager.pages).to.deep.equal([1, 2, 3]);
		});
	});

	describe('pageNumberChange', () => {
		let pageNumberSpy;

		beforeEach(() => {
			pageNumberSpy = sinon.spy();
			pager.pageNumberChange.subscribe(pageNumberSpy);
			// 5 pages
			pager.pageSize = 1;
			pager.totalCount = 5;
		});

		describe('first', (): void => {
			it('should set the current page to the first page', (): void => {
				pager.first();

				sinon.assert.calledOnce(pageNumberSpy);
				sinon.assert.calledWith(pageNumberSpy, 1);
			});
		});

		describe('previous', (): void => {
			it('should decrement the current page if it is not on the first page', (): void => {
				pager.pageNumber = 5;

				pager.previous();

				sinon.assert.calledOnce(pageNumberSpy);
				sinon.assert.calledWith(pageNumberSpy, 4);
			});

			it('should stay on the current page if it is on the first page', (): void => {
				pager.pageNumber = 1;

				pager.previous();

				sinon.assert.notCalled(pageNumberSpy);
			});
		});

		describe('next', (): void => {
			it('should increment the current page if it is not on the last page', (): void => {
				pager.pageNumber = 1;

				pager.next();

				sinon.assert.calledOnce(pageNumberSpy);
				sinon.assert.calledWith(pageNumberSpy, 2);
			});

			it('should stay on the current page if it is on the last page', (): void => {
				pager.pageNumber = 5;

				pager.next();

				sinon.assert.notCalled(pageNumberSpy);
			});
		});

		describe('goto', (): void => {
			it('should go to the specified page if the page exists', (): void => {
				pager.goto(3);
				
				sinon.assert.calledOnce(pageNumberSpy);
				sinon.assert.calledWith(pageNumberSpy, 3);
			});

			it('should stay on the current page if the specified page is before the first page', (): void => {
				pager.goto(0);
				
				sinon.assert.notCalled(pageNumberSpy);
			});

			it('should stay on the current page if the specified page is after the last page', (): void => {
				pager.goto(6);

				sinon.assert.notCalled(pageNumberSpy);
			});
		});

		describe('last', (): void => {
			it('should go to the last page', (): void => {
				pager.last();

				sinon.assert.calledOnce(pageNumberSpy);
				sinon.assert.calledWith(pageNumberSpy, 5);
			});
		});
	});
});
