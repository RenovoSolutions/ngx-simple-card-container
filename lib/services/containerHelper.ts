
import { QueryList } from '@angular/core';

export function getTemplate<T extends { name: string }>(columnName: string, templates: QueryList<T>): T {
	return templates.filter(column => column.name === columnName)[0];
}
