
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-fdaf2a34.js';

/* clsSMExternal\defaultXML.svelte generated by Svelte v3.40.2 */

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
		"editor_item_56.xml": '<smxml type="16" name="External"><msoffice type="msword" version="2007" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_57.xml": '<smxml type="16" name="External"><msoffice type="msword" version="2010" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_58.xml": '<smxml type="16" name="External"><msoffice type="msword" version="2013" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_59.xml": '<smxml type="16" name="External"><msoffice type="msexcel" version="2007" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_60.xml": '<smxml type="16" name="External"><msoffice type="msexcel" version="2010" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_61.xml": '<smxml type="16" name="External"><msoffice type="msexcel" version="2013" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_62.xml": '<smxml type="16" name="External"><msoffice type="mspowerpoint" version="2007" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_63.xml": '<smxml type="16" name="External"><msoffice type="mspowerpoint" version="2010" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_64.xml": '<smxml type="16" name="External"><msoffice type="mspowerpoint" version="2013" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_65.xml": '<smxml type="16" name="External"><windows type="windowsxp" version="" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></windows></smxml>',
		"editor_item_66.xml": '<smxml type="16" name="External"><windows type="windows7" version="" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></windows></smxml>',
		"editor_item_67.xml": '<smxml type="16" name="External"><windows type="windowsserver2012" version="" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></windows></smxml>',
		"editor_item_68.xml": '<smxml type="16" name="External"><sqlserver type="sqlserver2012" title="" sequence="0"><default><![CDATA[]]></default><correct><![CDATA[dialog=connect_object_browser_option]]></correct></sqlserver></smxml>',
		"editor_item_71.xml": '<smxml type="16" name="External"><windows type="windows8" version="" title="" sequence="0" multicheck=""><default><![CDATA[]]></default><correct><![CDATA[]]></correct></windows></smxml>',
		"editor_item_73.xml": '<smxml type="16" name="External"><windows type="windows10" version="" title="" sequence="0" multicheck=""><default><![CDATA[]]></default><correct><![CDATA[]]></correct></windows></smxml>',
		"editor_item_74.xml": '<smxml type="16" name="External"><msoffice type="msoutlook" version="2013" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_79.xml": '<smxml type="16" name="External"><msoffice type="msoutlook" version="2016" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_80.xml": '<smxml type="16" name="External"><msoffice type="mspowerpoint" version="2016" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_81.xml": '<smxml type="16" name="External"><msoffice type="msword" version="2016" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_84.xml": '<smxml type="16" name="External"><msoffice type="msexcel" version="2016" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"editor_item_96.xml": '<smxml type="16" name="External"><windows type="windowserver2016" version="" title="" sequence="" multicheck=""><default><![CDATA[]]></default><correct><![CDATA[]]></correct></windows></smxml>',
		"editor_item_97.xml": '<smxml type="16" name="External"><msoffice title="" type="msaccess" multicheck="false" sequence="0" version="2016"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>',
		"sample": '<smxml type="16" name="External"><msoffice type="msword" version="2007" title="" sequence="0" multicheck="false"><default><![CDATA[]]></default><correct><![CDATA[]]></correct></msoffice></smxml>'
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
//# sourceMappingURL=defaultXML-3a53d702.js.map
