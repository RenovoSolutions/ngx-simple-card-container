import { Directive, TemplateRef } from '@angular/core';

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

export const TEMPLATE_DIRECTIVES = [CardContentTemplate, CardFooterTemplate, ContainerHeaderTemplate, ContainerFooterTemplate];
