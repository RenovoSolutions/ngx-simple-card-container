import { drop, take } from 'lodash';

export class PagingService {
	filter<T>(dataSet: T[], pageNumber: number, pageSize: number): T[] {
		return take(drop(dataSet, startFrom(pageNumber, pageSize)), pageSize);
	}
}

export function startFrom(pageNumber: number, pageSize: number): number {
	return (pageNumber - 1) * pageSize;
}
