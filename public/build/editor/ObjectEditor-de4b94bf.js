
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as validate_each_argument, v as validate_slots, o as onMount, L as beforeUpdate, g as globals, e as element, h as text, f as space, j as attr_dev, k as add_location, n as insert_dev, p as append_dev, q as listen_dev, E as is_function, F as set_data_dev, G as prop_dev, x as detach_dev, H as run_all, l as set_style, aj as action_destroyer, B as noop, K as destroy_each } from './main-bce9756a.js';

/* src\ObjectEditor.svelte generated by Svelte v3.29.0 */

const { Object: Object_1 } = globals;
const file = "src\\ObjectEditor.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

// (59:4) {#each Object.keys(state.cText) as index, i}
function create_each_block(ctx) {
	let div2;
	let div0;
	let label;
	let t0_value = /*index*/ ctx[7] + "";
	let t0;
	let label_for_value;
	let t1;
	let div1;
	let input;
	let input_id_value;
	let input_class_value;
	let input_value_value;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			input = element("input");
			t2 = space();
			attr_dev(label, "for", label_for_value = /*index*/ ctx[7]);
			add_location(label, file, 61, 16, 1798);
			attr_dev(div0, "class", "col-sm-2");
			add_location(div0, file, 60, 12, 1758);
			attr_dev(input, "type", "text");
			attr_dev(input, "id", input_id_value = /*index*/ ctx[7]);
			attr_dev(input, "class", input_class_value = "inputBox form-control");
			input.value = input_value_value = /*state*/ ctx[1].cText[/*index*/ ctx[7]];
			add_location(input, file, 64, 16, 1907);
			attr_dev(div1, "class", "col-sm-10");
			add_location(div1, file, 63, 12, 1866);
			attr_dev(div2, "class", "row form-group");
			add_location(div2, file, 59, 9, 1716);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, label);
			append_dev(label, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, input);
			append_dev(div2, t2);

			if (!mounted) {
				dispose = [
					listen_dev(
						input,
						"change",
						function () {
							if (is_function(/*handleChange*/ ctx[3].bind(this, /*index*/ ctx[7]))) /*handleChange*/ ctx[3].bind(this, /*index*/ ctx[7]).apply(this, arguments);
						},
						false,
						false,
						false
					),
					listen_dev(
						input,
						"blur",
						function () {
							if (is_function(/*handleBlur*/ ctx[4].bind(this, /*index*/ ctx[7]))) /*handleBlur*/ ctx[4].bind(this, /*index*/ ctx[7]).apply(this, arguments);
						},
						false,
						false,
						false
					)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*state*/ 2 && t0_value !== (t0_value = /*index*/ ctx[7] + "")) set_data_dev(t0, t0_value);

			if (dirty & /*state*/ 2 && label_for_value !== (label_for_value = /*index*/ ctx[7])) {
				attr_dev(label, "for", label_for_value);
			}

			if (dirty & /*state*/ 2 && input_id_value !== (input_id_value = /*index*/ ctx[7])) {
				attr_dev(input, "id", input_id_value);
			}

			if (dirty & /*state*/ 2 && input_value_value !== (input_value_value = /*state*/ ctx[1].cText[/*index*/ ctx[7]]) && input.value !== input_value_value) {
				prop_dev(input, "value", input_value_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(59:4) {#each Object.keys(state.cText) as index, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let h1;
	let t1;
	let didMount_action;
	let mounted;
	let dispose;
	let each_value = Object.keys(/*state*/ ctx[1].cText);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			h1.textContent = `${"3D Object"}`;
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(h1, file, 57, 4, 1633);
			attr_dev(div, "key", "3d_object");
			set_style(div, "width", "98%");
			add_location(div, file, 56, 0, 1561);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(div, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			if (!mounted) {
				dispose = action_destroyer(didMount_action = /*didMount*/ ctx[0].call(null, div, /*activated*/ ctx[2]));
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*Object, state, handleChange, handleBlur*/ 26) {
				each_value = Object.keys(/*state*/ ctx[1].cText);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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

function enableSave() {
	if (!AI.get("save_item")) {
		AI.set("save_item", true);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ObjectEditor", slots, []);
	let { editorState } = $$props;
	let { didMount } = $$props;
	let activated;
	let ajaxData = {};
	let state = { error: false, cText: {} };

	onMount(() => {
		if (editorState.ajaxData) {
			ajaxData = editorState.ajaxData;
		} else {
			ajaxData = {
				"content_type": "f",
				"content_subtype": 52,
				"content_icon": 0,
				"content_text": {
					"name": "",
					"display_image": "",
					"zipfile": "",
					"preview_image": "",
					"about": "",
					"light": true,
					"rotationX": "0",
					"rotationY": "Math.PI / -2",
					"positionX": "0",
					"positionY": "0",
					"positionZ": "0",
					"scale": "45",
					"point_light": "2"
				}
			};
		}

		$$invalidate(1, state.cText = ajaxData.content_text, state);
	});

	function handleChange(index, event) {
		$$invalidate(1, state.cText[index] = event.target.value, state);
	}

	function handleBlur(index, event) {
		ajaxData["content_text"] = state.cText;
		enableSave();
		$$invalidate(5, editorState.ajaxData = ajaxData, editorState);
	}

	const writable_props = ["editorState", "didMount"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ObjectEditor> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("editorState" in $$props) $$invalidate(5, editorState = $$props.editorState);
		if ("didMount" in $$props) $$invalidate(0, didMount = $$props.didMount);
	};

	$$self.$capture_state = () => ({
		beforeUpdate,
		onMount,
		editorState,
		didMount,
		activated,
		ajaxData,
		state,
		handleChange,
		enableSave,
		handleBlur
	});

	$$self.$inject_state = $$props => {
		if ("editorState" in $$props) $$invalidate(5, editorState = $$props.editorState);
		if ("didMount" in $$props) $$invalidate(0, didMount = $$props.didMount);
		if ("activated" in $$props) $$invalidate(2, activated = $$props.activated);
		if ("ajaxData" in $$props) ajaxData = $$props.ajaxData;
		if ("state" in $$props) $$invalidate(1, state = $$props.state);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [didMount, state, activated, handleChange, handleBlur, editorState];
}

class ObjectEditor extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { editorState: 5, didMount: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ObjectEditor",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*editorState*/ ctx[5] === undefined && !("editorState" in props)) {
			console.warn("<ObjectEditor> was created without expected prop 'editorState'");
		}

		if (/*didMount*/ ctx[0] === undefined && !("didMount" in props)) {
			console.warn("<ObjectEditor> was created without expected prop 'didMount'");
		}
	}

	get editorState() {
		throw new Error("<ObjectEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set editorState(value) {
		throw new Error("<ObjectEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get didMount() {
		throw new Error("<ObjectEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set didMount(value) {
		throw new Error("<ObjectEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default ObjectEditor;
//# sourceMappingURL=ObjectEditor-de4b94bf.js.map
