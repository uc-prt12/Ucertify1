
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-674e3b87.js';

/* clsSMTree\defaultXML.svelte generated by Svelte v3.29.0 */

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
		"editor_item_39.xml": "<SMXML type=\"7\" name=\"TreeView\"><tree headingCorrect=\"Permission Types\" headingAll=\"Permissions\" allowSort=\"0\" allowMulti=\"1\"><![CDATA[#Permissions\n##Standard NTFS folder permissons\n###[Read]\n###[Write]\n###[List Folder Contents]\n###[Read & Execute]\n###[Modify]\n###[Full Control]\n##Standard NTFS file permissions\n###[Read]\n###[Write]\n###[Read & Execute]\n###[Modify]\n###[Full Control]\n##Standard shared folder permission\n###[Read]\n###[Change]\n###[Full Control]\n ]]></tree></SMXML>",
		"sample": "<SMXML type=\"7\" name=\"TreeView\"><tree headingCorrect=\"Permission Types\" headingAll=\"Permissions\" allowSort=\"0\" allowMulti=\"1\"><![CDATA[#Permissions\n##Standard NTFS folder permissons\n###[Read]\n###[Write]\n###[List Folder Contents]\n###[Read & Execute]\n###[Modify]\n###[Full Control]\n##Standard NTFS file permissions\n###[Read]\n###[Write]\n###[Read & Execute]\n###[Modify]\n###[Full Control]\n##Standard shared folder permission\n###[Read]\n###[Change]\n###[Full Control]\n ]]></tree></SMXML>"
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
//# sourceMappingURL=defaultXML-afe1b357.js.map
