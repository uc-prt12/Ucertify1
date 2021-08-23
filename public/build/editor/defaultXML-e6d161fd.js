
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-d0e46147.js';

/* clsSMMixedItem\defaultXML.svelte generated by Svelte v3.40.2 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getDefaultXMl(type) {
	var xmls = {
		"sample": `<smxml type="37"><step seq="1" viewonly="1"><!--[CDATA[Point P is (2,3) and point Q is (5,9) What is the slope of line PQ?]]--></step><step seq="2" viewonly="1" ><!--[CDATA[The slope of the line through the distinct (x1, y1) & (x2, y2) is (y2-y1)/(x2-x1)]]--></step><step seq="3"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. this problem let us use point P as point 1 x1 = %{2|n}%]]--></step><step seq="4"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. In this problem let us use point P as point 2 x2 = %{3|n}%]]--></step><step seq="5"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. In this problem let us use point Q as point 1 y1 = %{5|n}%]]--></step><step seq="6"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. In this problem let us use point Q as point 2 y2 = %{9|n}%]]--></step><step seq="7"  attempt="1"><!--[CDATA[The slope is (9-3)/(5-2) = %{2|n}%]]--></step><step seq="8"  viewonly="1"><!--[CDATA[So, the slope of the line PQ situated on an x-y plane, where the coordinates of the points P and Q are (2,3) and (5,9), respectively is 2]]--></step></smxml>`,
		"editor_item_102.xml": `<smxml type="37"><step seq="1" viewonly="1"><!--[CDATA[Point P is (2,3) and point Q is (5,9) What is the slope of line PQ?]]--></step><step seq="2" viewonly="1" ><!--[CDATA[The slope of the line through the distinct (x1, y1) & (x2, y2) is (y2-y1)/(x2-x1)]]--></step><step seq="3"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. this problem let us use point P as point 1 x1 = %{2|n}%]]--></step><step seq="4"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. In this problem let us use point P as point 2 x2 = %{3|n}%]]--></step><step seq="5"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. In this problem let us use point Q as point 1 y1 = %{5|n}%]]--></step><step seq="6"  attempt="1"><!--[CDATA[It doesn’t matter which coordinates represent point 1 and point 2, but the choice must remain consistent when applying the formula. In this problem let us use point Q as point 2 y2 = %{9|n}%]]--></step><step seq="7"  attempt="1"><!--[CDATA[The slope is (9-3)/(5-2) = %{2|n}%]]--></step><step seq="8"  viewonly="1"><!--[CDATA[So, the slope of the line PQ situated on an x-y plane, where the coordinates of the points P and Q are (2,3) and (5,9), respectively is 2]]--></step></smxml>`
	};

	return xmls[type];
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('DefaultXML', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<DefaultXML> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ getDefaultXMl });
	return [];
}

class DefaultXML extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DefaultXML",
			options,
			id: create_fragment.name
		});
	}
}

export default DefaultXML;
export { getDefaultXMl };
//# sourceMappingURL=defaultXML-e6d161fd.js.map
