import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[sccCardContent]' })
export class CardContentTemplate {
	constructor(public template: TemplateRef<any>) {	}
}

@Directive({ selector: '[sccCardFooter]' })
export class CardFooterTemplate {
	constructor(public template: TemplateRef<any>) {	}
}

export const TEMPLATE_DIRECTIVES = [CardContentTemplate, CardFooterTemplate];
