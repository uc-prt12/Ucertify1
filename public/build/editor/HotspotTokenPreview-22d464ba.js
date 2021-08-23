
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, M as append_styles, v as validate_slots, L as beforeUpdate, o as onMount, A as AH, X as XMLToJSON, a2 as tick, w as writable, a3 as onUserAnsChange, y as l, z as empty, n as insert_dev, r as group_outros, a as transition_out, u as check_outros, t as transition_in, x as detach_dev, C as validate_each_argument, K as destroy_each, e as element, f as space, j as attr_dev, k as add_location, p as append_dev, c as create_component, l as set_style, m as mount_component, b as destroy_component, B as noop, h as text, F as set_data_dev, a4 as null_to_empty, q as listen_dev } from './main-d0e46147.js';
import { I as ItemHelper } from './ItemHelper-e9822fe2.js';

/* clsSMHotspot\HotspotTokenPreview.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "clsSMHotspot\\HotspotTokenPreview.svelte";

function add_css(target) {
	append_styles(target, "svelte-4djjpi", ".token.svelte-4djjpi.svelte-4djjpi:hover{border:1px solid #000!important}.bla .token:hover{border:1px solid #fff!important}.token_selected.svelte-4djjpi.svelte-4djjpi{background-color:#64bb63;color:#fff}.bla .token_highlight_heading{color:#000!important}.hotspot-token-preview.svelte-4djjpi br.svelte-4djjpi{clear:both}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG90c3BvdFRva2VuUHJldmlldy5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBd2NJLGtDQUFNLE1BQU0sQUFBQyxDQUFDLEFBQ1YsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLEFBQ3BDLENBQUMsQUFFTyxpQkFBaUIsQUFBQyxDQUFDLEFBQ3ZCLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxBQUNwQyxDQUFDLEFBRUQsZUFBZSw0QkFBQyxDQUFDLEFBQ2IsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixLQUFLLENBQUUsSUFBSSxBQUNmLENBQUMsQUFFTyw2QkFBNkIsQUFBRSxDQUFDLEFBQ3BDLEtBQUssQ0FBRSxJQUFJLFVBQVUsQUFDekIsQ0FBQyxBQUVELG9DQUFzQixDQUFDLEVBQUUsY0FBQyxDQUFDLEFBQ3ZCLEtBQUssQ0FBRSxJQUFJLEFBQ2YsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJIb3RzcG90VG9rZW5QcmV2aWV3LnN2ZWx0ZSJdfQ== */");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[25] = list[i];
	child_ctx[27] = i;
	return child_ctx;
}

// (359:0) {:else}
function create_else_block(ctx) {
	let div2;
	let center;
	let itemhelper;
	let t0;
	let div0;
	let t2;
	let div1;
	let current;

	itemhelper = new ItemHelper({
			props: {
				handleReviewClick: /*handleReviewClick*/ ctx[5],
				reviewMode: /*state*/ ctx[0].isReview
			},
			$$inline: true
		});

	itemhelper.$on("setReview", /*setReview*/ ctx[2]);
	itemhelper.$on("unsetReview", /*unsetReview*/ ctx[3]);
	let if_block = /*state*/ ctx[0].itemLayout && create_if_block_1(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			center = element("center");
			create_component(itemhelper.$$.fragment);
			t0 = space();
			div0 = element("div");
			div0.textContent = `${l.token_highlight}`;
			t2 = space();
			div1 = element("div");
			if (if_block) if_block.c();
			attr_dev(div0, "class", "token_highlight_heading font17 p-2 text-left");
			set_style(div0, "max-width", "600px");
			set_style(div0, "border-top", "2px solid #96bbf6");
			set_style(div0, "background-color", "#d9e7fd");
			add_location(div0, file, 367, 8, 13473);
			attr_dev(div1, "class", "p-2");
			set_style(div1, "max-width", "600px");
			set_style(div1, "border", "2px solid #d9e7fd");
			set_style(div1, "display", "flow-root");
			set_style(div1, "text-align", "left");
			set_style(div1, "justify-content", "left");
			add_location(div1, file, 377, 8, 13777);
			add_location(center, file, 360, 8, 13249);
			attr_dev(div2, "class", "hotspot-token-preview svelte-4djjpi");
			attr_dev(div2, "tabindex", "0");
			add_location(div2, file, 359, 4, 13191);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, center);
			mount_component(itemhelper, center, null);
			append_dev(center, t0);
			append_dev(center, div0);
			append_dev(center, t2);
			append_dev(center, div1);
			if (if_block) if_block.m(div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const itemhelper_changes = {};
			if (dirty & /*state*/ 1) itemhelper_changes.reviewMode = /*state*/ ctx[0].isReview;
			itemhelper.$set(itemhelper_changes);

			if (/*state*/ ctx[0].itemLayout) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(itemhelper.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(itemhelper.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(itemhelper);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(359:0) {:else}",
		ctx
	});

	return block;
}

// (355:0) {#if onError != ""}
function create_if_block(ctx) {
	let div;
	let span;

	const block = {
		c: function create() {
			div = element("div");
			span = element("span");
			span.textContent = "Oops Something went wrong please check your ParseXML Function";
			add_location(span, file, 356, 8, 13089);
			attr_dev(div, "class", "alert alert-danger font-weight-bold");
			add_location(div, file, 355, 4, 13030);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, span);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(355:0) {#if onError != \\\"\\\"}",
		ctx
	});

	return block;
}

// (388:12) {#if state.itemLayout}
function create_if_block_1(ctx) {
	let each_1_anchor;
	let each_value = /*state*/ ctx[0].itemLayout;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state, AH, setSelected*/ 17) {
				each_value = /*state*/ ctx[0].itemLayout;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(388:12) {#if state.itemLayout}",
		ctx
	});

	return block;
}

// (391:24) {#if data.value.indexOf('##pt') > -1 }
function create_if_block_5(ctx) {
	let t_value = (/*data*/ ctx[25].value = /*data*/ ctx[25].value.replace(/##pt/g, '.')) + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state*/ 1 && t_value !== (t_value = (/*data*/ ctx[25].value = /*data*/ ctx[25].value.replace(/##pt/g, '.')) + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5.name,
		type: "if",
		source: "(391:24) {#if data.value.indexOf('##pt') > -1 }",
		ctx
	});

	return block;
}

// (394:24) {#if data.value.indexOf('#cm') > -1 }
function create_if_block_4(ctx) {
	let t_value = (/*data*/ ctx[25].value = /*data*/ ctx[25].value.replace(/#cm/g, ',')) + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state*/ 1 && t_value !== (t_value = (/*data*/ ctx[25].value = /*data*/ ctx[25].value.replace(/#cm/g, ',')) + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(394:24) {#if data.value.indexOf('#cm') > -1 }",
		ctx
	});

	return block;
}

// (407:20) {:else}
function create_else_block_1(ctx) {
	let div;
	let span0;
	let t0_value = /*data*/ ctx[25].value + "";
	let t0;
	let span0_data_id_value;
	let span0_data_correct_value;
	let span0_data_selected_value;
	let span0_tabindex_value;
	let span0_class_value;
	let t1;
	let span2;
	let span1;
	let span1_class_value;
	let span1_aria_label_value;
	let span2_class_value;
	let t2;
	let div_key_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			span0 = element("span");
			t0 = text(t0_value);
			t1 = space();
			span2 = element("span");
			span1 = element("span");
			t2 = space();
			attr_dev(span0, "data-id", span0_data_id_value = "ID" + /*i*/ ctx[27]);
			attr_dev(span0, "data-correct", span0_data_correct_value = AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns));
			attr_dev(span0, "data-selected", span0_data_selected_value = /*data*/ ctx[25].selected);
			attr_dev(span0, "tabindex", span0_tabindex_value = /*state*/ ctx[0].pointerEvents == "auto" ? "0" : "1");
			attr_dev(span0, "class", span0_class_value = "pointer float-left text-left font14 token " + (/*data*/ ctx[25].selected ? 'token_selected' : '') + " svelte-4djjpi");
			set_style(span0, "margin", "2px");
			set_style(span0, "user-select", "none");
			set_style(span0, "border", "1px solid transparent");
			set_style(span0, "padding", "1px 3px");
			set_style(span0, "border-radius", "3px");
			set_style(span0, "pointer-events", /*state*/ ctx[0].pointerEvents + "\r\n                                ");
			add_location(span0, file, 408, 28, 15207);

			attr_dev(span1, "class", span1_class_value = "position-relative " + (AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns)
			? 'icomoon-new-24px-checkmark-circle-1'
			: 'icomoon-new-24px-cancel-circle-1'));

			set_style(span1, "color", AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns)
			? 'green'
			: 'red');

			set_style(span1, "bottom", "3px");
			set_style(span1, "left", "0");

			attr_dev(span1, "aria-label", span1_aria_label_value = AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns)
			? "marked as correct"
			: "marked as incorrect");

			add_location(span1, file, 441, 32, 17077);
			attr_dev(span2, "class", span2_class_value = "" + (null_to_empty(/*state*/ ctx[0].iconVisible) + " svelte-4djjpi"));
			set_style(span2, "position", "absolute");
			set_style(span2, "width", "17px");
			set_style(span2, "height", "17px");
			set_style(span2, "right", "-8px");
			set_style(span2, "top", "-9px");
			set_style(span2, "background", "white");
			set_style(span2, "border-radius", "15px 12px 12px");
			set_style(span2, "font-size", "18px");
			set_style(span2, "z-index", "1");

			set_style(span2, "display", (/*state*/ ctx[0].iconVisible == "" && /*data*/ ctx[25].selected
			? 'block'
			: 'none') + "\r\n                                ");

			add_location(span2, file, 426, 28, 16278);
			attr_dev(div, "key", div_key_value = /*i*/ ctx[27]);
			attr_dev(div, "class", "tokenHeader position-relative float-left d-inline");
			add_location(div, file, 407, 24, 15106);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, span0);
			append_dev(span0, t0);
			append_dev(div, t1);
			append_dev(div, span2);
			append_dev(span2, span1);
			append_dev(div, t2);

			if (!mounted) {
				dispose = listen_dev(span0, "click", /*setSelected*/ ctx[4].bind(this, /*i*/ ctx[27]), false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*state*/ 1 && t0_value !== (t0_value = /*data*/ ctx[25].value + "")) set_data_dev(t0, t0_value);

			if (dirty & /*state*/ 1 && span0_data_correct_value !== (span0_data_correct_value = AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns))) {
				attr_dev(span0, "data-correct", span0_data_correct_value);
			}

			if (dirty & /*state*/ 1 && span0_data_selected_value !== (span0_data_selected_value = /*data*/ ctx[25].selected)) {
				attr_dev(span0, "data-selected", span0_data_selected_value);
			}

			if (dirty & /*state*/ 1 && span0_tabindex_value !== (span0_tabindex_value = /*state*/ ctx[0].pointerEvents == "auto" ? "0" : "1")) {
				attr_dev(span0, "tabindex", span0_tabindex_value);
			}

			if (dirty & /*state*/ 1 && span0_class_value !== (span0_class_value = "pointer float-left text-left font14 token " + (/*data*/ ctx[25].selected ? 'token_selected' : '') + " svelte-4djjpi")) {
				attr_dev(span0, "class", span0_class_value);
			}

			if (dirty & /*state*/ 1) {
				set_style(span0, "pointer-events", /*state*/ ctx[0].pointerEvents + "\r\n                                ");
			}

			if (dirty & /*state*/ 1 && span1_class_value !== (span1_class_value = "position-relative " + (AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns)
			? 'icomoon-new-24px-checkmark-circle-1'
			: 'icomoon-new-24px-cancel-circle-1'))) {
				attr_dev(span1, "class", span1_class_value);
			}

			if (dirty & /*state*/ 1) {
				set_style(span1, "color", AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns)
				? 'green'
				: 'red');
			}

			if (dirty & /*state*/ 1 && span1_aria_label_value !== (span1_aria_label_value = AH.findInArray("ID" + /*i*/ ctx[27], /*state*/ ctx[0].correctAns)
			? "marked as correct"
			: "marked as incorrect")) {
				attr_dev(span1, "aria-label", span1_aria_label_value);
			}

			if (dirty & /*state*/ 1 && span2_class_value !== (span2_class_value = "" + (null_to_empty(/*state*/ ctx[0].iconVisible) + " svelte-4djjpi"))) {
				attr_dev(span2, "class", span2_class_value);
			}

			if (dirty & /*state*/ 1) {
				set_style(span2, "display", (/*state*/ ctx[0].iconVisible == "" && /*data*/ ctx[25].selected
				? 'block'
				: 'none') + "\r\n                                ");
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(407:20) {:else}",
		ctx
	});

	return block;
}

// (405:56) 
function create_if_block_3(ctx) {
	let br;

	const block = {
		c: function create() {
			br = element("br");
			attr_dev(br, "class", "svelte-4djjpi");
			add_location(br, file, 405, 24, 15046);
		},
		m: function mount(target, anchor) {
			insert_dev(target, br, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(br);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(405:56) ",
		ctx
	});

	return block;
}

// (398:20) {#if data.value == "," || data.value == "."}
function create_if_block_2(ctx) {
	let div;
	let span;
	let t0_value = /*data*/ ctx[25].value + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			div = element("div");
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			attr_dev(span, "class", "float-left position-absolute");
			set_style(span, "left", "-2.5px");
			add_location(span, file, 399, 28, 14751);
			attr_dev(div, "class", "float-left position-relative d-inline");
			set_style(div, "width", "1.5px");
			set_style(div, "height", "1px");
			add_location(div, file, 398, 24, 14636);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, span);
			append_dev(span, t0);
			append_dev(div, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state*/ 1 && t0_value !== (t0_value = /*data*/ ctx[25].value + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(398:20) {#if data.value == \\\",\\\" || data.value == \\\".\\\"}",
		ctx
	});

	return block;
}

// (389:16) {#each state.itemLayout as data, i }
function create_each_block(ctx) {
	let div;
	let show_if_1 = /*data*/ ctx[25].value.indexOf('##pt') > -1;
	let t0;
	let show_if = /*data*/ ctx[25].value.indexOf('#cm') > -1;
	let t1;
	let if_block2_anchor;
	let if_block0 = show_if_1 && create_if_block_5(ctx);
	let if_block1 = show_if && create_if_block_4(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*data*/ ctx[25].value == "," || /*data*/ ctx[25].value == ".") return create_if_block_2;
		if (/*data*/ ctx[25].value == "#newline#") return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block2 = current_block_type(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if_block2.c();
			if_block2_anchor = empty();
			attr_dev(div, "class", "h");
			add_location(div, file, 389, 20, 14159);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t0);
			if (if_block1) if_block1.m(div, null);
			insert_dev(target, t1, anchor);
			if_block2.m(target, anchor);
			insert_dev(target, if_block2_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state*/ 1) show_if_1 = /*data*/ ctx[25].value.indexOf('##pt') > -1;

			if (show_if_1) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*state*/ 1) show_if = /*data*/ ctx[25].value.indexOf('#cm') > -1;

			if (show_if) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block2) {
				if_block2.p(ctx, dirty);
			} else {
				if_block2.d(1);
				if_block2 = current_block_type(ctx);

				if (if_block2) {
					if_block2.c();
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (detaching) detach_dev(t1);
			if_block2.d(detaching);
			if (detaching) detach_dev(if_block2_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(389:16) {#each state.itemLayout as data, i }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*onError*/ ctx[1] != "") return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots('HotspotTokenPreview', slots, []);
	let { xml } = $$props;
	let { editorState } = $$props;
	let { isReview } = $$props;
	let { showAns } = $$props;
	let { uxml } = $$props;
	let ansSwitch = 0;
	let state = {};

	let hdd = writable({
		xml: "",
		itemType: "",
		cdata: "",
		correctAns: "",
		userAns: [],
		itemLayout: [],
		smController: "h",
		pointerEvents: "auto",
		iconVisible: "h",
		isReview: false
	});

	let onError = "";

	const unsubs = hdd.subscribe(items => {
		$$invalidate(0, state = items);
	});

	// calls whenever there is change in props or state
	beforeUpdate(() => {
		// go in block if there is change in xml
		if (xml != state.xml) {
			// set the state of xml to the current(changed) xml
			$$invalidate(0, state.xml = xml, state);

			// reset the correct and user ans
			resetValue();

			// load the module
			loadModule(xml);
		}
	}); // go in block if there is change in remediation mode
	// if (isReview) {
	//     // check tha answer
	//     checkAns();

	//     setReview(); 
	// } else {
	//     // if review mode is off
	//     if (editorState) unsetReview();
	// }
	// run just after rendering
	onMount(() => {
		// select token press the Enter Key ADA
		AH.listen('body', 'keydown', '.token', (_this, e) => {
			if (e.which === 13) {
				_this.click();
			}
		});

		if (window.inNative) {
			window.getHeight && window.getHeight();
		}
	}); // //Toggle Button Color
	// AH.bind('#sm_controller button').click(function() {
	//     $('#sm_controller button').removeClass("active btn-primary text-white bg-primary");
	//     $(this).addClass('active btn-primary text-white bg-primary');

	// });
	// Binding set-review and unset-review with the click event
	//For modeOn functions in prepkit
	// $("#set-review").on('click', function() {
	//     setReview();
	// });
	// $("#unset-review").on('click', function() {
	//     unsetReview();
	// });
	// binding token with enter key in case of IE
	// if (isIE) {
	//     AH.listen(document, "keyup", ".hotspot-token-preview .token", (_this, event)=> {
	//         if (event.which == 13) {
	//             _this.click();
	//         }
	//     });
	// }
	// when review mode is on
	function setReview() {
		$$invalidate(0, state.isReview = true, state);
		$$invalidate(0, state.smController = "", state);
		$$invalidate(0, state.pointerEvents = "none", state);
		showAnswer("yans", "showIcon");

		//$('#sm_controller .your-ans').addClass("btn-light active"); 
		AH.select(".tokenHeader", 'attr', { tabIndex: "0" });
	}

	// when review mode is off
	function unsetReview() {
		$$invalidate(0, state.isReview = false, state);
		$$invalidate(0, state.smController = "h", state);
		$$invalidate(0, state.pointerEvents = "auto", state);
		showAnswer("yans", "hideIcon");
		AH.select(".tokenHeader", 'removeAttr', 'tabindex');
	} //$('#sm_controller button').removeClass("active btn-primary text-white bg-primary");

	// for resetting the value
	function resetValue() {
		$$invalidate(0, state.correctAns = [], state);
		$$invalidate(0, state.userAns = [], state);
	}

	// load the module
	function loadModule(loadXml) {
		// Here xml is converted into the json and pass into the parseXMLAuthoring for xml parsing
		loadXml = XMLToJSON(loadXml);

		parseXMLPreview(loadXml);
	}

	// parse function for the preview
	async function parseXMLPreview(MYXML) {
		try {
			// split the correctAns by , & stored it in the current state 
			$$invalidate(0, state.correctAns = MYXML.smxml.div._correctAns.split(","), state);

			// set the type of module wether it is w,p or s
			$$invalidate(0, state.itemType = MYXML.smxml.div._type, state);

			// set the state of cdata on the basis of xml and after that parse the xml according to its type
			$$invalidate(0, state.cdata = MYXML.smxml.div.__cdata, state);

			await tick();

			switch (MYXML.smxml.div._type) {
				case "w":
					// if the type is word
					// function for parse word
					parseWord(state.cdata);
					break;
				case "s":
					// if the type is sentence
					// function for parse sentence
					parseSentance(state.cdata);
					break;
				case "p":
					// if the type is paragraph
					// function for parse paragraph
					parseParagraph(state.cdata);
					break;
				default:
					console.warn("No type found to parse");
					break;
			}

			if (uxml) {
				// parse the user ans
				parseUserAns(uxml);
			}
		} catch(error) {
			$$invalidate(1, onError = error);

			console.warn({
				'error': error.message,
				'function name': 'parseXMLPreview',
				'File name': 'HotspotTokenPreview.js'
			});
		}
	}

	// in case of word 
	function parseWord(str) {
		// replace the newline with " #newline# "
		str = str.replace(/\n/g, " #newline# ");

		//Split the string with space and remove array which contain null value
		let word = str.split(" ").map(item => {
			return item.trim();
		}).filter(arr => {
			return arr != "";
		});

		let wordArray = [];
		let tempWord = [];

		/* split punctuation mark in word and store in the tempWord array */
		word.map((data, i) => {
			let special_symbol = data.match(/[.,]/g);

			if (special_symbol) {
				let splitText = data.split(special_symbol[0]);
				tempWord.push(splitText[0]);
				tempWord.push(special_symbol[0]);

				if (splitText[1].trim()) {
					tempWord.push(splitText[1]);
				}
			} else {
				tempWord.push(data);
			}
		});

		/*end*/
		// store id, value and selected in wordArray
		// Here id is unique id of that element , value stores the element value and selected stores wether it is selected or not
		tempWord.map((data, i) => {
			wordArray.push({
				id: "ID" + i,
				value: data,
				selected: false
			});
		});

		$$invalidate(0, state.itemLayout = wordArray, state);
	}

	// in case of sentence
	function parseSentance(str) {
		//Split the string with fullstop and remove array which contain null value
		let sentance = str.split(".").map(item => {
			return item.trim();
		}).filter(arr => {
			return arr != "";
		});

		let sentanceArray = [];

		// store id, value and selected in sentanceArray
		// Here id is unique id of that element , value stores the element value and selected stores wether it is selected or not
		sentance.map((data, i) => {
			sentanceArray.push({
				id: "ID" + i,
				value: data + ".",
				selected: false
			});
		});

		$$invalidate(0, state.itemLayout = sentanceArray, state);
	}

	// in case of paragraph
	function parseParagraph(str) {
		//Split the string with paragraph and remove array which contain null value
		let paragraph = str.split("\n").map(item => {
			return item.trim();
		}).filter(arr => {
			return arr != "";
		});

		let paragraphArray = [];

		// store id, value and selected in paragraphArray
		// Here id is unique id of that element , value stores the element value and selected stores wether it is selected or not
		paragraph.map((data, i) => {
			paragraphArray.push({
				id: "ID" + i,
				value: data,
				selected: false
			});
		});

		$$invalidate(0, state.itemLayout = paragraphArray, state);
	}

	function getCorrect(id) {
		//Return true if this id is correct answer
		return AH.findInArray(id, state.correctAns) ? true : false;
	}

	// for checking the answer
	function checkAns() {
		// used for switch on next question in prepengine if current question is attempted
		ISSPECIALMODULEUSERXMLCHANGE = 1;

		let resultLength = 0;
		const correctLength = state.correctAns.length;

		//Check if correct answer is equal to user answer
		state.correctAns.map((data, i) => {
			state.userAns.map((data2, j) => {
				if (data == data2) {
					resultLength = resultLength + 1;
				}
			});
		});

		let ans = correctLength == resultLength && resultLength == state.userAns.length
		? true
		: false;

		onUserAnsChange({ ans, uXml: uxml });
		showAns && showAns(ans ? "Correct" : "Incorrect");
	}

	// for stting the user answer for selected one
	function setSelected(pos) {
		$$invalidate(0, state.itemLayout[pos].selected = !state.itemLayout[pos].selected, state);
		setUserAns(pos, state.itemLayout[pos].selected);
	}

	function setUserAns(id, selected) {
		let tempUserAns = state.userAns;

		//Push the index in user answer array if clicked first time
		//and delete the index from user answer if it is already selected
		if (selected == true) {
			// push in the userAns if it is selected
			tempUserAns.push("ID" + id);

			$$invalidate(0, state.userAns = tempUserAns, state);
		} else if (selected == false) {
			let deleteValue = tempUserAns.indexOf("ID" + id);

			if (deleteValue > -1) {
				// delete from the user ans if it is deselected
				tempUserAns.splice(deleteValue, 1);
			}

			$$invalidate(0, state.userAns = tempUserAns, state);
		}

		// getting height in native
		if (window.inNative) {
			window.getHeight && window.getHeight();
		}

		// updating the uaXml
		$$invalidate(6, uxml = "<smans><div userAns='" + state.userAns.join() + "'></div></smans>");

		// AH.select("#special_module_user_xml", 'value', "<smans><div userAns='"+state.userAns.join()+"'></div></smans>")
		// check for correct answer
		checkAns();
	}

	// for showing answer
	function showAnswer(val, iconState) {
		//show correct incorrect icon with respect to iconState
		$$invalidate(0, state.iconVisible = iconState == "showIcon" ? "" : "h", state);

		//change token highlight with respect to val
		//either to show correct answer or user answer
		let ans = [];

		if (val == "cans") {
			// if correct ans tab
			ans = state.correctAns;
		} else if (val == "yans") {
			// if user answer tab
			ans = state.userAns;
		}

		state.itemLayout.map((data, j) => {
			data.selected = AH.findInArray(data.id, ans) ? true : false;
		}); //return data;
	}

	// for parsing the user ans function
	function parseUserAns(uans) {
		// converting the xml into the json and stored in userAnswer
		let userAnswer = XMLToJSON(uans);

		// cheking for the 2 elements smans,div, and one attribute of div i.e, userAns
		if (userAnswer.smans && userAnswer.smans.div && userAnswer.smans.div._userAns) {
			// splitting the userAns with ,
			$$invalidate(0, state.userAns = userAnswer.smans.div._userAns.split(","), state);

			// get the selection on the basis of the user answer
			state.itemLayout.map((data, j) => {
				data.selected = AH.findInArray(data.id, state.userAns) ? true : false;
			});
		}
	}

	function handleReviewClick(mode, event) {
		if (mode == 'c') {
			showAnswer("cans", "hideIcon");
		} else {
			showAnswer("yans", "showIcon");
		}
	}

	const writable_props = ['xml', 'editorState', 'isReview', 'showAns', 'uxml'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<HotspotTokenPreview> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('xml' in $$props) $$invalidate(7, xml = $$props.xml);
		if ('editorState' in $$props) $$invalidate(8, editorState = $$props.editorState);
		if ('isReview' in $$props) $$invalidate(9, isReview = $$props.isReview);
		if ('showAns' in $$props) $$invalidate(10, showAns = $$props.showAns);
		if ('uxml' in $$props) $$invalidate(6, uxml = $$props.uxml);
	};

	$$self.$capture_state = () => ({
		beforeUpdate,
		onMount,
		tick,
		writable,
		ItemHelper,
		AH,
		onUserAnsChange,
		XMLToJSON,
		l,
		xml,
		editorState,
		isReview,
		showAns,
		uxml,
		ansSwitch,
		state,
		hdd,
		onError,
		unsubs,
		setReview,
		unsetReview,
		resetValue,
		loadModule,
		parseXMLPreview,
		parseWord,
		parseSentance,
		parseParagraph,
		getCorrect,
		checkAns,
		setSelected,
		setUserAns,
		showAnswer,
		parseUserAns,
		handleReviewClick
	});

	$$self.$inject_state = $$props => {
		if ('xml' in $$props) $$invalidate(7, xml = $$props.xml);
		if ('editorState' in $$props) $$invalidate(8, editorState = $$props.editorState);
		if ('isReview' in $$props) $$invalidate(9, isReview = $$props.isReview);
		if ('showAns' in $$props) $$invalidate(10, showAns = $$props.showAns);
		if ('uxml' in $$props) $$invalidate(6, uxml = $$props.uxml);
		if ('ansSwitch' in $$props) $$invalidate(11, ansSwitch = $$props.ansSwitch);
		if ('state' in $$props) $$invalidate(0, state = $$props.state);
		if ('hdd' in $$props) hdd = $$props.hdd;
		if ('onError' in $$props) $$invalidate(1, onError = $$props.onError);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isReview, editorState, ansSwitch*/ 2816) {
			// go in block if there is change in remediation mode
			 {
				if (isReview) {
					setReview();

					if (editorState && ansSwitch == 0) {
						// check tha answer
						$$invalidate(11, ansSwitch = 1);

						checkAns();
					}
				} else {
					// if review mode is off
					$$invalidate(11, ansSwitch = 0);

					if (editorState) unsetReview();
				}
			}
		}
	};

	return [
		state,
		onError,
		setReview,
		unsetReview,
		setSelected,
		handleReviewClick,
		uxml,
		xml,
		editorState,
		isReview,
		showAns,
		ansSwitch
	];
}

class HotspotTokenPreview extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				xml: 7,
				editorState: 8,
				isReview: 9,
				showAns: 10,
				uxml: 6
			},
			add_css
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "HotspotTokenPreview",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*xml*/ ctx[7] === undefined && !('xml' in props)) {
			console_1.warn("<HotspotTokenPreview> was created without expected prop 'xml'");
		}

		if (/*editorState*/ ctx[8] === undefined && !('editorState' in props)) {
			console_1.warn("<HotspotTokenPreview> was created without expected prop 'editorState'");
		}

		if (/*isReview*/ ctx[9] === undefined && !('isReview' in props)) {
			console_1.warn("<HotspotTokenPreview> was created without expected prop 'isReview'");
		}

		if (/*showAns*/ ctx[10] === undefined && !('showAns' in props)) {
			console_1.warn("<HotspotTokenPreview> was created without expected prop 'showAns'");
		}

		if (/*uxml*/ ctx[6] === undefined && !('uxml' in props)) {
			console_1.warn("<HotspotTokenPreview> was created without expected prop 'uxml'");
		}
	}

	get xml() {
		throw new Error("<HotspotTokenPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xml(value) {
		throw new Error("<HotspotTokenPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get editorState() {
		throw new Error("<HotspotTokenPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set editorState(value) {
		throw new Error("<HotspotTokenPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isReview() {
		throw new Error("<HotspotTokenPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isReview(value) {
		throw new Error("<HotspotTokenPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showAns() {
		throw new Error("<HotspotTokenPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showAns(value) {
		throw new Error("<HotspotTokenPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get uxml() {
		throw new Error("<HotspotTokenPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set uxml(value) {
		throw new Error("<HotspotTokenPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default HotspotTokenPreview;
//# sourceMappingURL=HotspotTokenPreview-22d464ba.js.map
