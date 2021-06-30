
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, v as validate_slots, o as onMount, X as XMLToJSON, A as AH, a7 as afterUpdate, _ as onUserAnsChange, y as language, C as validate_each_argument, z as empty, n as insert_dev, K as destroy_each, x as detach_dev, e as element, f as space, k as add_location, p as append_dev, c as create_component, h as text, j as attr_dev, l as set_style, m as mount_component, F as set_data_dev, t as transition_in, a as transition_out, b as destroy_component, q as listen_dev, H as run_all } from './main-59da555a.js';
import { I as ItemHelper } from './ItemHelper-d61166b5.js';

/* clsSMShadedGrid/ShadingPreview.svelte generated by Svelte v3.29.0 */

const { console: console_1 } = globals;
const file = "clsSMShadedGrid/ShadingPreview.svelte";

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[40] = list[i];
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[37] = list[i];
	child_ctx[39] = i;
	return child_ctx;
}

// (388:12) {#if total_row_count && total_row_count.length > 0}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*total_row_count*/ ctx[4];
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
			if (dirty[0] & /*preview_table, isReview, userTab, gridClickPreview, adaKeyupGridClick, state, total_row_count*/ 635) {
				each_value = /*total_row_count*/ ctx[4];
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
		id: create_if_block.name,
		type: "if",
		source: "(388:12) {#if total_row_count && total_row_count.length > 0}",
		ctx
	});

	return block;
}

// (391:24) {#if preview_table && preview_table.length > 0}
function create_if_block_1(ctx) {
	let each_1_anchor;
	let each_value_1 = /*preview_table*/ ctx[3];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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
			if (dirty[0] & /*preview_table, isReview, userTab, gridClickPreview, adaKeyupGridClick, state*/ 619) {
				each_value_1 = /*preview_table*/ ctx[3];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
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
		source: "(391:24) {#if preview_table && preview_table.length > 0}",
		ctx
	});

	return block;
}

// (393:32) {#if i == data.rowno}
function create_if_block_2(ctx) {
	let td;
	let t;
	let td_id_value;
	let td_tabindex_value;
	let td_aria_label_value;
	let td_pevdata_id_value;
	let td_class_value;
	let mounted;
	let dispose;
	let if_block = /*isReview*/ ctx[0] && create_if_block_3(ctx);

	const block = {
		c: function create() {
			td = element("td");
			if (if_block) if_block.c();
			t = space();
			attr_dev(td, "id", td_id_value = /*data*/ ctx[40].id);
			attr_dev(td, "tabindex", td_tabindex_value = /*data*/ ctx[40].tabindex);
			attr_dev(td, "aria-label", td_aria_label_value = /*data*/ ctx[40].arialabel);
			attr_dev(td, "data-grid", "no");
			attr_dev(td, "pevdata-id", td_pevdata_id_value = /*data*/ ctx[40].pevdata);

			attr_dev(td, "class", td_class_value = `${/*isReview*/ ctx[0] && /*userTab*/ ctx[1] == false
			? ""
			: /*data*/ ctx[40].class} ${/*data*/ ctx[40].classDetails} ${/*isReview*/ ctx[0] && /*userTab*/ ctx[1] == false
			? /*data*/ ctx[40].spanclass == "icomoon-24px-correct"
				? "gridCorrect"
				: ""
			: /*data*/ ctx[40].correctAnswerColor} gridColor pointer border-dark text-center`);

			set_style(td, "width", /*data*/ ctx[40].width);
			set_style(td, "height", /*data*/ ctx[40].height);
			set_style(td, "pointerEvents", "pointerEvents");
			add_location(td, file, 393, 36, 14335);
		},
		m: function mount(target, anchor) {
			insert_dev(target, td, anchor);
			if (if_block) if_block.m(td, null);
			append_dev(td, t);

			if (!mounted) {
				dispose = [
					listen_dev(td, "click", /*gridClickPreview*/ ctx[6], false, false, false),
					listen_dev(td, "keyup", /*adaKeyupGridClick*/ ctx[9], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*isReview*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(td, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty[0] & /*preview_table*/ 8 && td_id_value !== (td_id_value = /*data*/ ctx[40].id)) {
				attr_dev(td, "id", td_id_value);
			}

			if (dirty[0] & /*preview_table*/ 8 && td_tabindex_value !== (td_tabindex_value = /*data*/ ctx[40].tabindex)) {
				attr_dev(td, "tabindex", td_tabindex_value);
			}

			if (dirty[0] & /*preview_table*/ 8 && td_aria_label_value !== (td_aria_label_value = /*data*/ ctx[40].arialabel)) {
				attr_dev(td, "aria-label", td_aria_label_value);
			}

			if (dirty[0] & /*preview_table*/ 8 && td_pevdata_id_value !== (td_pevdata_id_value = /*data*/ ctx[40].pevdata)) {
				attr_dev(td, "pevdata-id", td_pevdata_id_value);
			}

			if (dirty[0] & /*isReview, userTab, preview_table*/ 11 && td_class_value !== (td_class_value = `${/*isReview*/ ctx[0] && /*userTab*/ ctx[1] == false
			? ""
			: /*data*/ ctx[40].class} ${/*data*/ ctx[40].classDetails} ${/*isReview*/ ctx[0] && /*userTab*/ ctx[1] == false
			? /*data*/ ctx[40].spanclass == "icomoon-24px-correct"
				? "gridCorrect"
				: ""
			: /*data*/ ctx[40].correctAnswerColor} gridColor pointer border-dark text-center`)) {
				attr_dev(td, "class", td_class_value);
			}

			if (dirty[0] & /*preview_table*/ 8) {
				set_style(td, "width", /*data*/ ctx[40].width);
			}

			if (dirty[0] & /*preview_table*/ 8) {
				set_style(td, "height", /*data*/ ctx[40].height);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(td);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(393:32) {#if i == data.rowno}",
		ctx
	});

	return block;
}

// (405:40) {#if isReview}
function create_if_block_3(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*userTab*/ ctx[1] == true) return create_if_block_4;
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
		id: create_if_block_3.name,
		type: "if",
		source: "(405:40) {#if isReview}",
		ctx
	});

	return block;
}

// (410:44) {:else}
function create_else_block(ctx) {
	let span1;
	let span0;
	let span0_class_value;
	let span0_aria_label_value;

	const block = {
		c: function create() {
			span1 = element("span");
			span0 = element("span");
			attr_dev(span0, "class", span0_class_value = /*data*/ ctx[40].corrspanclass);
			attr_dev(span0, "aria-label", span0_aria_label_value = /*data*/ ctx[40].spanarialabel);
			set_style(span0, "color", /*data*/ ctx[40].corrspanstyle);
			add_location(span0, file, 411, 52, 15851);
			add_location(span1, file, 410, 48, 15792);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span1, anchor);
			append_dev(span1, span0);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*preview_table*/ 8 && span0_class_value !== (span0_class_value = /*data*/ ctx[40].corrspanclass)) {
				attr_dev(span0, "class", span0_class_value);
			}

			if (dirty[0] & /*preview_table*/ 8 && span0_aria_label_value !== (span0_aria_label_value = /*data*/ ctx[40].spanarialabel)) {
				attr_dev(span0, "aria-label", span0_aria_label_value);
			}

			if (dirty[0] & /*preview_table*/ 8) {
				set_style(span0, "color", /*data*/ ctx[40].corrspanstyle);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(410:44) {:else}",
		ctx
	});

	return block;
}

// (406:44) {#if userTab == true}
function create_if_block_4(ctx) {
	let span1;
	let span0;
	let span0_class_value;
	let span0_aria_label_value;
	let span1_class_value;

	const block = {
		c: function create() {
			span1 = element("span");
			span0 = element("span");
			attr_dev(span0, "class", span0_class_value = /*data*/ ctx[40].spanclass);
			attr_dev(span0, "aria-label", span0_aria_label_value = /*data*/ ctx[40].spanarialabel);
			set_style(span0, "color", /*data*/ ctx[40].spanstyle);
			add_location(span0, file, 407, 52, 15531);
			attr_dev(span1, "class", span1_class_value = /*state*/ ctx[5].iconVisible);
			set_style(span1, "display", /*data*/ ctx[40].spandisplay);
			add_location(span1, file, 406, 48, 15410);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span1, anchor);
			append_dev(span1, span0);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*preview_table*/ 8 && span0_class_value !== (span0_class_value = /*data*/ ctx[40].spanclass)) {
				attr_dev(span0, "class", span0_class_value);
			}

			if (dirty[0] & /*preview_table*/ 8 && span0_aria_label_value !== (span0_aria_label_value = /*data*/ ctx[40].spanarialabel)) {
				attr_dev(span0, "aria-label", span0_aria_label_value);
			}

			if (dirty[0] & /*preview_table*/ 8) {
				set_style(span0, "color", /*data*/ ctx[40].spanstyle);
			}

			if (dirty[0] & /*state*/ 32 && span1_class_value !== (span1_class_value = /*state*/ ctx[5].iconVisible)) {
				attr_dev(span1, "class", span1_class_value);
			}

			if (dirty[0] & /*preview_table*/ 8) {
				set_style(span1, "display", /*data*/ ctx[40].spandisplay);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(406:44) {#if userTab == true}",
		ctx
	});

	return block;
}

// (392:28) {#each preview_table as data}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[39] == /*data*/ ctx[40].rowno && create_if_block_2(ctx);

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
			if (/*i*/ ctx[39] == /*data*/ ctx[40].rowno) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(392:28) {#each preview_table as data}",
		ctx
	});

	return block;
}

// (389:16) {#each total_row_count as val, i}
function create_each_block(ctx) {
	let tr;
	let t;
	let if_block = /*preview_table*/ ctx[3] && /*preview_table*/ ctx[3].length > 0 && create_if_block_1(ctx);

	const block = {
		c: function create() {
			tr = element("tr");
			if (if_block) if_block.c();
			t = space();
			add_location(tr, file, 389, 20, 14110);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);
			if (if_block) if_block.m(tr, null);
			append_dev(tr, t);
		},
		p: function update(ctx, dirty) {
			if (/*preview_table*/ ctx[3] && /*preview_table*/ ctx[3].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(tr, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(tr);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(389:16) {#each total_row_count as val, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let itemhelper;
	let t0;
	let table;
	let tbody;
	let t1;
	let div0;
	let t2_value = language.you_were_req_to_select + "";
	let t2;
	let t3;
	let t4_value = /*state*/ ctx[5].correctCount + "";
	let t4;
	let t5;
	let t6_value = language.grid_mark_ans_correct + "";
	let t6;
	let current;

	itemhelper = new ItemHelper({
			props: {
				reviewMode: /*isReview*/ ctx[0],
				handleReviewClick: /*handleReviewMode*/ ctx[10]
			},
			$$inline: true
		});

	itemhelper.$on("setReview", /*setReview*/ ctx[8]);
	itemhelper.$on("unsetReview", /*unsetReview*/ ctx[7]);
	let if_block = /*total_row_count*/ ctx[4] && /*total_row_count*/ ctx[4].length > 0 && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			create_component(itemhelper.$$.fragment);
			t0 = space();
			table = element("table");
			tbody = element("tbody");
			if (if_block) if_block.c();
			t1 = space();
			div0 = element("div");
			t2 = text(t2_value);
			t3 = space();
			t4 = text(t4_value);
			t5 = space();
			t6 = text(t6_value);
			add_location(tbody, file, 386, 8, 13968);
			attr_dev(table, "id", "table");
			attr_dev(table, "class", "table-bordered shadingTable");
			set_style(table, "pointer-events", /*isReview*/ ctx[0] ? "none" : "");
			add_location(table, file, 385, 4, 13855);
			attr_dev(div0, "class", "h mt-5 text-center");
			attr_dev(div0, "id", "correctCountStatus");
			set_style(div0, "color", /*incorrectCls*/ ctx[2]);
			add_location(div0, file, 424, 4, 16364);
			attr_dev(div1, "class", "shadingPreview");
			add_location(div1, file, 378, 0, 13647);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			mount_component(itemhelper, div1, null);
			append_dev(div1, t0);
			append_dev(div1, table);
			append_dev(table, tbody);
			if (if_block) if_block.m(tbody, null);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, t2);
			append_dev(div0, t3);
			append_dev(div0, t4);
			append_dev(div0, t5);
			append_dev(div0, t6);
			current = true;
		},
		p: function update(ctx, dirty) {
			const itemhelper_changes = {};
			if (dirty[0] & /*isReview*/ 1) itemhelper_changes.reviewMode = /*isReview*/ ctx[0];
			itemhelper.$set(itemhelper_changes);

			if (/*total_row_count*/ ctx[4] && /*total_row_count*/ ctx[4].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(tbody, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (!current || dirty[0] & /*isReview*/ 1) {
				set_style(table, "pointer-events", /*isReview*/ ctx[0] ? "none" : "");
			}

			if ((!current || dirty[0] & /*state*/ 32) && t4_value !== (t4_value = /*state*/ ctx[5].correctCount + "")) set_data_dev(t4, t4_value);

			if (!current || dirty[0] & /*incorrectCls*/ 4) {
				set_style(div0, "color", /*incorrectCls*/ ctx[2]);
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
			if (detaching) detach_dev(div1);
			destroy_component(itemhelper);
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
	validate_slots("ShadingPreview", slots, []);
	let { xml } = $$props;
	let { uxml } = $$props;
	let { isReview } = $$props;
	let { showAns } = $$props;
	let { editorState } = $$props;
	let showSelectedAns = "";
	let ans = [];
	let ansCheck, userTab = true;
	let ansNotPerformed;
	let incorrectCls = "";
	let countRes = "";
	let sizeMultipleIndex = 40;
	let class_val = 1;

	let cellIndex,
		showAnsIndex,
		locked_cell_values,
		shaded_cell_values,
		preview_table,
		total_row_count;

	let state = {
		rowCount: 1,
		colCount: 4,
		gridWidth: 80,
		gridHeight: 80,
		correctAns: [],
		correctCount: "",
		userAns: [],
		shadedCell: [],
		cellLocked: false,
		hiddenCell: [],
		smController: "h",
		itemLayout: [],
		iconVisible: "h",
		pointerEvents: "auto",
		checkLockCell: "",
		lockedCellValue: ""
	}; //pointerEvents: ""

	onMount(() => {
		$$invalidate(5, state.xml = xml, state);
		resetValue();

		if (!uxml) {
			$$invalidate(5, state.userAns = [], state);
		}

		loadModule(xml);
	}); //for future use
	//let timer = setTimeout(function() {
	//AH.select("#special_module_user_xml").innerText = "<smans userAns='" + state.userAns.join() + "'></smans>";
	//new_uxml = "<smans userAns='" + state.userAns.join() + "'></smans>";

	// Set correct answer color
	function setCorrectAnswerColor(id) {
		// Return grid Color green for correct answer, red for incorrect answer and grey for not performed
		ansCheck = state.iconVisible == "" && state.userAns.includes(id)
		? getCorrect(id) ? " gridCorrect" : " gridIncorrect"
		: "";

		ansNotPerformed = state.iconVisible == "" && !state.userAns.includes(id)
		? getNotPerformed(id) ? " gridNotPerformed" : ""
		: "";

		ansCheck = ansCheck + ansNotPerformed;
		return ansCheck;
	}

	//to show shaded grid according to uxml
	function parseUserAns(uans) {
		let userAnswer = XMLToJSON(uans);
		$$invalidate(5, state.userAns = userAnswer.smans._userAns.split(","), state);

		if (userAnswer.smans._userAns) {
			let user_ans_cell = "#p" + userAnswer.smans._userAns.split(",").join(",#p");
			AH.selectAll(".shadingPreview .shadingTable td", "removeClass", "gridSelected");

			AH.selectAll(".shadingPreview .shadingTable td").forEach(function (table_td) {
				table_td.dataset.grid = "no";
			});

			AH.selectAll(user_ans_cell, "addClass", "gridSelected");

			AH.selectAll(user_ans_cell).forEach(function (table_td) {
				table_td.dataset.grid = "selected";
			});
		}
	}

	// loads the module according to the value of question xml and user xml
	function loadModule(loadXml) {
		loadXml = XMLToJSON(loadXml);
		parseXMLPreview(loadXml);
	}

	// updates the xml after parsing the xml and shows answer
	function parseXMLPreview(MYXML) {
		try {
			$$invalidate(5, state.rowCount = MYXML.smxml._rowCount, state);
			$$invalidate(5, state.colCount = MYXML.smxml._colCount, state);
			$$invalidate(5, state.gridWidth = parseInt(MYXML.smxml._cellWidth) * sizeMultipleIndex, state);
			$$invalidate(5, state.gridHeight = parseInt(MYXML.smxml._cellHeight) * sizeMultipleIndex, state);
			$$invalidate(5, state.correctAns = MYXML.smxml._correctAns.split(","), state);
			$$invalidate(5, state.correctCount = MYXML.smxml._correctCount, state);
			$$invalidate(5, state.cellLocked = MYXML.smxml._lockedCell, state);
			$$invalidate(5, state.hiddenCell = MYXML.smxml._hiddenCell, state);
			$$invalidate(5, state.shadedCell = MYXML.smxml._shadedCell, state);
			$$invalidate(5, state.lockedCellValue = MYXML.smxml._lockedCellValue, state);
			setDefaultValues();

			if (uxml) {
				parseUserAns(uxml);
			}
		} catch(error) {
			console.warn({
				"error": error.message,
				"function name": "parseXMLPreview",
				"File name": "ShadingPreview.js"
			});
		}
	}

	//reset the shaded grid and correct grid
	function resetValue() {
		$$invalidate(5, state.correctAns = [], state);
		$$invalidate(5, state.correctCount = [], state);
		$$invalidate(5, state.shadedCell = [], state);
	}

	//to check if the shaded grid is correct or not
	function getCorrect(id) {
		//Return true if this id is correct answer
		if (state.correctAns != 0) {
			if (state.correctAns.includes(id)) {
				return true;
			} else {
				return false;
			}
		} else {
			if (state.userAns.length == state.correctCount) {
				$$invalidate(2, incorrectCls = "#136d13");
				return true;
			} else {
				$$invalidate(2, incorrectCls = "#c30f0f");
				return false;
			}
		}
	}

	//to check if the correct ans grid is checked or not
	function getNotPerformed(id) {
		let result;

		if (state.correctAns != 0) {
			result = state.correctAns.includes(id) && !state.userAns.includes(id)
			? true
			: false;
		}

		return result;
	}

	// Set lock to author shaded cells
	function getClassDetail(cellIndex, locked_cell_values, shaded_cell_values) {
		let classDetail = "";

		if (locked_cell_values.indexOf(cellIndex) != -1) {
			classDetail += "lockedGrid ";
		}

		if (shaded_cell_values.indexOf(cellIndex) != -1 && class_val == 1) {
			classDetail += "gridSelected";
		}

		return classDetail;
	}

	//set default values after loading 
	function setDefaultValues() {
		let shadedCell = state.shadedCell != ""
		? "#p" + state.shadedCell.split(",").join(",#p")
		: "";

		AH.selectAll(".shadingPreview .shadingTable td", "removeClass", ["gridSelected", "lockedGrid"]);

		AH.selectAll(".shadingPreview .shadingTable td").forEach(function (table_td) {
			table_td.dataset.grid = "no";
		});

		if (shadedCell != "") {
			AH.selectAll(shadedCell, "addClass", "gridSelected");

			AH.selectAll(shadedCell).forEach(function (table_td) {
				table_td.dataset.grid = "selected";
			});
		}

		let lockedCell = state.lockedCellValue != undefined && state.lockedCellValue != ""
		? "#p" + state.lockedCellValue.split(",").join(",#p")
		: "";

		if (lockedCell != "") {
			AH.selectAll(lockedCell, "addClass", "lockedGrid");

			AH.selectAll(lockedCell).forEach(function (table_td) {
				table_td.dataset.grid = "selected";
			});
		}
	}

	//function to execute when the grid is clicked
	function gridClickPreview(e) {
		let targetId = e.target.id;
		class_val--;

		if (!AH.select(".shadingPreview [id='" + targetId + "']").classList.contains("lockedGrid")) {
			if (!AH.select(".shadingPreview [id='" + targetId + "']").classList.contains("gridSelected")) {
				AH.select(".shadingPreview [id='" + targetId + "']").setAttribute("data-grid", "selected");
				AH.selectAll(".shadingPreview [id='" + targetId + "']", "addClass", "gridSelected");
			} else {
				AH.select(".shadingPreview [id='" + targetId + "']").setAttribute("data-grid", "no");
				AH.selectAll(".shadingPreview [id='" + targetId + "']", "removeClass", "gridSelected");
			}
		}

		//state.userAns = userAns;
		let u_answer = checkAns();

		if (!editorState) {
			onUserAnsChange({ uXml: state.userxml, ans: u_answer });
		}
	}

	//to show correct and user answer 
	function showAnswer(val, iconState) {
		//show correct incorrect icon with respect to iconState
		if (iconState == "showIcon") {
			$$invalidate(5, state.iconVisible = "", state);
		} else {
			$$invalidate(5, state.iconVisible = "h", state);
		}

		//show correct answer and user answer
		if (val == "cans") {
			$$invalidate(16, ans = state.correctAns);
		} else if (val == "yans") {
			$$invalidate(16, ans = state.userAns);
		}
	}

	//to check answer
	function checkAns() {
		const correctLength = state.correctAns.length;
		let resultLength = 0;
		let resultCountLen = 0;
		let ans_val = "", ans_status = "";
		$$invalidate(5, state.userAns = [], state);

		AH.selectAll(".shadingPreview .shadingTable .gridSelected").forEach(function (value) {
			state.userAns.push(value.getAttribute("pevdata-id"));
		});

		AH.select("#special_module_user_xml").innerText = "<smans userAns='" + state.userAns.join() + "'></smans>";
		$$invalidate(5, state.userxml = "<smans userAns='" + state.userAns.join() + "'></smans>", state);

		if (state.correctAns != "") {
			state.correctAns.map(function (data, i) {
				state.userAns.map(function (data2, j) {
					if (data == data2) {
						resultLength = resultLength + 1;
					}
				});
			});

			//Check if total no. of user answer is equal to correct answer
			if (correctLength == resultLength && resultLength == state.userAns.length) {
				ans_val = language.correct;
			} else {
				ans_val = language.incorrect;
			}

			if (typeof calculatePoint != "undefined") {
				calculatePoint(state.correctAns.length, resultLength);
			}

			if (ans_val == "Incorrect") {
				ans_status = false;
			} else {
				ans_status = true;
			}

			if (editorState) {
				showAns(ans_val);
			}
		}

		if (state.correctCount != "" && state.correctAns == "") {
			if (state.userAns.length == state.correctCount) {
				countRes = language.correct;
				resultCountLen = state.correctCount;
			} else {
				countRes = language.incorrect;
			}

			if (typeof calculatePoint != "undefined") {
				calculatePoint(state.correctCount, resultCountLen);
			}

			if (editorState) {
				showAns(countRes);
			}
		}

		if (!editorState) {
			onUserAnsChange({ uXml: state.userxml, ans: ans_status });
		}

		return ans_status;
	}

	//if review mode is OFF
	function unsetReview() {
		showAnswer("yans", "hideIcon");
		$$invalidate(0, isReview = false);

		state.correctCount != "" && state.correctAns == ""
		? AH.selectAll("#correctCountStatus", "addClass", "h")
		: "";
	}

	//if review mode is ON
	function setReview() {
		showAnswer("yans", "showIcon");
		$$invalidate(0, isReview = true);
		checkAns();

		state.correctCount != "" && state.correctAns == ""
		? AH.selectAll("#correctCountStatus", "removeClass", "h")
		: "";
	}

	//ada
	function adaKeyupGridClick(e) {
		if (e.keyCode == 13) {
			gridClickPreview(e);
		}
	}

	//to switch correct ans and your ans tab
	function handleReviewMode(mode) {
		if (mode == "c") {
			$$invalidate(1, userTab = false);
		} else if (mode == "u") {
			$$invalidate(1, userTab = true);
		}
	}

	const writable_props = ["xml", "uxml", "isReview", "showAns", "editorState"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<ShadingPreview> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("xml" in $$props) $$invalidate(11, xml = $$props.xml);
		if ("uxml" in $$props) $$invalidate(12, uxml = $$props.uxml);
		if ("isReview" in $$props) $$invalidate(0, isReview = $$props.isReview);
		if ("showAns" in $$props) $$invalidate(13, showAns = $$props.showAns);
		if ("editorState" in $$props) $$invalidate(14, editorState = $$props.editorState);
	};

	$$self.$capture_state = () => ({
		onMount,
		afterUpdate,
		XMLToJSON,
		AH,
		onUserAnsChange,
		l: language,
		ItemHelper,
		xml,
		uxml,
		isReview,
		showAns,
		editorState,
		showSelectedAns,
		ans,
		ansCheck,
		userTab,
		ansNotPerformed,
		incorrectCls,
		countRes,
		sizeMultipleIndex,
		class_val,
		cellIndex,
		showAnsIndex,
		locked_cell_values,
		shaded_cell_values,
		preview_table,
		total_row_count,
		state,
		setCorrectAnswerColor,
		parseUserAns,
		loadModule,
		parseXMLPreview,
		resetValue,
		getCorrect,
		getNotPerformed,
		getClassDetail,
		setDefaultValues,
		gridClickPreview,
		showAnswer,
		checkAns,
		unsetReview,
		setReview,
		adaKeyupGridClick,
		handleReviewMode
	});

	$$self.$inject_state = $$props => {
		if ("xml" in $$props) $$invalidate(11, xml = $$props.xml);
		if ("uxml" in $$props) $$invalidate(12, uxml = $$props.uxml);
		if ("isReview" in $$props) $$invalidate(0, isReview = $$props.isReview);
		if ("showAns" in $$props) $$invalidate(13, showAns = $$props.showAns);
		if ("editorState" in $$props) $$invalidate(14, editorState = $$props.editorState);
		if ("showSelectedAns" in $$props) $$invalidate(15, showSelectedAns = $$props.showSelectedAns);
		if ("ans" in $$props) $$invalidate(16, ans = $$props.ans);
		if ("ansCheck" in $$props) ansCheck = $$props.ansCheck;
		if ("userTab" in $$props) $$invalidate(1, userTab = $$props.userTab);
		if ("ansNotPerformed" in $$props) ansNotPerformed = $$props.ansNotPerformed;
		if ("incorrectCls" in $$props) $$invalidate(2, incorrectCls = $$props.incorrectCls);
		if ("countRes" in $$props) countRes = $$props.countRes;
		if ("sizeMultipleIndex" in $$props) sizeMultipleIndex = $$props.sizeMultipleIndex;
		if ("class_val" in $$props) class_val = $$props.class_val;
		if ("cellIndex" in $$props) $$invalidate(21, cellIndex = $$props.cellIndex);
		if ("showAnsIndex" in $$props) $$invalidate(22, showAnsIndex = $$props.showAnsIndex);
		if ("locked_cell_values" in $$props) $$invalidate(23, locked_cell_values = $$props.locked_cell_values);
		if ("shaded_cell_values" in $$props) $$invalidate(24, shaded_cell_values = $$props.shaded_cell_values);
		if ("preview_table" in $$props) $$invalidate(3, preview_table = $$props.preview_table);
		if ("total_row_count" in $$props) $$invalidate(4, total_row_count = $$props.total_row_count);
		if ("state" in $$props) $$invalidate(5, state = $$props.state);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*isReview, xml, state, cellIndex, showAnsIndex, total_row_count, ans, preview_table, showSelectedAns, locked_cell_values, shaded_cell_values*/ 31557689) {
			//clearTimeout(timer);
			//}, 500);
			 {
				if (isReview) {
					setReview();
				} else {
					unsetReview();
				}

				if (xml != state.xml) {
					$$invalidate(5, state.xml = xml, state);
					loadModule(xml);
				}

				($$invalidate(4, total_row_count = []), $$invalidate(3, preview_table = []));

				$$invalidate(23, locked_cell_values = state.lockedCellValue != undefined && state.lockedCellValue != ""
				? state.lockedCellValue.split(",")
				: "");

				$$invalidate(24, shaded_cell_values = state.shadedCell != ""
				? state.shadedCell.split(",")
				: "");

				//to create grid
				for (let i = 0; i < state.rowCount; i++) {
					$$invalidate(4, total_row_count = [...total_row_count, { id: "gridRow_" + i }]);

					for (let j = 0; j < state.colCount; j++) {
						$$invalidate(21, cellIndex = i + "_" + j);

						if (ans != "") {
							$$invalidate(22, showAnsIndex = ans.indexOf(cellIndex));
							$$invalidate(15, showSelectedAns = showAnsIndex != -1 ? "gridSelected" : "");
						} else {
							$$invalidate(15, showSelectedAns = "");
						}

						$$invalidate(3, preview_table = [
							...preview_table,
							{
								id: "p" + cellIndex,
								tabindex: state.pointerEvents == "auto" ? "0" : "",
								arialabel: "Grids row " + (i + 1) + " and column " + (j + 1) + " is selected",
								pevdata: cellIndex,
								class: showSelectedAns,
								width: parseInt(state.gridWidth) + "px",
								height: parseInt(state.gridHeight) + "px",
								classDetails: getClassDetail(cellIndex, locked_cell_values, shaded_cell_values),
								correctAnswerColor: setCorrectAnswerColor(cellIndex),
								spanclass: getCorrect(cellIndex)
								? "icomoon-24px-correct"
								: "icomoon-24px-close",
								spanarialabel: getCorrect(cellIndex)
								? getNotPerformed(cellIndex)
									? "marked as unattempted"
									: "marked as correct"
								: "marked as incorrect",
								spanstyle: !state.userAns.includes(cellIndex)
								? getNotPerformed(cellIndex) ? "#222" : ""
								: getCorrect(cellIndex) ? "#136d13" : "#c30f0f",
								spandisplay: state.iconVisible == "" && state.userAns.includes(cellIndex) || state.iconVisible == "" && !state.userAns.includes(cellIndex) && getNotPerformed(cellIndex)
								? "block"
								: "none",
								rowno: i,
								corrspanclass: getCorrect(cellIndex) ? "icomoon-24px-correct" : "",
								corrspanstyle: getCorrect(cellIndex) ? "#136d13" : ""
							}
						]);
					}
				}
			}
		}
	};

	return [
		isReview,
		userTab,
		incorrectCls,
		preview_table,
		total_row_count,
		state,
		gridClickPreview,
		unsetReview,
		setReview,
		adaKeyupGridClick,
		handleReviewMode,
		xml,
		uxml,
		showAns,
		editorState
	];
}

class ShadingPreview extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				xml: 11,
				uxml: 12,
				isReview: 0,
				showAns: 13,
				editorState: 14
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ShadingPreview",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*xml*/ ctx[11] === undefined && !("xml" in props)) {
			console_1.warn("<ShadingPreview> was created without expected prop 'xml'");
		}

		if (/*uxml*/ ctx[12] === undefined && !("uxml" in props)) {
			console_1.warn("<ShadingPreview> was created without expected prop 'uxml'");
		}

		if (/*isReview*/ ctx[0] === undefined && !("isReview" in props)) {
			console_1.warn("<ShadingPreview> was created without expected prop 'isReview'");
		}

		if (/*showAns*/ ctx[13] === undefined && !("showAns" in props)) {
			console_1.warn("<ShadingPreview> was created without expected prop 'showAns'");
		}

		if (/*editorState*/ ctx[14] === undefined && !("editorState" in props)) {
			console_1.warn("<ShadingPreview> was created without expected prop 'editorState'");
		}
	}

	get xml() {
		throw new Error("<ShadingPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xml(value) {
		throw new Error("<ShadingPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get uxml() {
		throw new Error("<ShadingPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set uxml(value) {
		throw new Error("<ShadingPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isReview() {
		throw new Error("<ShadingPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isReview(value) {
		throw new Error("<ShadingPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showAns() {
		throw new Error("<ShadingPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showAns(value) {
		throw new Error("<ShadingPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get editorState() {
		throw new Error("<ShadingPreview>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set editorState(value) {
		throw new Error("<ShadingPreview>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default ShadingPreview;
//# sourceMappingURL=ShadingPreview-ae1c70b5.js.map
