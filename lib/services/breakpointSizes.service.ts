import { Injectable } from '@angular/core';

import { xs, sm, md, lg } from './breakpoints';
import { IBreakpointSize } from '../interfaces';

@Injectable()
export class BreakpointSizesService {
	getClass(sizes: IBreakpointSize | number): string {
		const configuredSizes = this.buildSizes(sizes);
		const classes: string[] = [
			this.getColumnClass(configuredSizes, xs),
			this.getColumnClass(configuredSizes, sm),
			this.getColumnClass(configuredSizes, md),
			this.getColumnClass(configuredSizes, lg),
		];

		return classes.join(' ');
	}

	buildSizes(sizes: IBreakpointSize | number): IBreakpointSize {
		if (typeof sizes === 'number') {
			return {
				xs: <number>sizes,
				sm: <number>sizes,
				md: <number>sizes,
				lg: <number>sizes,
			};
		} else {
			const xsSize = sizes[xs] || 0;
			const smSize = sizes[sm] || xsSize;
			const mdSize = sizes[md] || smSize;
			const lgSize = sizes[lg] || mdSize;
			
			return {
				xs: xsSize,
				sm: smSize,
				md: mdSize,
				lg: lgSize,
			};
		}
	}

	private getColumnClass(columnSizes: IBreakpointSize, attribute: string): string {
		const value: number | string = columnSizes[attribute];
		if (value > 0 && value !== 'hidden') {
			return `col-${attribute}-${value}`;
		} else {
			return 'hidden-' + attribute;
		}
	}
}