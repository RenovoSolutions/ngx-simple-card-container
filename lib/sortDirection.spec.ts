import { SortDirection } from './sortDirection';

describe('SortDirection', () => {
	it('should return the next sort direction', () => {
		expect(SortDirection.toggle(SortDirection.none)).to.equal(SortDirection.ascending);
		expect(SortDirection.toggle(SortDirection.ascending)).to.equal(SortDirection.descending);
		expect(SortDirection.toggle(SortDirection.descending)).to.equal(SortDirection.none);
	});

	it('should return the name of the sort direction', () => {
		expect(SortDirection.getFullName(SortDirection.ascending)).to.equal('ascending');
		expect(SortDirection.getFullName(SortDirection.descending)).to.equal('descending');
		expect(SortDirection.getFullName(SortDirection.none)).to.equal('none');
	});
});
