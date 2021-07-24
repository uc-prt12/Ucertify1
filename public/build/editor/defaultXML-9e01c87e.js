
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-e16bbb64.js';

/* clsSMChoose\defaultXML.svelte generated by Svelte v3.40.2 */

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
		"editor_item_15.xml": '<SMXML type="6" name="ChooseAndReorder"><list headingCorrect="Filename Extension" headingAll="" allowSort="0" ><![CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]></list></SMXML>',
		"editor_item_16.xml": '<SMXML type="6" name="ChooseAndReorder"><list headingCorrect="Installing a hard disk drive" headingAll="" allowSort="1" ><![CDATA[*Ensure proper ESD (electrostatic discharge) protection.\n*Open the PC case.\n*Set the jumpers or switches.\n*Install the drive in an empty drive bay.\n*Connect the data ribbon cable.\n*Connect the power cable.\n*Close the PC case.]]></list></SMXML>',
		"editor_item_75.xml": '<SMXML type="6" name="ChooseAndReorder"><list groupcheck="false" whichfixed ="" headingCorrect="IP Classes" row="2" col="3"><!--[CDATA[!Class A\n!Class B\n!Class C\n21.3.23.233\n128.1.1.1\n200.255.255.255]]--></list></SMXML>',
		"editor_item_17.xml": '<smxml xmlns="http://www.w3.org/1999/xhtml" type="6" name="ChooseAndReorder"><list headingcorrect="Filename Extension" headingall="" allowsort="1" issentence="0" isparagraph="1"><!--[CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]--></list></smxml>',
		"editor_item_18.xml": '<smxml xmlns="http://www.w3.org/1999/xhtml" type="6" name="ChooseAndReorder"><list headingcorrect="Filename Extension" headingall="" allowsort="1" issentence="1" isparagraph="0"><!--[CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]--></list></smxml>',
		"sample": '<smxml xmlns="http://www.w3.org/1999/xhtml" type="6" name="ChooseAndReorder"><list headingcorrect="Filename Extension" headingall="" allowsort="1" issentence="1" isparagraph="0"><!--[CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]--></list></smxml>'
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
//# sourceMappingURL=defaultXML-9e01c87e.js.map
