import { SortDirection } from './sortDirection';

export interface IBreakpointSize {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
}

export interface IColumn<T> {
	name?: string;
	label: string;
	description?: string;
	size: IBreakpointSize | number;
	getValue: { (item: T): number | string | boolean } | string;
	sortDirection?: SortDirection;
}
