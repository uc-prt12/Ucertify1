
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, p as append_dev, C as validate_each_argument, v as validate_slots, a0 as createEventDispatcher, z as empty, n as insert_dev, x as detach_dev, k as add_location, j as attr_dev, $ as null_to_empty, B as noop, K as destroy_each, h as text, f as space, q as listen_dev, F as set_data_dev } from './main-0a9d5dd9.js';

/* clsSMGridded\GriddedHelper.svelte generated by Svelte v3.29.0 */
const file = "clsSMGridded\\GriddedHelper.svelte";

function add_css() {
	var style = element("style");
	style.id = "svelte-jo2o8e-style";
	style.textContent = ".gridded_tab.svelte-jo2o8e{background-color:#f0f0f0;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.minus_tab.svelte-jo2o8e,.plus_tab.svelte-jo2o8e,.slash_tab.svelte-jo2o8e{text-align:center}.items_element.svelte-jo2o8e:hover{border:1.2px solid #777}.sla_point.svelte-jo2o8e{padding:6px 11px}table.svelte-jo2o8e{border-width:0px!important}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZGRlZEhlbHBlci5zdmVsdGUiLCJzb3VyY2VzIjpbIkdyaWRkZWRIZWxwZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuICAgIGV4cG9ydCBsZXQgbG9vcDtcclxuICAgIGV4cG9ydCBsZXQgY2xhc3NOYW1lO1xyXG4gICAgZXhwb3J0IGxldCBjbGFzczE7XHJcbiAgICBleHBvcnQgbGV0IHRhYmxlSWQ7XHJcbiAgICBleHBvcnQgbGV0IHRhYmxlQ2xhc3M7XHJcbiAgICBleHBvcnQgbGV0IHZhbHVlO1xyXG4gICAgXHJcbiAgIFxyXG5cclxuICAgXHJcbjwvc2NyaXB0PlxyXG48dGFibGUgaWQ9e3RhYmxlSWR9IGNsYXNzPXt0YWJsZUNsYXNzfSA+IFxyXG4gICAgPHRyPlxyXG4gICAgICAgIHsjZWFjaCBsb29wIGFzIHZhbCxpfVxyXG4gICAgICAgICAgICB7I2lmIHZhbC5kZWNwb2ludCA9PSB0cnVlfVxyXG4gICAgICAgICAgICAgICAgPHRkIGtleT17dmFsLmtleX0gY2xhc3M9e2NsYXNzMX0gIHdpZHRoPVwiNTBcIiBkaXNhYmxlZD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIHs6ZWxzZX1cclxuICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjUwXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPXt2YWwuaWR9IG5hbWU9e3ZhbC5uYW1lfSBkYXRhLXRhZz17dmFsLmRhdGFUYWd9IGNsYXNzPXtjbGFzc05hbWV9ICBoZWlnaHQ9XCIyMFwiIG9uOmNsaWNrPVwieyhlKT0+ZGlzcGF0Y2goJ2hhbmRsZUNsaWNrQ29tYm8nLGUpfVwiPnt2YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICB7L2lmfVxyXG4gICAgICAgIHsvZWFjaH1cclxuICAgIDwvdHI+XHJcbjwvdGFibGU+XHJcblxyXG48c3R5bGU+XHJcbi5ncmlkZGVkX3RhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLm1pbnVzX3RhYixcclxuLnBsdXNfdGFiLFxyXG4uc2xhc2hfdGFiIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1zX2VsZW1lbnQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjNzc3O1xyXG59XHJcblxyXG4uc2xhX3BvaW50IHtcclxuICAgIHBhZGRpbmc6IDZweCAxMXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQSxZQUFZLGNBQUMsQ0FBQyxBQUNWLGdCQUFnQixDQUFFLE9BQU8sQ0FDekIsV0FBVyxDQUFFLElBQUksQ0FDakIsbUJBQW1CLENBQUUsSUFBSSxDQUN6QixnQkFBZ0IsQ0FBRSxJQUFJLENBQ3RCLGVBQWUsQ0FBRSxJQUFJLEFBQ3pCLENBQUMsQUFFRCx3QkFBVSxDQUNWLHVCQUFTLENBQ1QsVUFBVSxjQUFDLENBQUMsQUFDUixVQUFVLENBQUUsTUFBTSxBQUN0QixDQUFDLEFBRUQsNEJBQWMsTUFBTSxBQUFDLENBQUMsQUFDbEIsTUFBTSxDQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUM1QixDQUFDLEFBRUQsVUFBVSxjQUFDLENBQUMsQUFDUixPQUFPLENBQUUsR0FBRyxDQUFDLElBQUksQUFDckIsQ0FBQyxBQUVELEtBQUssY0FBQyxDQUFDLEFBQ0gsWUFBWSxDQUFFLEdBQUcsVUFBVSxBQUMvQixDQUFDIn0= */";
	append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	child_ctx[10] = i;
	return child_ctx;
}

// (21:12) {:else}
function create_else_block(ctx) {
	let td;
	let span;
	let t0;
	let span_id_value;
	let span_name_value;
	let span_data_tag_value;
	let span_class_value;
	let t1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			td = element("td");
			span = element("span");
			t0 = text(/*value*/ ctx[5]);
			t1 = space();
			attr_dev(span, "id", span_id_value = /*val*/ ctx[8].id);
			attr_dev(span, "name", span_name_value = /*val*/ ctx[8].name);
			attr_dev(span, "data-tag", span_data_tag_value = /*val*/ ctx[8].dataTag);
			attr_dev(span, "class", span_class_value = "" + (null_to_empty(/*className*/ ctx[1]) + " svelte-jo2o8e"));
			attr_dev(span, "height", "20");
			add_location(span, file, 22, 20, 608);
			attr_dev(td, "width", "50");
			attr_dev(td, "class", "text-center");
			add_location(td, file, 21, 16, 551);
		},
		m: function mount(target, anchor) {
			insert_dev(target, td, anchor);
			append_dev(td, span);
			append_dev(span, t0);
			append_dev(td, t1);

			if (!mounted) {
				dispose = listen_dev(span, "click", /*click_handler*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*value*/ 32) set_data_dev(t0, /*value*/ ctx[5]);

			if (dirty & /*loop*/ 1 && span_id_value !== (span_id_value = /*val*/ ctx[8].id)) {
				attr_dev(span, "id", span_id_value);
			}

			if (dirty & /*loop*/ 1 && span_name_value !== (span_name_value = /*val*/ ctx[8].name)) {
				attr_dev(span, "name", span_name_value);
			}

			if (dirty & /*loop*/ 1 && span_data_tag_value !== (span_data_tag_value = /*val*/ ctx[8].dataTag)) {
				attr_dev(span, "data-tag", span_data_tag_value);
			}

			if (dirty & /*className*/ 2 && span_class_value !== (span_class_value = "" + (null_to_empty(/*className*/ ctx[1]) + " svelte-jo2o8e"))) {
				attr_dev(span, "class", span_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(td);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(21:12) {:else}",
		ctx
	});

	return block;
}

// (18:12) {#if val.decpoint == true}
function create_if_block(ctx) {
	let td;
	let td_key_value;
	let td_class_value;

	const block = {
		c: function create() {
			td = element("td");
			attr_dev(td, "key", td_key_value = /*val*/ ctx[8].key);
			attr_dev(td, "class", td_class_value = "" + (null_to_empty(/*class1*/ ctx[2]) + " svelte-jo2o8e"));
			attr_dev(td, "width", "50");
			attr_dev(td, "disabled", "true");
			add_location(td, file, 18, 16, 428);
		},
		m: function mount(target, anchor) {
			insert_dev(target, td, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*loop*/ 1 && td_key_value !== (td_key_value = /*val*/ ctx[8].key)) {
				attr_dev(td, "key", td_key_value);
			}

			if (dirty & /*class1*/ 4 && td_class_value !== (td_class_value = "" + (null_to_empty(/*class1*/ ctx[2]) + " svelte-jo2o8e"))) {
				attr_dev(td, "class", td_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(td);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(18:12) {#if val.decpoint == true}",
		ctx
	});

	return block;
}

// (17:8) {#each loop as val,i}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*val*/ ctx[8].decpoint == true) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(17:8) {#each loop as val,i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let table;
	let tr;
	let table_class_value;
	let each_value = /*loop*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			table = element("table");
			tr = element("tr");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(tr, file, 15, 4, 335);
			attr_dev(table, "id", /*tableId*/ ctx[3]);
			attr_dev(table, "class", table_class_value = "" + (null_to_empty(/*tableClass*/ ctx[4]) + " svelte-jo2o8e"));
			add_location(table, file, 14, 0, 288);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, table, anchor);
			append_dev(table, tr);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*loop, class1, className, dispatch, value*/ 103) {
				each_value = /*loop*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*tableId*/ 8) {
				attr_dev(table, "id", /*tableId*/ ctx[3]);
			}

			if (dirty & /*tableClass*/ 16 && table_class_value !== (table_class_value = "" + (null_to_empty(/*tableClass*/ ctx[4]) + " svelte-jo2o8e"))) {
				attr_dev(table, "class", table_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(table);
			destroy_each(each_blocks, detaching);
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
	validate_slots("GriddedHelper", slots, []);
	const dispatch = createEventDispatcher();
	let { loop } = $$props;
	let { className } = $$props;
	let { class1 } = $$props;
	let { tableId } = $$props;
	let { tableClass } = $$props;
	let { value } = $$props;
	const writable_props = ["loop", "className", "class1", "tableId", "tableClass", "value"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<GriddedHelper> was created with unknown prop '${key}'`);
	});

	const click_handler = e => dispatch("handleClickCombo", e);

	$$self.$$set = $$props => {
		if ("loop" in $$props) $$invalidate(0, loop = $$props.loop);
		if ("className" in $$props) $$invalidate(1, className = $$props.className);
		if ("class1" in $$props) $$invalidate(2, class1 = $$props.class1);
		if ("tableId" in $$props) $$invalidate(3, tableId = $$props.tableId);
		if ("tableClass" in $$props) $$invalidate(4, tableClass = $$props.tableClass);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		loop,
		className,
		class1,
		tableId,
		tableClass,
		value
	});

	$$self.$inject_state = $$props => {
		if ("loop" in $$props) $$invalidate(0, loop = $$props.loop);
		if ("className" in $$props) $$invalidate(1, className = $$props.className);
		if ("class1" in $$props) $$invalidate(2, class1 = $$props.class1);
		if ("tableId" in $$props) $$invalidate(3, tableId = $$props.tableId);
		if ("tableClass" in $$props) $$invalidate(4, tableClass = $$props.tableClass);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [loop, className, class1, tableId, tableClass, value, dispatch, click_handler];
}

class GriddedHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-jo2o8e-style")) add_css();

		init(this, options, instance, create_fragment, safe_not_equal, {
			loop: 0,
			className: 1,
			class1: 2,
			tableId: 3,
			tableClass: 4,
			value: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "GriddedHelper",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*loop*/ ctx[0] === undefined && !("loop" in props)) {
			console.warn("<GriddedHelper> was created without expected prop 'loop'");
		}

		if (/*className*/ ctx[1] === undefined && !("className" in props)) {
			console.warn("<GriddedHelper> was created without expected prop 'className'");
		}

		if (/*class1*/ ctx[2] === undefined && !("class1" in props)) {
			console.warn("<GriddedHelper> was created without expected prop 'class1'");
		}

		if (/*tableId*/ ctx[3] === undefined && !("tableId" in props)) {
			console.warn("<GriddedHelper> was created without expected prop 'tableId'");
		}

		if (/*tableClass*/ ctx[4] === undefined && !("tableClass" in props)) {
			console.warn("<GriddedHelper> was created without expected prop 'tableClass'");
		}

		if (/*value*/ ctx[5] === undefined && !("value" in props)) {
			console.warn("<GriddedHelper> was created without expected prop 'value'");
		}
	}

	get loop() {
		throw new Error("<GriddedHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loop(value) {
		throw new Error("<GriddedHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get className() {
		throw new Error("<GriddedHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set className(value) {
		throw new Error("<GriddedHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class1() {
		throw new Error("<GriddedHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class1(value) {
		throw new Error("<GriddedHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tableId() {
		throw new Error("<GriddedHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tableId(value) {
		throw new Error("<GriddedHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tableClass() {
		throw new Error("<GriddedHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tableClass(value) {
		throw new Error("<GriddedHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<GriddedHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<GriddedHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { GriddedHelper as G };
//# sourceMappingURL=GriddedHelper-4cfbc090.js.map
