
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-12d683cf.js';

/* clsSMList\defaultXML.svelte generated by Svelte v3.40.2 */

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
		"editor_item_078.xml": `<SMXML type="57" name="List" imported_by="" file="" imported_on="" pt="" disabled_generate="1"><!--[CDATA[{"list": [
                {
                    "c1": "Question", "c2": "Answer", "pg": "", "cg": "", "ag": [], "rn": []
                },
                {
                    "c1": "Data1", "c2": "Meaning1", "pg": "", "cg": "", "ag": [], "rn": []
                },
                {
                    "c1": "Data2", "c2": "Meaning2", "pg": "", "cg": "", "ag": [], "rn": []
                },
                {
                    "c1": "Data3", "c2": "Meaning3", "pg": "", "cg": "", "ag": [], "rn": []
                },
                {
                    "c1": "Data4", "c2": "Meaning4", "pg": "", "cg": "", "ag": [], "rn": []
                }]
            }
        ]]--></SMXML>`,
		"sample": `<SMXML type="57" name="List" imported_by="" file="" imported_on="" pt="" disabled_generate="1"><!--[CDATA[{"list": [
            {
                "c1": "Question", "c2": "Answer", "pg": "", "cg": "", "ag": [], "rn": []
            },
            {
                "c1": "Data1", "c2": "Meaning1", "pg": "", "cg": "", "ag": [], "rn": []
            },
            {
                "c1": "Data2", "c2": "Meaning2", "pg": "", "cg": "", "ag": [], "rn": []
            },
            {
                "c1": "Data3", "c2": "Meaning3", "pg": "", "cg": "", "ag": [], "rn": []
            },
            {
                "c1": "Data4", "c2": "Meaning4", "pg": "", "cg": "", "ag": [], "rn": []
            }]
        }]]--></SMXML>`
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
//# sourceMappingURL=defaultXML-515a9fa7.js.map
