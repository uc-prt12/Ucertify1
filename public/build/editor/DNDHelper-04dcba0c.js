
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-74719bf5.js';

/* clsSMDragNDrop\DNDHelper.svelte generated by Svelte v3.40.2 */

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
		"1": '//player.vimeo.com/external/286997406.hd.mp4?s=599b6d229f72bac2c58b8c890c2d864412d9f1d6',
		"0": '//player.vimeo.com/external/286997406.hd.mp4?s=599b6d229f72bac2c58b8c890c2d864412d9f1d6',
		"2": '//player.vimeo.com/external/271328104.hd.mp4?s=4392d6b982fa38441fdd0a5fd82c92ae30f2678c',
		"3": '//player.vimeo.com/external/287019199.hd.mp4?s=b6ac600385a2e4c7049079c974bc483e4df845e3',
		"4": '//player.vimeo.com/external/287019231.hd.mp4?s=46fb7260d6074787266ebc6c239cf0a2e9660dff',
		"5": '//player.vimeo.com/external/271328521.hd.mp4?s=22b119cd00ed543a5b0704417312e53af0000fd3'
	}
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('DNDHelper', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<DNDHelper> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ itemHelper });
	return [];
}

class DNDHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DNDHelper",
			options,
			id: create_fragment.name
		});
	}
}

export default DNDHelper;
export { itemHelper };
//# sourceMappingURL=DNDHelper-04dcba0c.js.map
