import { PagingService, startFrom } from './paging.service';

describe('PagingService', () => {
	let paging: PagingService;

	beforeEach(() => {
		paging = new PagingService();
	});

	it('should restrict data set to page size', (): void => {
		const pageNumber = 1;
		const pageSize = 2;

		const result: number[] = paging.filter([1, 2, 3, 4], pageNumber, pageSize);

		expect(result).to.deep.equal([1, 2]);
	});

	it('should skip to indicated page', (): void => {
		const pageNumber = 3;
		const pageSize = 1;

		const result: number[] = paging.filter([1, 2, 3, 4], pageNumber, pageSize);

		expect(result).to.deep.equal([3]);
	});

	it('should be empty if page goes past the end', (): void => {
		const pageNumber = 2;
		const pageSize = 8;

		const result: number[] = paging.filter([1, 2, 3, 4], pageNumber, pageSize);
		
		expect(result).to.be.empty;
	});

	describe('startFrom', () => {
		it('should start from 0 on the first page', () => {
			expect(startFrom(1, 3)).to.equal(0);
		});

		it('should increment by the page size', () => {
			expect(startFrom(2, 3)).to.equal(3);
		});
	});
});
