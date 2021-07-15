
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, v as validate_slots, L as beforeUpdate, X as XMLToJSON, y as language, w as writable, o as onMount, a9 as afterUpdate, C as validate_each_argument, e as element, f as space, h as text, j as attr_dev, k as add_location, n as insert_dev, p as append_dev, F as set_data_dev, x as detach_dev, K as destroy_each, z as empty, B as noop } from './main-674e3b87.js';

/* clsSMList\ListPreview.svelte generated by Svelte v3.29.0 */

const { console: console_1 } = globals;
const file = "clsSMList\\ListPreview.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

// (50:20) {#if state.data_cdata_prev}
function create_if_block(ctx) {
	let table;
	let tr;
	let th0;
	let b0;
	let th0_tabindex_value;
	let t1;
	let th1;
	let b1;
	let t2_value = /*state*/ ctx[0].data_cdata_prev[0].c1 + "";
	let t2;
	let th1_tabindex_value;
	let t3;
	let th2;
	let b2;
	let t4_value = /*state*/ ctx[0].data_cdata_prev[0].c2 + "";
	let t4;
	let th2_tabindex_value;
	let t5;
	let th3;
	let b3;
	let th3_tabindex_value;
	let t7;
	let th4;
	let b4;
	let th4_tabindex_value;
	let t9;
	let table_tabindex_value;
	let each_value = /*state*/ ctx[0].data_cdata_prev;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			table = element("table");
			tr = element("tr");
			th0 = element("th");
			b0 = element("b");
			b0.textContent = "#";
			t1 = space();
			th1 = element("th");
			b1 = element("b");
			t2 = text(t2_value);
			t3 = space();
			th2 = element("th");
			b2 = element("b");
			t4 = text(t4_value);
			t5 = space();
			th3 = element("th");
			b3 = element("b");
			b3.textContent = `${language.current_item}`;
			t7 = space();
			th4 = element("th");
			b4 = element("b");
			b4.textContent = `${language.used_in_items}`;
			t9 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(b0, "class", "font17");
			add_location(b0, file, 52, 82, 1595);
			attr_dev(th0, "class", "text-center align-middle");
			attr_dev(th0, "tabindex", th0_tabindex_value = 0);
			add_location(th0, file, 52, 32, 1545);
			attr_dev(b1, "class", "font17");
			add_location(b1, file, 53, 82, 1707);
			attr_dev(th1, "class", "align-middle text-center");
			attr_dev(th1, "tabindex", th1_tabindex_value = 0);
			add_location(th1, file, 53, 32, 1657);
			attr_dev(b2, "class", "font17");
			add_location(b2, file, 54, 82, 1847);
			attr_dev(th2, "class", "align-middle text-center");
			attr_dev(th2, "tabindex", th2_tabindex_value = 0);
			add_location(th2, file, 54, 32, 1797);
			attr_dev(b3, "class", "font17");
			add_location(b3, file, 55, 82, 1987);
			attr_dev(th3, "class", "align-middle text-center");
			attr_dev(th3, "tabindex", th3_tabindex_value = 0);
			add_location(th3, file, 55, 32, 1937);
			attr_dev(b4, "class", "font17");
			add_location(b4, file, 56, 82, 2114);
			attr_dev(th4, "class", "align-middle text-center");
			attr_dev(th4, "tabindex", th4_tabindex_value = 0);
			add_location(th4, file, 56, 32, 2064);
			add_location(tr, file, 51, 28, 1507);
			attr_dev(table, "class", "table w-100");
			attr_dev(table, "id", "prev_csv_data_table");
			attr_dev(table, "tabindex", table_tabindex_value = 0);
			add_location(table, file, 50, 24, 1412);
		},
		m: function mount(target, anchor) {
			insert_dev(target, table, anchor);
			append_dev(table, tr);
			append_dev(tr, th0);
			append_dev(th0, b0);
			append_dev(tr, t1);
			append_dev(tr, th1);
			append_dev(th1, b1);
			append_dev(b1, t2);
			append_dev(tr, t3);
			append_dev(tr, th2);
			append_dev(th2, b2);
			append_dev(b2, t4);
			append_dev(tr, t5);
			append_dev(tr, th3);
			append_dev(th3, b3);
			append_dev(tr, t7);
			append_dev(tr, th4);
			append_dev(th4, b4);
			append_dev(table, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state*/ 1 && t2_value !== (t2_value = /*state*/ ctx[0].data_cdata_prev[0].c1 + "")) set_data_dev(t2, t2_value);
			if (dirty & /*state*/ 1 && t4_value !== (t4_value = /*state*/ ctx[0].data_cdata_prev[0].c2 + "")) set_data_dev(t4, t4_value);

			if (dirty & /*state*/ 1) {
				each_value = /*state*/ ctx[0].data_cdata_prev;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(table, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(table);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(50:20) {#if state.data_cdata_prev}",
		ctx
	});

	return block;
}

// (61:40) {#if index > 0}
function create_if_block_1(ctx) {
	let tr;
	let td0;

	let t0_value = (/*index*/ ctx[9] < 10
	? "0" + /*index*/ ctx[9]
	: /*index*/ ctx[9]) + "";

	let t0;
	let td0_tabindex_value;
	let t1;
	let td1;
	let t2_value = /*object_data*/ ctx[7].c1 + "";
	let t2;
	let td1_tabindex_value;
	let t3;
	let td2;
	let t4_value = /*object_data*/ ctx[7].c2 + "";
	let t4;
	let td2_tabindex_value;
	let t5;
	let td3;
	let t6_value = /*object_data*/ ctx[7].cg + "";
	let t6;
	let td3_tabindex_value;
	let t7;
	let td4;
	let t8_value = /*object_data*/ ctx[7].ag.join(",") + "";
	let t8;
	let td4_tabindex_value;
	let t9;

	const block = {
		c: function create() {
			tr = element("tr");
			td0 = element("td");
			t0 = text(t0_value);
			t1 = space();
			td1 = element("td");
			t2 = text(t2_value);
			t3 = space();
			td2 = element("td");
			t4 = text(t4_value);
			t5 = space();
			td3 = element("td");
			t6 = text(t6_value);
			t7 = space();
			td4 = element("td");
			t8 = text(t8_value);
			t9 = space();
			attr_dev(td0, "class", "text-center align-middle");
			attr_dev(td0, "tabindex", td0_tabindex_value = 0);
			add_location(td0, file, 62, 48, 2465);
			attr_dev(td1, "class", "align-middle word-wrap-break text-center");
			attr_dev(td1, "tabindex", td1_tabindex_value = 0);
			add_location(td1, file, 63, 48, 2606);
			attr_dev(td2, "class", "align-middle word-wrap-break text-center");
			attr_dev(td2, "tabindex", td2_tabindex_value = 0);
			add_location(td2, file, 64, 48, 2743);
			attr_dev(td3, "class", "align-middle text-center");
			attr_dev(td3, "tabindex", td3_tabindex_value = 0);
			add_location(td3, file, 65, 48, 2880);
			attr_dev(td4, "class", "align-middle word-wrap-break text-center");
			attr_dev(td4, "tabindex", td4_tabindex_value = 0);
			add_location(td4, file, 66, 48, 3001);
			add_location(tr, file, 61, 44, 2411);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);
			append_dev(tr, td0);
			append_dev(td0, t0);
			append_dev(tr, t1);
			append_dev(tr, td1);
			append_dev(td1, t2);
			append_dev(tr, t3);
			append_dev(tr, td2);
			append_dev(td2, t4);
			append_dev(tr, t5);
			append_dev(tr, td3);
			append_dev(td3, t6);
			append_dev(tr, t7);
			append_dev(tr, td4);
			append_dev(td4, t8);
			append_dev(tr, t9);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state*/ 1 && t2_value !== (t2_value = /*object_data*/ ctx[7].c1 + "")) set_data_dev(t2, t2_value);
			if (dirty & /*state*/ 1 && t4_value !== (t4_value = /*object_data*/ ctx[7].c2 + "")) set_data_dev(t4, t4_value);
			if (dirty & /*state*/ 1 && t6_value !== (t6_value = /*object_data*/ ctx[7].cg + "")) set_data_dev(t6, t6_value);
			if (dirty & /*state*/ 1 && t8_value !== (t8_value = /*object_data*/ ctx[7].ag.join(",") + "")) set_data_dev(t8, t8_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(tr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(61:40) {#if index > 0}",
		ctx
	});

	return block;
}

// (60:32) {#each state.data_cdata_prev as object_data, index}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*index*/ ctx[9] > 0 && create_if_block_1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*index*/ ctx[9] > 0) if_block.p(ctx, dirty);
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(60:32) {#each state.data_cdata_prev as object_data, index}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main;
	let div3;
	let div2;
	let div1;
	let div0;
	let if_block = /*state*/ ctx[0].data_cdata_prev && create_if_block(ctx);

	const block = {
		c: function create() {
			main = element("main");
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			if (if_block) if_block.c();
			attr_dev(div0, "class", "col-12");
			add_location(div0, file, 48, 16, 1317);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 47, 12, 1282);
			attr_dev(div2, "class", "container");
			add_location(div2, file, 46, 8, 1245);
			attr_dev(div3, "id", "preview_container");
			attr_dev(div3, "class", "container w-100 px-3 py-3");
			add_location(div3, file, 45, 4, 1173);
			add_location(main, file, 44, 0, 1161);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div3);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, div0);
			if (if_block) if_block.m(div0, null);
		},
		p: function update(ctx, [dirty]) {
			if (/*state*/ ctx[0].data_cdata_prev) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			if (if_block) if_block.d();
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
	validate_slots("ListPreview", slots, []);
	let { xml } = $$props;
	let state = {};
	let stateData = writable({ data_cdata_prev: "" });
	var table_data = null;

	const unsubscribe = stateData.subscribe(items => {
		$$invalidate(0, state = items);
	});

	beforeUpdate(() => {
		if (xml != state.xml) {
			loadModule(xml);
		}
	});

	// loads the module
	function loadModule(xml) {
		// contains the json data of xml
		var newXML = XMLToJSON(xml);

		// parses the xml data and updates the xml
		parseXMLPreview(newXML);
	}

	// parses the xml data and updates the xml
	function parseXMLPreview(MYXML) {
		try {
			// contains the each row data in json format
			$$invalidate(0, state.data_cdata_prev = JSON.parse(MYXML.smxml.__cdata).list, state);
		} catch(error) {
			console.log({ error });
		}
	}

	const writable_props = ["xml"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<ListPreview> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("xml" in $$props) $$invalidate(1, xml = $$props.xml);
	};

	$$self.$capture_state = () => ({
		l: language,
		writable,
		onMount,
		beforeUpdate,
		afterUpdate,
		XMLToJSON,
		xml,
		state,
		stateData,
		table_data,
		unsubscribe,
		loadModule,
		parseXMLPreview
	});

	$$self.$inject_state = $$props => {
		if ("xml" in $$props) $$invalidate(1, xml = $$props.xml);
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
		if ("stateData" in $$props) stateData = $$props.stateData;
		if ("table_data" in $$props) table_data = $$props.table_data;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [state, xml];
}

class ListPreview extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { xml: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ListPreview",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*xml*/ ctx[1] === undefined && !("xml" in props)) {
			console_1.warn("<ListPreview> was created without expected prop 'xml'");
		}
	}

	get xml() {
		throw new Error("<ListPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xml(value) {
		throw new Error("<ListPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default ListPreview;
//# sourceMappingURL=ListPreview-9fc8c1a8.js.map
