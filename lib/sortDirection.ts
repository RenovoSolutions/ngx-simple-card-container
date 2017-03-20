export interface ISortDirections {
	ascending: SortDirection;
	descending: SortDirection;
	none: SortDirection;
}

export class SortDirection {
	public static none: SortDirection = new SortDirection(0, 'none');
	public static ascending: SortDirection = new SortDirection(1, 'ascending');
	public static descending: SortDirection = new SortDirection(2, 'descending');

	constructor(private value: number
			, public fullName: string) { }

	public static toggle(direction: SortDirection): SortDirection {
		if (direction === SortDirection.ascending) {
			return SortDirection.descending;
		} else if (direction === SortDirection.descending) {
			return SortDirection.none;
		} else {
			return SortDirection.ascending;
		}
	}
}
