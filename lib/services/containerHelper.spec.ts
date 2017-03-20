import { getTemplate } from './containerHelper';

describe('containerHelper', () => {
	it('should get a matching column template from the card container', (): void => {
		const template = { name: 'template' };
		const templates = <any>{
			items: [template, { name: 'otherTemplate' }],
			filter: func => templates.items.filter(func),
		};

		expect(getTemplate('template', templates)).to.equal(template);
	});
});