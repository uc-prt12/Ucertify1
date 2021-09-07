
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-fdaf2a34.js';

/* clsSMGraph\defaultXML.svelte generated by Svelte v3.40.2 */

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
		"editor_item_32.xml": '<smxml type="20" name="Math"><plot id="ID0" type="association" xtickdistance="1" ytickdistance="1" anskey="" xaxis="3" yaxis="3" height="300" width="450" polygon_type="0" reflection="" equation=""></plot></smxml>',
		"editor_item_35.xml": '<smxml type="20" name="Math"><plot id="ID0" type="point" xtickdistance="1" ytickdistance="1" anskey="1,4|-4,-3|4,-3" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation=""></plot></smxml>',
		"editor_item_36.xml": '<smxml type="20" name="Math"><plot id="ID0" type="line" xtickdistance="1" ytickdistance="1" anskey="1,2|3,4" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation="y=x+1"></plot></smxml>',
		"editor_item_37.xml": '<smxml type="20" name="Math"><plot id="ID0" type="circle" xtickdistance="1" ytickdistance="1" anskey="2,5/2" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation="(x-2)^2+(y-5)^2=2^2"></plot></smxml>',
		"editor_item_38.xml": '<smxml type="20" name="Math"><plot id="ID0" type="parabola" xtickdistance="1" ytickdistance="1" anskey="0,-2|1,-1" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation="y=x^2-2"></plot></smxml>',
		"editor_item_40.xml": '<smxml type="20" name="Math"><plot id="ID0" type="polygon" xtickdistance="1" ytickdistance="1" anskey="-1,-5|-1,-1|-5,-1|-1,-5" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation=""></plot></smxml>',
		"editor_item_41.xml": '<smxml type="20" name="Math"><plot id="ID0" type="segment" xtickdistance="1" ytickdistance="1" anskey="-3,2|4,8" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation=""></plot></smxml>',
		"editor_item_42.xml": '<smxml type="20" name="Math"><plot id="ID0" type="ray" xtickdistance="1" ytickdistance="1" anskey="1,1|5,5" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation=""></plot></smxml>',
		"editor_item_43.xml": '<smxml type="20" name="Math"><plot id="ID0" type="vector" xtickdistance="1" ytickdistance="1" anskey="1,2|6,7" xaxis="10" yaxis="10" height="450" width="450" polygon_type="0" reflection="" equation=""></plot></smxml>',
		"editor_item_44.xml": '<smxml type="20" name="Math"><plot id="ID0" type="sine" xtickdistance="90" ytickdistance="1" anskey="0,0|90,2" xaxis="720" yaxis="3" height="450" width="700" polygon_type="0" reflection="" equation="y=2*sin(x)"></plot></smxml>',
		"editor_item_31.xml": '<smxml type="20" name="Math"><plot id="ID0" type="cosine" xtickdistance="90" ytickdistance="1" anskey="90,0|0,2" xaxis="720" yaxis="3" height="450" width="700" polygon_type="0" reflection="" equation="y=2*cos(x)"></plot></smxml>',
		"sample": '<smxml type="20" name="Math"><plot id="ID0" type="cosine" xtickdistance="90" ytickdistance="1" anskey="90,0|0,2" xaxis="720" yaxis="3" height="450" width="700" polygon_type="0" reflection="" equation="y=2*cos(x)"></plot></smxml>'
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
//# sourceMappingURL=defaultXML-7dd7741e.js.map
