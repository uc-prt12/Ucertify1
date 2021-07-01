
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-9d98459d.js';

/* clsSMEval/evalHelper.svelte generated by Svelte v3.29.0 */

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

const itemHelper = {
	getXml(frameNode, xml, subtype) {
		return frameNode.generateXml();
	},
	onOpenSave(state, func) {
		if (!state.db_changed) {
			return true;
		} else {
			return false;
		}
	},
	checkDataOnSave(data, content_subtype, self, updateModule) {
		let xml = self.state.xml;
		let parsed24Xml = XMLToJSON(xml);

		if (parsed24Xml && parsed24Xml.smxml._language == "sql") {
			let changedXML = xml.match(/<case>[\s\S]*?<\/case>/g).join("").split("<case>");

			for (let index = 0; index < changedXML.length; index++) {
				changedXML[index] = changedXML[index].substring(changedXML[index].indexOf("|") + 1);
			}

			changedXML = changedXML.join("<case>|");
			xml = xml.replace(/<testcases>[\s\S]*?<\/testcases>/g, "<testcases>" + changedXML + "</testcases>");
			updateModule({ xml });
		}

		data["special_module_xml"] = xml;
		return data;
	},
	verticalView: true,
	doNotformatXml: true,
	helpVideo: "//player.vimeo.com/external/287909057.hd.mp4?s=294a3cad46aec8d3cd8620b56ad7fa7e4aca731b"
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("EvalHelper", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<EvalHelper> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ itemHelper });
	return [];
}

class EvalHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "EvalHelper",
			options,
			id: create_fragment.name
		});
	}
}

export default EvalHelper;
export { itemHelper };
//# sourceMappingURL=evalHelper-ba85c08b.js.map
