import { SortDirection } from './sortDirection';

describe('SortDirection', () => {
	it('should return the next sort direction', () => {
		expect(SortDirection.toggle(SortDirection.none)).to.equal(SortDirection.ascending);
		expect(SortDirection.toggle(SortDirection.ascending)).to.equal(SortDirection.descending);
		expect(SortDirection.toggle(SortDirection.descending)).to.equal(SortDirection.none);
	});

	it('should return the name of the sort direction', () => {
		expect(SortDirection.ascending.fullName).to.equal('ascending');
		expect(SortDirection.descending.fullName).to.equal('descending');
		expect(SortDirection.none.fullName).to.equal('none');
	});
});
