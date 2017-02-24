import { BreakpointSizesService } from './breakpointSizes.service';

describe('BreakpointSizesService', () => {
	let service: BreakpointSizesService;

	beforeEach(() => {
		service = new BreakpointSizesService();
	});

	it('should convert an object of breakpoint sizes into a class string', () => {
		const sizes = {
			lg: 4,
			md: 3,
			sm: 2,
			xs: 1,
		};
		expect(service.getClass(sizes)).to.equal('col-xs-1 col-sm-2 col-md-3 col-lg-4');
	});

	it('should specify hidden for sizes that are not present', () => {
		const sizes = {
			lg: 4,
			md: 3,
			sm: 0,
			xs: 0,
		};
		expect(service.getClass(sizes)).to.equal('hidden-xs hidden-sm col-md-3 col-lg-4');
	});

	it('should cascade smaller sizes up', () => {
		const sizes = {
			xs: 1,
			md: 3,
		};
		const builtSizes = service.buildSizes(sizes);

		expect(builtSizes.xs).to.equal(1);
		expect(builtSizes.sm).to.equal(1);
		expect(builtSizes.md).to.equal(3);
		expect(builtSizes.lg).to.equal(3);
	});

	it('should fill empty sizes with 0', () => {
		const builtSizes = service.buildSizes({});

		expect(builtSizes.xs).to.equal(0);
		expect(builtSizes.sm).to.equal(0);
		expect(builtSizes.md).to.equal(0);
		expect(builtSizes.lg).to.equal(0);
	});

	it('should use a constant size for all breakpoints', () => {
		const builtSizes = service.buildSizes(2);

		expect(builtSizes.xs).to.equal(2);
		expect(builtSizes.sm).to.equal(2);
		expect(builtSizes.md).to.equal(2);
		expect(builtSizes.lg).to.equal(2);
	});
});