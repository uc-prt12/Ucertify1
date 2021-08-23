
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, C as validate_each_argument, v as validate_slots, o as onMount, X as XMLToJSON, y as l, A as AH, a3 as onUserAnsChange, e as element, k as add_location, j as attr_dev, n as insert_dev, p as append_dev, B as noop, x as detach_dev, h as text, f as space, q as listen_dev, F as set_data_dev, G as prop_dev, c as create_component, m as mount_component, t as transition_in, a as transition_out, b as destroy_component, K as destroy_each, z as empty } from './main-d0e46147.js';
import { I as ItemHelper } from './ItemHelper-e9822fe2.js';
import { s as styleInject } from './style-inject.es-1c867377.js';

var css_248z = ".slider_item_container{max-width:710px;margin:0 auto;padding:15px 15px}.slider_heading{border:1px solid #a6c8ff;height:28px;border-radius:2px;padding-top:3px}.slider_heading_test{border:1px solid #a6c8ff;padding:2px 10px;border-radius:2px}.removeitem{width:23px;padding-top:4px}.sliderdefaultans,.slidermax,.slidermin,.sliderstep{width:70px;margin-top:9px}.slideroutput{margin-top:9px;float:left;width:70px;border:1px solid #ccc;height:34px;border-radius:4px;background:#dcdcdc}.slider_container{border:1px solid #a6c8ff}.correct_incorrect_icon_fill{right:2px;top:0;font-size:18px}input[type=range]{-webkit-appearance:none;margin:18px 0;width:100%;background:0 0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#0087ca;border-radius:1.3px;border:1px solid #010101}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 2px 2px #ccc;height:16px;width:16px;border-radius:50%;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-7px}input[type=range]:focus::-moz-range-track,input[type=range]:focus::-webkit-slider-runnable-track{background:#05e6ff}input[type=range]::-moz-range-track{width:100%;height:2.4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#0087ca;border-radius:1.3px;border:.2px solid #010101}input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:16px;width:16px;border-radius:50%;background:#fff;cursor:pointer}input[type=range]::-ms-track{width:100%;height:5px;cursor:pointer;background:0 0;border-color:transparent;border-width:16px 0;border-radius:1.3px;color:transparent}input[type=range]::-ms-fill-lower{background:#0087ca;border:.1px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}input[type=range]::-ms-fill-upper{background:#0087ca;border:.1px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}input[type=range]::-ms-thumb{box-shadow:0 0 1px 1px #ccc;border:1px solid #000;height:16px;width:16px;border-radius:50%;background:#fff;cursor:pointer;margin-top:.8px}.width100{width:100px}.slideropt{margin-top:6px}.btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}";
styleInject(css_248z);

/* clsSMSlider\SliderItemPreview.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "clsSMSlider\\SliderItemPreview.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	child_ctx[22] = i;
	return child_ctx;
}

// (248:0) {#if onError != "" }
function create_if_block_3(ctx) {
	let div;
	let span;

	const block = {
		c: function create() {
			div = element("div");
			span = element("span");
			span.textContent = `${l.oops_msg}`;
			add_location(span, file, 249, 8, 10659);
			attr_dev(div, "class", "alert alert-danger font-weight-bold");
			add_location(div, file, 248, 4, 10600);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, span);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(248:0) {#if onError != \\\"\\\" }",
		ctx
	});

	return block;
}

// (281:24) {#if (targetView == "block" && user_ans_tab == true)}
function create_if_block_1(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*data*/ ctx[20].anskey == /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid]) return create_if_block_2;
		return create_else_block_1;
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
			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
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
		id: create_if_block_1.name,
		type: "if",
		source: "(281:24) {#if (targetView == \\\"block\\\" && user_ans_tab == true)}",
		ctx
	});

	return block;
}

// (286:28) {:else}
function create_else_block_1(ctx) {
	let span1;
	let span0;

	const block = {
		c: function create() {
			span1 = element("span");
			span0 = element("span");
			attr_dev(span0, "class", "icomoon-new-24px-cancel-circle-1 font-weight-bold text-danger");
			add_location(span0, file, 287, 36, 12812);
			attr_dev(span1, "class", "correct_incorrect_icon_fill position-absolute");
			add_location(span1, file, 286, 32, 12714);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span1, anchor);
			append_dev(span1, span0);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(286:28) {:else}",
		ctx
	});

	return block;
}

// (282:28) {#if data.anskey == state.datauserans[data.sliderid]}
function create_if_block_2(ctx) {
	let span1;
	let span0;

	const block = {
		c: function create() {
			span1 = element("span");
			span0 = element("span");
			attr_dev(span0, "class", "icomoon-new-24px-checkmark-circle-1 font-weight-bold text-success");
			add_location(span0, file, 283, 36, 12515);
			attr_dev(span1, "class", "correct_incorrect_icon_fill position-absolute");
			add_location(span1, file, 282, 32, 12417);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span1, anchor);
			append_dev(span1, span0);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(282:28) {#if data.anskey == state.datauserans[data.sliderid]}",
		ctx
	});

	return block;
}

// (300:36) {:else}
function create_else_block(ctx) {
	let span;
	let t0_value = l.correct_val + "";
	let t0;
	let t1;
	let t2_value = /*data*/ ctx[20].anskey + "";
	let t2;

	const block = {
		c: function create() {
			span = element("span");
			t0 = text(t0_value);
			t1 = text(": ");
			t2 = text(t2_value);
			add_location(span, file, 300, 40, 13811);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t0);
			append_dev(span, t1);
			append_dev(span, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*localSliderData*/ 2 && t2_value !== (t2_value = /*data*/ ctx[20].anskey + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(300:36) {:else}",
		ctx
	});

	return block;
}

// (298:36) {#if !(targetView == "block" && user_ans_tab == false)}
function create_if_block(ctx) {
	let span;
	let t0_value = l.current_val + "";
	let t0;
	let t1;

	let t2_value = (/*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == 0 || /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == undefined
	? /*data*/ ctx[20].defaultans
	: /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid]) + "";

	let t2;

	const block = {
		c: function create() {
			span = element("span");
			t0 = text(t0_value);
			t1 = text(": ");
			t2 = text(t2_value);
			add_location(span, file, 298, 40, 13545);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t0);
			append_dev(span, t1);
			append_dev(span, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*state, localSliderData*/ 6 && t2_value !== (t2_value = (/*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == 0 || /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == undefined
			? /*data*/ ctx[20].defaultans
			: /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid]) + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(298:36) {#if !(targetView == \\\"block\\\" && user_ans_tab == false)}",
		ctx
	});

	return block;
}

// (262:12) {#each localSliderData as data, i}
function create_each_block(ctx) {
	let div7;
	let div0;
	let span0;
	let t0_value = /*data*/ ctx[20].title_val + "";
	let t0;
	let t1;
	let div6;
	let input;
	let input_id_value;
	let input_min_value;
	let input_max_value;
	let input_step_value;
	let input_value_value;
	let input_disabled_value;
	let t2;
	let t3;
	let div5;
	let div1;
	let span1;
	let t4_value = l.min_val + "";
	let t4;
	let t5;
	let t6_value = /*data*/ ctx[20].minval + "";
	let t6;
	let t7;
	let div3;
	let div2;
	let t8;
	let div4;
	let span2;
	let t9_value = l.max_val + "";
	let t9;
	let t10;
	let t11_value = /*data*/ ctx[20].maxval + "";
	let t11;
	let t12;
	let div7_key_value;
	let mounted;
	let dispose;
	let if_block0 = /*targetView*/ ctx[4] == "block" && /*user_ans_tab*/ ctx[3] == true && create_if_block_1(ctx);

	function select_block_type_1(ctx, dirty) {
		if (!(/*targetView*/ ctx[4] == "block" && /*user_ans_tab*/ ctx[3] == false)) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block1 = current_block_type(ctx);

	const block = {
		c: function create() {
			div7 = element("div");
			div0 = element("div");
			span0 = element("span");
			t0 = text(t0_value);
			t1 = space();
			div6 = element("div");
			input = element("input");
			t2 = space();
			if (if_block0) if_block0.c();
			t3 = space();
			div5 = element("div");
			div1 = element("div");
			span1 = element("span");
			t4 = text(t4_value);
			t5 = text(": ");
			t6 = text(t6_value);
			t7 = space();
			div3 = element("div");
			div2 = element("div");
			if_block1.c();
			t8 = space();
			div4 = element("div");
			span2 = element("span");
			t9 = text(t9_value);
			t10 = text(": ");
			t11 = text(t11_value);
			t12 = space();
			add_location(span0, file, 264, 24, 11243);
			attr_dev(div0, "class", "slider_heading_test text-start text-white bg-primary");
			attr_dev(div0, "tabindex", "0");
			add_location(div0, file, 263, 20, 11138);
			attr_dev(input, "id", input_id_value = /*data*/ ctx[20].sliderid);
			attr_dev(input, "type", "range");
			attr_dev(input, "name", "sliderrange");
			attr_dev(input, "min", input_min_value = /*data*/ ctx[20].minval);
			attr_dev(input, "max", input_max_value = /*data*/ ctx[20].maxval);
			attr_dev(input, "step", input_step_value = /*data*/ ctx[20].step_val);
			attr_dev(input, "class", "slideritem");

			input.value = input_value_value = /*targetView*/ ctx[4] == "block" && /*user_ans_tab*/ ctx[3] == false
			? parseInt(/*data*/ ctx[20].anskey)
			: /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == 0 || /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == undefined
				? parseInt(/*data*/ ctx[20].defaultans)
				: parseInt(/*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid]);

			input.disabled = input_disabled_value = /*targetView*/ ctx[4] == 'block' ? true : false;
			attr_dev(input, "tabindex", "0");
			add_location(input, file, 267, 24, 11412);
			add_location(span1, file, 293, 32, 13200);
			attr_dev(div1, "class", "minRange float-start col px-0 text-start");
			attr_dev(div1, "tabindex", "0");
			add_location(div1, file, 292, 28, 13099);
			attr_dev(div2, "class", "current_val");
			add_location(div2, file, 296, 32, 13385);
			attr_dev(div3, "class", "rangevalue col px-0");
			attr_dev(div3, "tabindex", "0");
			add_location(div3, file, 295, 28, 13305);
			add_location(span2, file, 305, 32, 14101);
			attr_dev(div4, "class", "max_val float-end col px-0 text-end");
			attr_dev(div4, "tabindex", "0");
			add_location(div4, file, 304, 28, 14005);
			attr_dev(div5, "class", "range_details mt-2 row mx-0");
			add_location(div5, file, 291, 24, 13028);
			attr_dev(div6, "class", "col-md-12 select_slider_test w-100 pt-3 px-3 pb-2");
			add_location(div6, file, 266, 20, 11323);
			attr_dev(div7, "key", div7_key_value = /*i*/ ctx[22]);
			attr_dev(div7, "class", "clearfix slider_container my-3 rounded w-100");
			add_location(div7, file, 262, 16, 11050);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div7, anchor);
			append_dev(div7, div0);
			append_dev(div0, span0);
			append_dev(span0, t0);
			append_dev(div7, t1);
			append_dev(div7, div6);
			append_dev(div6, input);
			append_dev(div6, t2);
			if (if_block0) if_block0.m(div6, null);
			append_dev(div6, t3);
			append_dev(div6, div5);
			append_dev(div5, div1);
			append_dev(div1, span1);
			append_dev(span1, t4);
			append_dev(span1, t5);
			append_dev(span1, t6);
			append_dev(div5, t7);
			append_dev(div5, div3);
			append_dev(div3, div2);
			if_block1.m(div2, null);
			append_dev(div5, t8);
			append_dev(div5, div4);
			append_dev(div4, span2);
			append_dev(span2, t9);
			append_dev(span2, t10);
			append_dev(span2, t11);
			append_dev(div7, t12);

			if (!mounted) {
				dispose = listen_dev(input, "input", /*handleRange*/ ctx[6], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*localSliderData*/ 2 && t0_value !== (t0_value = /*data*/ ctx[20].title_val + "")) set_data_dev(t0, t0_value);

			if (dirty & /*localSliderData*/ 2 && input_id_value !== (input_id_value = /*data*/ ctx[20].sliderid)) {
				attr_dev(input, "id", input_id_value);
			}

			if (dirty & /*localSliderData*/ 2 && input_min_value !== (input_min_value = /*data*/ ctx[20].minval)) {
				attr_dev(input, "min", input_min_value);
			}

			if (dirty & /*localSliderData*/ 2 && input_max_value !== (input_max_value = /*data*/ ctx[20].maxval)) {
				attr_dev(input, "max", input_max_value);
			}

			if (dirty & /*localSliderData*/ 2 && input_step_value !== (input_step_value = /*data*/ ctx[20].step_val)) {
				attr_dev(input, "step", input_step_value);
			}

			if (dirty & /*targetView, user_ans_tab, localSliderData, state*/ 30 && input_value_value !== (input_value_value = /*targetView*/ ctx[4] == "block" && /*user_ans_tab*/ ctx[3] == false
			? parseInt(/*data*/ ctx[20].anskey)
			: /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == 0 || /*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid] == undefined
				? parseInt(/*data*/ ctx[20].defaultans)
				: parseInt(/*state*/ ctx[2].datauserans[/*data*/ ctx[20].sliderid]))) {
				prop_dev(input, "value", input_value_value);
			}

			if (dirty & /*targetView*/ 16 && input_disabled_value !== (input_disabled_value = /*targetView*/ ctx[4] == 'block' ? true : false)) {
				prop_dev(input, "disabled", input_disabled_value);
			}

			if (/*targetView*/ ctx[4] == "block" && /*user_ans_tab*/ ctx[3] == true) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div6, t3);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*localSliderData*/ 2 && t6_value !== (t6_value = /*data*/ ctx[20].minval + "")) set_data_dev(t6, t6_value);

			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(div2, null);
				}
			}

			if (dirty & /*localSliderData*/ 2 && t11_value !== (t11_value = /*data*/ ctx[20].maxval + "")) set_data_dev(t11, t11_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div7);
			if (if_block0) if_block0.d();
			if_block1.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(262:12) {#each localSliderData as data, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div2;
	let itemhelper;
	let t1;
	let div1;
	let div0;
	let current;
	let if_block = /*onError*/ ctx[5] != "" && create_if_block_3(ctx);

	itemhelper = new ItemHelper({
			props: {
				reviewMode: /*isReview*/ ctx[0],
				handleReviewClick: /*handleReviewMode*/ ctx[9]
			},
			$$inline: true
		});

	itemhelper.$on("setReview", /*setReview*/ ctx[7]);
	itemhelper.$on("unsetReview", /*unsetReview*/ ctx[8]);
	let each_value = /*localSliderData*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t0 = space();
			div2 = element("div");
			create_component(itemhelper.$$.fragment);
			t1 = space();
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(div0, "class", "slider_item_container");
			add_location(div0, file, 260, 8, 10949);
			attr_dev(div1, "id", "slidermain");
			add_location(div1, file, 259, 4, 10918);
			attr_dev(div2, "class", "text-center");
			add_location(div2, file, 252, 0, 10706);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			mount_component(itemhelper, div2, null);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*onError*/ ctx[5] != "") {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(t0.parentNode, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const itemhelper_changes = {};
			if (dirty & /*isReview*/ 1) itemhelper_changes.reviewMode = /*isReview*/ ctx[0];
			itemhelper.$set(itemhelper_changes);

			if (dirty & /*localSliderData, l, state, undefined, targetView, user_ans_tab, parseInt, handleRange*/ 94) {
				each_value = /*localSliderData*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			destroy_component(itemhelper);
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

function jsontoArray(obj) {
	if (Array.isArray(obj) == false) {
		// contains json data
		let temp = obj;

		// creates array
		obj = [];

		// assign the json data at index 0 
		obj[0] = temp;
	}

	// returns an array containing json data
	return obj;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('SliderItemPreview', slots, []);
	let { xml } = $$props;
	let { uxml } = $$props;
	let { showAns } = $$props;
	let { isReview } = $$props;
	let { editorState } = $$props;
	let localSliderData = [], userAnsXML, user_ans_tab = true;
	let state = { datauserans: {} };
	let targetView = "none";
	let result, onError = "";

	// function loadLibs() {
	//     let config = {
	//         preload: true,
	//         type: 'stylesheet',
	//         as: 'style'
	//     }
	//     AH.createLink(window.itemFolder + 'clsSMSlider/css/slider.min.css', config);
	// }
	onMount(() => {
		//loadLibs();
		loadModule(xml);

		// used for native team
		if (window.inNative) {
			window.getHeight && window.getHeight();
		}
	});

	//checked
	// updates the value of sliders elements and load the module
	function loadModule(loadXml) {
		loadXml = XMLToJSON(loadXml);

		// parses the xml and updates the values of sliders elements
		parseXMLPreview(loadXml);
	}

	//checked
	// parses the xml and updates the values of sliders elements
	function parseXMLPreview(SLIDERXML) {
		try {
			// contains array of slider object
			let sliderData = SLIDERXML.smxml.slider;

			// creates an array for storing the data to update the values of sliders elements
			$$invalidate(1, localSliderData = []);

			if (sliderData) {
				if (Array.isArray(sliderData) == false) {
					// creates an array
					sliderData = [];

					// assign the value of slider key at index zero
					sliderData[0] = SLIDERXML.smxml.slider;
				}
			}

			for (let i = 0; i < sliderData.length; i++) {
				localSliderData.push({
					// used to set the id of the range element of the slider at index 'i'
					sliderid: sliderData[i]._key,
					// used to set the value of range element of slider at index 'i' when correct answer button is clicked
					anskey: sliderData[i]._anskey,
					// used to set the title value of the slider at index 'i'
					title_val: sliderData[i]._title,
					// used to set the step value of the slider at index 'i'
					step_val: sliderData[i]._step,
					// used to set the default value of the slider at index 'i'
					defaultans: sliderData[i]._defaultans,
					// not used any where so can be remove it
					defaultans_id: "defaultans" + sliderData[i]._key,
					// not used any where so can be remove it
					title_id: "title" + sliderData[i]._key,
					// not used any where so can be remove it
					step_id: "step" + sliderData[i]._key,
					// not used any where so can be remove it
					sliderans: "slider" + sliderData[i]._key,
					// not used any where so can be remove it
					remove_item: "remove_item" + sliderData[i]._key,
					// not used any where so can be remove it
					minid: "min" + sliderData[i]._key,
					// not used any where so can be remove it
					maxid: "max" + sliderData[i]._key,
					sliderop: "sliderop" + sliderData[i]._key,
					// used to define the min value of the range element and value of label min of slider at index 'i'
					minval: sliderData[i]._minmax.split(",")[0],
					// used to define the max value of the range element and value of label max of slider at index 'i'
					maxval: sliderData[i]._minmax.split(",")[1]
				});
			}
		} catch(error) {
			$$invalidate(5, onError = error);

			console.log({
				error,
				'function': 'parseXMLPreview',
				'File': 'SliderItemPreview.js'
			});
		}
	}

	// display the correct or incorrect according to the answer matched
	function displayAns() {
		// contains correct or incorrect according to the return value of checkAns method
		let ans = checkAns();

		if (editorState) {
			// shows the answer correct or incorrect according to the value of variable 'ans'
			showAns(ans);
		}
	}

	/* defines the user answer xml, checks the answer and returns correct or incorrect according to the match of result */
	function checkAns() {
		// used for switch on next question in prepengine if current question is attempted
		ISSPECIALMODULEUSERXMLCHANGE = 1;

		// used to create user answer xml
		userAnsXML = "<smans type='30'>";

		result = true;

		localSliderData.map(function (data) {
			$$invalidate(
				2,
				state.datauserans[data.sliderid] = state.datauserans[data.sliderid] === undefined
				? data.defaultans
				: state.datauserans[data.sliderid],
				state
			);

			if (parseInt(data.anskey) != parseInt(state.datauserans[data.sliderid])) {
				result = false;
			}

			userAnsXML += "<slider id='" + data.sliderid + "' userAns='" + state.datauserans[data.sliderid] + "'></slider>";
		});

		userAnsXML += "</smans>";

		// defined this condition for not update the user answer xml if user has not performed anything
		// if (localSliderData.length > 0) {
		//     // defines the user answer xml
		//     uxml = userAnsXML;
		// }
		if (!editorState) {
			onUserAnsChange({ uXml: userAnsXML, ans: result });
		}

		if (result) {
			//AH.select("#answer").checked = true; //@sneh : this was commented that's why in quiz player answer was not recording
			return "Correct";
		} else {
			//AH.select("#answer").checked = false; //@sneh : this was commented that's why in quiz player answer was not recording
			return "Incorrect";
		}
	}

	// change the value of state datauserans after changing the value of slider range
	function handleRange() {
		// updates the value of state datauserans at given key 
		$$invalidate(2, state.datauserans[this.id] = this.value, state);

		// updates the value of state datauserans
		(((($$invalidate(2, state), $$invalidate(0, isReview)), $$invalidate(10, xml)), $$invalidate(11, uxml)), $$invalidate(1, localSliderData));

		// display the correct or incorrect according to the answer matched
		displayAns();
	}

	//checked
	// checks and show the answer, shows correct answer and your answer button and not allow the user to perform the task
	function setReview() {
		$$invalidate(4, targetView = "block");
		$$invalidate(0, isReview = true);
	}

	//checked
	// allow the user to perform the task and hides correct answer and your answer button
	function unsetReview() {
		$$invalidate(4, targetView = "none");
		$$invalidate(0, isReview = false);
	}

	//checked
	function handleReviewMode(mode) {
		if (mode == 'c') {
			$$invalidate(3, user_ans_tab = false);
		} else if (mode == 'u') {
			$$invalidate(3, user_ans_tab = true);
		}
	}

	const writable_props = ['xml', 'uxml', 'showAns', 'isReview', 'editorState'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<SliderItemPreview> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('xml' in $$props) $$invalidate(10, xml = $$props.xml);
		if ('uxml' in $$props) $$invalidate(11, uxml = $$props.uxml);
		if ('showAns' in $$props) $$invalidate(12, showAns = $$props.showAns);
		if ('isReview' in $$props) $$invalidate(0, isReview = $$props.isReview);
		if ('editorState' in $$props) $$invalidate(13, editorState = $$props.editorState);
	};

	$$self.$capture_state = () => ({
		onMount,
		l,
		ItemHelper,
		AH,
		XMLToJSON,
		onUserAnsChange,
		xml,
		uxml,
		showAns,
		isReview,
		editorState,
		localSliderData,
		userAnsXML,
		user_ans_tab,
		state,
		targetView,
		result,
		onError,
		jsontoArray,
		loadModule,
		parseXMLPreview,
		displayAns,
		checkAns,
		handleRange,
		setReview,
		unsetReview,
		handleReviewMode
	});

	$$self.$inject_state = $$props => {
		if ('xml' in $$props) $$invalidate(10, xml = $$props.xml);
		if ('uxml' in $$props) $$invalidate(11, uxml = $$props.uxml);
		if ('showAns' in $$props) $$invalidate(12, showAns = $$props.showAns);
		if ('isReview' in $$props) $$invalidate(0, isReview = $$props.isReview);
		if ('editorState' in $$props) $$invalidate(13, editorState = $$props.editorState);
		if ('localSliderData' in $$props) $$invalidate(1, localSliderData = $$props.localSliderData);
		if ('userAnsXML' in $$props) userAnsXML = $$props.userAnsXML;
		if ('user_ans_tab' in $$props) $$invalidate(3, user_ans_tab = $$props.user_ans_tab);
		if ('state' in $$props) $$invalidate(2, state = $$props.state);
		if ('targetView' in $$props) $$invalidate(4, targetView = $$props.targetView);
		if ('result' in $$props) result = $$props.result;
		if ('onError' in $$props) $$invalidate(5, onError = $$props.onError);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isReview, xml, state, uxml, localSliderData*/ 3079) {
			 {
				if (isReview) {
					$$invalidate(4, targetView = "block");

					// display the correct or incorrect according to the answer matched
					displayAns();

					setReview();
				} else {
					$$invalidate(4, targetView = "none");
				}

				if (xml != state.xml) {
					// update the value of state 'xml'
					$$invalidate(2, state.xml = xml, state);

					// updates the value of sliders elements and load the module
					loadModule(xml);

					// used to contain the json data of previous xml and next xml
					let oldjsonraw, newjsonraw;

					// assign the json data of previous xml into variable 'oldjsonraw'
					oldjsonraw = XMLToJSON(xml == "" ? state.xml : xml);

					// assign the json data of next xml into variable 'newjsonraw'
					newjsonraw = XMLToJSON(state.xml);

					// contains the array of json object having key slider of json oldjsonraw
					let oldjson = jsontoArray(oldjsonraw.smxml.slider);

					// contains the array of json object having key slider of json newjsonraw
					let newjson = jsontoArray(newjsonraw.smxml.slider);

					oldjson.map(function (data, i) {
						if (newjson[i] != undefined) {
							if (data._defaultans != newjson[i]._defaultans) {
								/* updates the value of state 'datauserans' having key  'data.key' to the value of slider key at index 'i' of json jsonraw */
								$$invalidate(2, state.datauserans[data._key] = newjson[i]._defaultans, state);
							}
						}
					});

					if (uxml) {
						let uaXML;

						// converts user answer xml into json object and assign the value to uaXML variable
						uaXML = XMLToJSON(uxml);

						if (typeof uaXML.smans.slider != "undefined") {
							//@sneh: added this line because map function was generating error in quiz player
							localSliderData.map(function (data, i) {
								// updates the value of array state datauserans at defined index with the value of slider's key array at index 'i' of json uaXML 
								$$invalidate(2, state.datauserans[data.sliderid] = uaXML.smans.slider[i]._userAns, state);
							});
						}
					}
				}
			}
		}
	};

	return [
		isReview,
		localSliderData,
		state,
		user_ans_tab,
		targetView,
		onError,
		handleRange,
		setReview,
		unsetReview,
		handleReviewMode,
		xml,
		uxml,
		showAns,
		editorState
	];
}

class SliderItemPreview extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			xml: 10,
			uxml: 11,
			showAns: 12,
			isReview: 0,
			editorState: 13
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SliderItemPreview",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*xml*/ ctx[10] === undefined && !('xml' in props)) {
			console_1.warn("<SliderItemPreview> was created without expected prop 'xml'");
		}

		if (/*uxml*/ ctx[11] === undefined && !('uxml' in props)) {
			console_1.warn("<SliderItemPreview> was created without expected prop 'uxml'");
		}

		if (/*showAns*/ ctx[12] === undefined && !('showAns' in props)) {
			console_1.warn("<SliderItemPreview> was created without expected prop 'showAns'");
		}

		if (/*isReview*/ ctx[0] === undefined && !('isReview' in props)) {
			console_1.warn("<SliderItemPreview> was created without expected prop 'isReview'");
		}

		if (/*editorState*/ ctx[13] === undefined && !('editorState' in props)) {
			console_1.warn("<SliderItemPreview> was created without expected prop 'editorState'");
		}
	}

	get xml() {
		throw new Error("<SliderItemPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xml(value) {
		throw new Error("<SliderItemPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get uxml() {
		throw new Error("<SliderItemPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set uxml(value) {
		throw new Error("<SliderItemPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showAns() {
		throw new Error("<SliderItemPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showAns(value) {
		throw new Error("<SliderItemPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isReview() {
		throw new Error("<SliderItemPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isReview(value) {
		throw new Error("<SliderItemPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get editorState() {
		throw new Error("<SliderItemPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set editorState(value) {
		throw new Error("<SliderItemPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default SliderItemPreview;
//# sourceMappingURL=SliderItemPreview-d5dffc84.js.map
