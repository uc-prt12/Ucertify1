
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-ff508531.js';

/* clsSMChart\defaultXML.svelte generated by Svelte v3.34.0 */

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
	let xmls = {
		"editor_item_45.xml": "<SMXML type=\"38\" name=\"chart\"><chart id=\"ID0\" height=\"500\" width=\"550\" type=\"column\" xval=\"[1,2,3,4,5,6]\" yinterval=\"5\" ymax=\"50\" ymin=\"1\" xmin=\"1\" xmax=\"6\" xinterval=\"1\" defaultans=\"10,20,30\" snapTo=\"5\" correctans=\"|0,10|1,20|2,30|\" xlabel=\"Years\" ylabel=\"Quantity in Tons\" title=\"Bar Chart\" color=\"#7cb5ec\" ></chart></SMXML>",
		"editor_item_46.xml": "<smxml type=\"38\" name=\"chart\"><chart id=\"ID0\" height=\"500\" width=\"550\" type=\"line\" xval=\"[1,2,3,4,5,6]\" yinterval=\"5\" ymax=\"50\" ymin=\"1\" xmin=\"1\" xmax=\"6\" xinterval=\"1\" defaultans=\"10,20,30\" snapto=\"5\" correctans=\"|0,10|1,20|2,30|\" xlabel=\"Hours\" ylabel=\"Values\" title=\"Line Chart\" color=\"#7cb5ec\"></chart></smxml>",
		"editor_item_47.xml": "<smxml type=\"38\" name=\"chart\"><chart id=\"ID0\" height=\"500\" width=\"550\" type=\"histogram\" xval=\"[10,20,30,40,50,60]\" yinterval=\"5\" ymax=\"50\" ymin=\"1\" xmin=\"10\" xmax=\"60\" xinterval=\"10\" defaultans=\"10,20,30\" snapto=\"5\" correctans=\"|0,10|1,20|2,30|\" xlabel=\"Hours\" ylabel=\"Values\" title=\"Histogram Chart\"></chart></smxml>",
		"editor_item_48.xml": "<smxml type=\"38\" name=\"chart\"><chart id=\"ID0\" height=\"500\" width=\"550\" type=\"dotplot\" xval=\"[1,2,3,4,5,6]\" yinterval=\"5\" ymax=\"50\" ymin=\"1\" xmin=\"1\" xmax=\"6\" xinterval=\"1\" defaultans=\"1,2,3\" snapto=\"10\" correctans=\"|0,10|1,20|2,30|\" xlabel=\"Set Frequency\" title=\"Dot Plot\" color=\"#7cb5ec\"></chart></smxml>",
		"sample": "<smxml type=\"38\" name=\"chart\"><chart id=\"ID0\" height=\"500\" width=\"550\" type=\"dotplot\" xval=\"[1,2,3,4,5,6]\" yinterval=\"5\" ymax=\"50\" ymin=\"1\" xmin=\"1\" xmax=\"6\" xinterval=\"1\" defaultans=\"1,2,3\" snapto=\"10\" correctans=\"|0,10|1,20|2,30|\" xlabel=\"Set Frequency\" title=\"Dot Plot\" color=\"#7cb5ec\"></chart></smxml>"
	};

	return xmls[type];
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DefaultXML", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DefaultXML> was created with unknown prop '${key}'`);
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
//# sourceMappingURL=defaultXML-e62bd9d0.js.map
