import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({ selector: '[sccCardContent]' })
export class CardContentTemplate {
	constructor(public template: TemplateRef<any>) {	}
}

@Directive({ selector: '[sccCardFooter]' })
export class CardFooterTemplate {
	constructor(public template: TemplateRef<any>) {	}
}

@Directive({ selector: '[sccContainerHeader]' })
export class ContainerHeaderTemplate {
	constructor(public template: TemplateRef<any>) {	}
}

@Directive({ selector: '[sccContainerFooter]' })
export class ContainerFooterTemplate {
	constructor(public template: TemplateRef<any>) {	}
}

@Directive({ selector: '[sccColumnHeader]' })
export class ColumnHeaderTemplate {
	@Input() sccColumnHeaderName: string;

	get name(): string {
		return this.sccColumnHeaderName;
	}

	constructor(public template: TemplateRef<any>) {	}
}

@Directive({ selector: '[sccColumnContent]' })
export class ColumnContentTemplate {
	@Input() sccColumnContentName: string;

	get name(): string {
		return this.sccColumnContentName;
	}

	constructor(public template: TemplateRef<any>) {	}
}

export const TEMPLATE_DIRECTIVES = [
	CardContentTemplate,
	CardFooterTemplate,
	ContainerHeaderTemplate,
	ContainerFooterTemplate,
	ColumnHeaderTemplate,
	ColumnContentTemplate,
];
