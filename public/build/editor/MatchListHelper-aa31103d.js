
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-d3847ba4.js';

/* clsSMMatchList\MatchListHelper.svelte generated by Svelte v3.40.2 */

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
	helpVideo: {
		'0': '//player.vimeo.com/external/287631972.hd.mp4?s=de3e0e69febd1bbc849d44b17a031e4bf58c96bb',
		'1': '//player.vimeo.com/external/287631972.hd.mp4?s=de3e0e69febd1bbc849d44b17a031e4bf58c96bb',
		'2': '//player.vimeo.com/external/287631972.hd.mp4?s=de3e0e69febd1bbc849d44b17a031e4bf58c96bb'
	}
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('MatchListHelper', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<MatchListHelper> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ itemHelper });
	return [];
}

class MatchListHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MatchListHelper",
			options,
			id: create_fragment.name
		});
	}
}

export default MatchListHelper;
export { itemHelper };
//# sourceMappingURL=MatchListHelper-aa31103d.js.map