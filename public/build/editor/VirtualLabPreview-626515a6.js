
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, L as beforeUpdate, e as element, h as text, j as attr_dev, l as set_style, k as add_location, n as insert_dev, p as append_dev, F as set_data_dev, B as noop, x as detach_dev } from './main-d98b8a5f.js';

/* clsSMVirtualLab/VirtualLabPreview.svelte generated by Svelte v3.29.0 */
const file = "clsSMVirtualLab/VirtualLabPreview.svelte";

function create_fragment(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(/*xml*/ ctx[0]);
			attr_dev(div, "id", "VirtualLabPreview");
			set_style(div, "white-space", "pre-wrap");
			set_style(div, "word-wrap", "break-word");
			set_style(div, "font-weight", "bold");
			add_location(div, file, 13, 0, 185);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*xml*/ 1) set_data_dev(t, /*xml*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("VirtualLabPreview", slots, []);
	let { editorState } = $$props;
	let xml;

	beforeUpdate(() => {
		if (xml != editorState.xml) {
			$$invalidate(0, xml = editorState.xml);
		}
	});

	const writable_props = ["editorState"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<VirtualLabPreview> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("editorState" in $$props) $$invalidate(1, editorState = $$props.editorState);
	};

	$$self.$capture_state = () => ({ beforeUpdate, editorState, xml });

	$$self.$inject_state = $$props => {
		if ("editorState" in $$props) $$invalidate(1, editorState = $$props.editorState);
		if ("xml" in $$props) $$invalidate(0, xml = $$props.xml);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [xml, editorState];
}

class VirtualLabPreview extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { editorState: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "VirtualLabPreview",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*editorState*/ ctx[1] === undefined && !("editorState" in props)) {
			console.warn("<VirtualLabPreview> was created without expected prop 'editorState'");
		}
	}

	get editorState() {
		throw new Error("<VirtualLabPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set editorState(value) {
		throw new Error("<VirtualLabPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default VirtualLabPreview;
//# sourceMappingURL=VirtualLabPreview-626515a6.js.map
