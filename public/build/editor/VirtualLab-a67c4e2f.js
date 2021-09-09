
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, e as element, j as attr_dev, l as set_style, k as add_location, n as insert_dev, p as append_dev, q as listen_dev, B as noop, x as detach_dev } from './main-50717271.js';

/* clsSMVirtualLab\VirtualLab.svelte generated by Svelte v3.40.2 */
const file = "clsSMVirtualLab\\VirtualLab.svelte";

function create_fragment(ctx) {
	let center;
	let div;
	let textarea;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			center = element("center");
			div = element("div");
			textarea = element("textarea");
			attr_dev(textarea, "id", "xml");
			set_style(textarea, "min-height", "250px");
			set_style(textarea, "width", "550px");
			add_location(textarea, file, 14, 2, 293);
			attr_dev(div, "id", "VirtualLab");
			add_location(div, file, 13, 1, 268);
			add_location(center, file, 12, 0, 257);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, center, anchor);
			append_dev(center, div);
			append_dev(div, textarea);

			if (!mounted) {
				dispose = listen_dev(textarea, "change", /*changeXml*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(center);
			mounted = false;
			dispose();
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
	validate_slots('VirtualLab', slots, []);
	let { getChildXml } = $$props;
	let { editorState } = $$props;

	onMount(() => {
		document.querySelector('#xml').value = editorState.xml;
	});

	function changeXml(e) {
		getChildXml(e.target.value);
	}

	const writable_props = ['getChildXml', 'editorState'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<VirtualLab> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('getChildXml' in $$props) $$invalidate(1, getChildXml = $$props.getChildXml);
		if ('editorState' in $$props) $$invalidate(2, editorState = $$props.editorState);
	};

	$$self.$capture_state = () => ({
		onMount,
		getChildXml,
		editorState,
		changeXml
	});

	$$self.$inject_state = $$props => {
		if ('getChildXml' in $$props) $$invalidate(1, getChildXml = $$props.getChildXml);
		if ('editorState' in $$props) $$invalidate(2, editorState = $$props.editorState);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [changeXml, getChildXml, editorState];
}

class VirtualLab extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { getChildXml: 1, editorState: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "VirtualLab",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*getChildXml*/ ctx[1] === undefined && !('getChildXml' in props)) {
			console.warn("<VirtualLab> was created without expected prop 'getChildXml'");
		}

		if (/*editorState*/ ctx[2] === undefined && !('editorState' in props)) {
			console.warn("<VirtualLab> was created without expected prop 'editorState'");
		}
	}

	get getChildXml() {
		throw new Error("<VirtualLab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getChildXml(value) {
		throw new Error("<VirtualLab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get editorState() {
		throw new Error("<VirtualLab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set editorState(value) {
		throw new Error("<VirtualLab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default VirtualLab;
//# sourceMappingURL=VirtualLab-a67c4e2f.js.map
