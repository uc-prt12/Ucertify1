
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-aaa128d2.js';

/* clsSMExternal\externalHelper.svelte generated by Svelte v3.40.2 */

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
		let iframexml = frameNode.save_data(1, 0, true);
		let correct = iframexml.toString().match(/<correct>[\s\S]*?<\/correct>/img);
		correct = correct.toString().replace(/\$/g, '<ucdollor>');
		correct = xml.toString().replace(/<correct>[\s\S]*?<\/correct>/img, correct.toString());
		correct = correct.toString().replace(/<ucdollor>/g, '$');
		return correct;
	},
	verticalView: true,
	doNotformatXml: true,
	helpVideo: {
		"11": '//player.vimeo.com/external/373755193.hd.mp4?s=bcc2f06c653081342e3503fc3f056949baadf1bd'
	}
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('ExternalHelper', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<ExternalHelper> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ itemHelper });
	return [];
}

class ExternalHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ExternalHelper",
			options,
			id: create_fragment.name
		});
	}
}

export default ExternalHelper;
export { itemHelper };
//# sourceMappingURL=externalHelper-0a9d3622.js.map
