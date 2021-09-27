
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, M as append_styles, W as Checkbox, P as Dialog, Q as binding_callbacks, R as bind, v as validate_slots, o as onMount, A as AH, X as XMLToJSON, y as l, V as Button, w as writable, e as element, f as space, c as create_component, j as attr_dev, k as add_location, l as set_style, n as insert_dev, p as append_dev, m as mount_component, q as listen_dev, Z as add_flush_callback, t as transition_in, a as transition_out, x as detach_dev, b as destroy_component, h as text, B as noop, z as empty, a7 as HtmlTag } from './main-a3b8c24d.js';

var icons_data = ["database-icon","table-icon","file-icon","user-group-icon","tools-icon","document-icon","key-icon","pencil-icon","circle-icon","square-icon"];

var icons_html = '<div class="table-responsive"><table class="table editor_table table-hover icons_table w-100"><thead><tr><th>Preview</th><th>Icon Name</th></tr></thead><tbody>';
for (var index = 0; index < icons_data.length; index ++) {
    icons_html += `<tr><td><span class="${icons_data[index]}"></span></td><td class="search">${icons_data[index]}</td></tr>`;
}
icons_html += '</tbody></table></div>';
var IconsList = icons_html;

/* clsSMTree\TreeViewAuthoring.svelte generated by Svelte v3.40.2 */
const file = "clsSMTree\\TreeViewAuthoring.svelte";

function add_css(target) {
	append_styles(target, "svelte-1j37dlv", ".btnColor{background-color:#dee2e6!important;box-shadow:2px 2px 5px #000}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZVZpZXdBdXRob3Jpbmcuc3ZlbHRlIiwibWFwcGluZ3MiOiJBQXlRUSxTQUFTLEFBQUUsQ0FBQyxBQUNoQixnQkFBZ0IsQ0FBRSxPQUFPLFVBQVUsQ0FDbkMsVUFBVSxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQUFDaEMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJUcmVlVmlld0F1dGhvcmluZy5zdmVsdGUiXX0= */");
}

// (221:28) <Checkbox id="sort" value="Sort Options" name="sort" title={"Sort Options"} checked = {((state.sort == true) ? true : false)} on:click={(_this)=>{sortFunc(_this)}}>
function create_default_slot_2(ctx) {
	let span;

	const block = {
		c: function create() {
			span = element("span");
			span.textContent = "Sort Options";
			add_location(span, file, 220, 192, 10284);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(221:28) <Checkbox id=\\\"sort\\\" value=\\\"Sort Options\\\" name=\\\"sort\\\" title={\\\"Sort Options\\\"} checked = {((state.sort == true) ? true : false)} on:click={(_this)=>{sortFunc(_this)}}>",
		ctx
	});

	return block;
}

// (252:16) {:else}
function create_else_block(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			div.textContent = `${l.loading_icons}`;
			attr_dev(div, "class", "alert alert-info my-2");
			add_location(div, file, 252, 20, 12179);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(252:16) {:else}",
		ctx
	});

	return block;
}

// (250:16) {#if icons_html}
function create_if_block(ctx) {
	let html_tag;
	let html_anchor;

	const block = {
		c: function create() {
			html_tag = new HtmlTag();
			html_anchor = empty();
			html_tag.a = html_anchor;
		},
		m: function mount(target, anchor) {
			html_tag.m(/*icons_html*/ ctx[1], target, anchor);
			insert_dev(target, html_anchor, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(250:16) {#if icons_html}",
		ctx
	});

	return block;
}

// (240:4) <Dialog class="remove_right_margin" width="400" bind:visible={state.openHelp} style="background: #fff; border-radius: 5px;">
function create_default_slot_1(ctx) {
	let h4;
	let div1;
	let div0;
	let t1;
	let div4;
	let input;
	let t2;
	let div2;
	let t4;
	let div3;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*icons_html*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			h4 = element("h4");
			div1 = element("div");
			div0 = element("div");
			div0.textContent = "Icon List";
			t1 = space();
			div4 = element("div");
			input = element("input");
			t2 = space();
			div2 = element("div");
			div2.textContent = `${l.no_icons}`;
			t4 = space();
			div3 = element("div");
			if_block.c();
			add_location(div0, file, 242, 16, 11606);
			attr_dev(div1, "class", "d-flex justify-content-between");
			add_location(div1, file, 241, 12, 11544);
			attr_dev(h4, "class", "mt-1 font21 mb-4");
			add_location(h4, file, 240, 8, 11501);
			attr_dev(input, "type", "text");
			attr_dev(input, "id", "tableSearch");
			attr_dev(input, "placeholder", "Search Icons");
			attr_dev(input, "class", "form-control");
			add_location(input, file, 246, 12, 11770);
			attr_dev(div2, "class", "alert alert-danger treeview_record my-2 h");
			add_location(div2, file, 247, 12, 11940);
			attr_dev(div3, "class", "treemodule_table");
			add_location(div3, file, 248, 12, 12027);
			attr_dev(div4, "class", "text-center");
			set_style(div4, "height", "400px");
			set_style(div4, "overflow-y", "auto");
			set_style(div4, "padding-right", "16px");
			add_location(div4, file, 245, 8, 11671);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h4, anchor);
			append_dev(h4, div1);
			append_dev(div1, div0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, input);
			append_dev(div4, t2);
			append_dev(div4, div2);
			append_dev(div4, t4);
			append_dev(div4, div3);
			if_block.m(div3, null);

			if (!mounted) {
				dispose = listen_dev(input, "keyup", /*keyup_handler*/ ctx[10], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if_block.p(ctx, dirty);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h4);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div4);
			if_block.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(240:4) <Dialog class=\\\"remove_right_margin\\\" width=\\\"400\\\" bind:visible={state.openHelp} style=\\\"background: #fff; border-radius: 5px;\\\">",
		ctx
	});

	return block;
}

// (258:12) <Button      on:click={handleClose}      class="btnColor"     >
function create_default_slot(ctx) {
	let t_value = l.close + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(258:12) <Button      on:click={handleClose}      class=\\\"btnColor\\\"     >",
		ctx
	});

	return block;
}

// (257:8) 
function create_footer_slot(ctx) {
	let div;
	let button;
	let current;

	button = new Button({
			props: {
				class: "btnColor",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*handleClose*/ ctx[3]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(button.$$.fragment);
			attr_dev(div, "slot", "footer");
			attr_dev(div, "class", "svelteFooter");
			add_location(div, file, 256, 8, 12306);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(button, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 524288) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(button);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_footer_slot.name,
		type: "slot",
		source: "(257:8) ",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main;
	let div18;
	let center;
	let div17;
	let div15;
	let div14;
	let div4;
	let div1;
	let div0;
	let label0;
	let t1;
	let input0;
	let t2;
	let div3;
	let div2;
	let label1;
	let t4;
	let input1;
	let t5;
	let div12;
	let div6;
	let div5;
	let label2;
	let t7;
	let input2;
	let t8;
	let div8;
	let div7;
	let label3;
	let t10;
	let input3;
	let t11;
	let div10;
	let div9;
	let label4;
	let t13;
	let input4;
	let t14;
	let div11;
	let button;
	let t16;
	let div13;
	let checkbox;
	let t17;
	let textarea0;
	let t18;
	let textarea1;
	let t19;
	let div16;
	let strong;
	let t21;
	let ol;
	let li0;
	let t23;
	let li1;
	let t25;
	let li2;
	let t27;
	let dialog;
	let updating_visible;
	let current;
	let mounted;
	let dispose;

	checkbox = new Checkbox({
			props: {
				id: "sort",
				value: "Sort Options",
				name: "sort",
				title: "Sort Options",
				checked: /*state*/ ctx[0].sort == true ? true : false,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	checkbox.$on("click", /*click_handler*/ ctx[9]);

	function dialog_visible_binding(value) {
		/*dialog_visible_binding*/ ctx[11](value);
	}

	let dialog_props = {
		class: "remove_right_margin",
		width: "400",
		style: "background: #fff; border-radius: 5px;",
		$$slots: {
			footer: [create_footer_slot],
			default: [create_default_slot_1]
		},
		$$scope: { ctx }
	};

	if (/*state*/ ctx[0].openHelp !== void 0) {
		dialog_props.visible = /*state*/ ctx[0].openHelp;
	}

	dialog = new Dialog({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, 'visible', dialog_visible_binding));

	const block = {
		c: function create() {
			main = element("main");
			div18 = element("div");
			center = element("center");
			div17 = element("div");
			div15 = element("div");
			div14 = element("div");
			div4 = element("div");
			div1 = element("div");
			div0 = element("div");
			label0 = element("label");
			label0.textContent = `${l.heading_correct}`;
			t1 = space();
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			div2 = element("div");
			label1 = element("label");
			label1.textContent = `${l.heading_all}`;
			t4 = space();
			input1 = element("input");
			t5 = space();
			div12 = element("div");
			div6 = element("div");
			div5 = element("div");
			label2 = element("label");
			label2.textContent = "# icon";
			t7 = space();
			input2 = element("input");
			t8 = space();
			div8 = element("div");
			div7 = element("div");
			label3 = element("label");
			label3.textContent = "## icon";
			t10 = space();
			input3 = element("input");
			t11 = space();
			div10 = element("div");
			div9 = element("div");
			label4 = element("label");
			label4.textContent = "### icon";
			t13 = space();
			input4 = element("input");
			t14 = space();
			div11 = element("div");
			button = element("button");
			button.textContent = "Icons List";
			t16 = space();
			div13 = element("div");
			create_component(checkbox.$$.fragment);
			t17 = space();
			textarea0 = element("textarea");
			t18 = space();
			textarea1 = element("textarea");
			t19 = space();
			div16 = element("div");
			strong = element("strong");
			strong.textContent = `${l.note_text}`;
			t21 = space();
			ol = element("ol");
			li0 = element("li");
			li0.textContent = `${l.select_icon}`;
			t23 = space();
			li1 = element("li");
			li1.textContent = `${l.heading_info}`;
			t25 = space();
			li2 = element("li");
			li2.textContent = `${l.key_info}`;
			t27 = space();
			create_component(dialog.$$.fragment);
			attr_dev(label0, "for", "headingcorrect");
			attr_dev(label0, "class", "text-dark");
			add_location(label0, file, 163, 36, 7050);
			attr_dev(div0, "class", "text-left");
			add_location(div0, file, 162, 32, 6989);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "id", "headingcorrect");
			attr_dev(input0, "defaultvalue", " ");
			attr_dev(input0, "class", "form-control");
			add_location(input0, file, 165, 32, 7197);
			attr_dev(div1, "class", "border-0 col-6 pr-1");
			add_location(div1, file, 161, 28, 6922);
			attr_dev(label1, "for", "headingall");
			attr_dev(label1, "class", "text-dark");
			add_location(label1, file, 174, 36, 7651);
			attr_dev(div2, "class", "text-left");
			add_location(div2, file, 173, 32, 7590);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "id", "headingall");
			attr_dev(input1, "defaultvalue", " ");
			attr_dev(input1, "class", "form-control");
			add_location(input1, file, 176, 32, 7790);
			attr_dev(div3, "class", "border-0 col-6 pl-1");
			add_location(div3, file, 172, 28, 7523);
			attr_dev(div4, "class", "row my-2");
			add_location(div4, file, 160, 24, 6870);
			attr_dev(label2, "for", "parent_icon");
			attr_dev(label2, "class", "text-dark");
			add_location(label2, file, 187, 36, 8320);
			attr_dev(div5, "class", "text-left");
			add_location(div5, file, 186, 32, 8259);
			attr_dev(input2, "type", "text");
			attr_dev(input2, "id", "parent_icon");
			attr_dev(input2, "class", "form-control");
			add_location(input2, file, 189, 32, 8451);
			attr_dev(div6, "class", "border-0 col-3 pr-1");
			add_location(div6, file, 185, 28, 8192);
			attr_dev(label3, "for", "subparent_icon");
			attr_dev(label3, "class", "text-dark");
			add_location(label3, file, 197, 36, 8848);
			attr_dev(div7, "class", "text-left");
			add_location(div7, file, 196, 32, 8787);
			attr_dev(input3, "type", "text");
			attr_dev(input3, "id", "subparent_icon");
			attr_dev(input3, "class", "form-control");
			add_location(input3, file, 199, 32, 8983);
			attr_dev(div8, "class", "border-0 col-3 pl-1");
			add_location(div8, file, 195, 28, 8720);
			attr_dev(label4, "for", "default_icon");
			attr_dev(label4, "class", "text-dark");
			add_location(label4, file, 207, 36, 9383);
			attr_dev(div9, "class", "text-left");
			add_location(div9, file, 206, 32, 9322);
			attr_dev(input4, "type", "text");
			attr_dev(input4, "id", "default_icon");
			attr_dev(input4, "class", "form-control");
			add_location(input4, file, 209, 32, 9517);
			attr_dev(div10, "class", "border-0 col-3 pl-1");
			add_location(div10, file, 205, 28, 9255);
			attr_dev(button, "class", "btn btn-outline-primary w-100");
			attr_dev(button, "id", "icons_info");
			add_location(button, file, 216, 28, 9868);
			attr_dev(div11, "class", "border-0 col-3 pl-1");
			set_style(div11, "top", "28px");
			add_location(div11, file, 215, 28, 9787);
			attr_dev(div12, "class", "row mt-2");
			add_location(div12, file, 184, 24, 8140);
			attr_dev(div13, "class", "text-left");
			add_location(div13, file, 219, 24, 10067);
			attr_dev(textarea0, "id", "tree");
			attr_dev(textarea0, "wrap", "off");
			attr_dev(textarea0, "class", "sm_input_textarea mb-0 resize_none");
			set_style(textarea0, "height", "150px");
			add_location(textarea0, file, 222, 24, 10378);
			attr_dev(textarea1, "id", "options");
			attr_dev(textarea1, "wrap", "off");
			set_style(textarea1, "height", "100px");
			attr_dev(textarea1, "class", "sm_input_textarea mt-2 resize_none mb-0");
			attr_dev(textarea1, "placeholder", "Key|Option text|Icon (Put comma after each line)");
			add_location(textarea1, file, 223, 24, 10511);
			add_location(div14, file, 159, 20, 6839);
			attr_dev(div15, "class", "border-0");
			set_style(div15, "width", "95%");
			add_location(div15, file, 158, 16, 6775);
			attr_dev(strong, "class", "ml-lg-3");
			add_location(strong, file, 227, 20, 10828);
			add_location(li0, file, 229, 24, 10926);
			add_location(li1, file, 230, 24, 10976);
			add_location(li2, file, 231, 24, 11027);
			add_location(ol, file, 228, 20, 10896);
			attr_dev(div16, "class", "font13 mx-3 text-left text-danger");
			add_location(div16, file, 226, 16, 10759);
			attr_dev(div17, "id", "main");
			attr_dev(div17, "class", "py-3 min_height_20 width98");
			add_location(div17, file, 157, 12, 6707);
			add_location(center, file, 156, 8, 6685);
			attr_dev(div18, "id", "authoringArea");
			attr_dev(div18, "class", "border");
			add_location(div18, file, 155, 4, 6636);
			add_location(main, file, 154, 0, 6624);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div18);
			append_dev(div18, center);
			append_dev(center, div17);
			append_dev(div17, div15);
			append_dev(div15, div14);
			append_dev(div14, div4);
			append_dev(div4, div1);
			append_dev(div1, div0);
			append_dev(div0, label0);
			append_dev(div1, t1);
			append_dev(div1, input0);
			append_dev(div4, t2);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, label1);
			append_dev(div3, t4);
			append_dev(div3, input1);
			append_dev(div14, t5);
			append_dev(div14, div12);
			append_dev(div12, div6);
			append_dev(div6, div5);
			append_dev(div5, label2);
			append_dev(div6, t7);
			append_dev(div6, input2);
			append_dev(div12, t8);
			append_dev(div12, div8);
			append_dev(div8, div7);
			append_dev(div7, label3);
			append_dev(div8, t10);
			append_dev(div8, input3);
			append_dev(div12, t11);
			append_dev(div12, div10);
			append_dev(div10, div9);
			append_dev(div9, label4);
			append_dev(div10, t13);
			append_dev(div10, input4);
			append_dev(div12, t14);
			append_dev(div12, div11);
			append_dev(div11, button);
			append_dev(div14, t16);
			append_dev(div14, div13);
			mount_component(checkbox, div13, null);
			append_dev(div14, t17);
			append_dev(div14, textarea0);
			append_dev(div14, t18);
			append_dev(div14, textarea1);
			append_dev(div17, t19);
			append_dev(div17, div16);
			append_dev(div16, strong);
			append_dev(div16, t21);
			append_dev(div16, ol);
			append_dev(ol, li0);
			append_dev(ol, t23);
			append_dev(ol, li1);
			append_dev(ol, t25);
			append_dev(ol, li2);
			append_dev(main, t27);
			mount_component(dialog, main, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handleDialog*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const checkbox_changes = {};
			if (dirty & /*state*/ 1) checkbox_changes.checked = /*state*/ ctx[0].sort == true ? true : false;

			if (dirty & /*$$scope*/ 524288) {
				checkbox_changes.$$scope = { dirty, ctx };
			}

			checkbox.$set(checkbox_changes);
			const dialog_changes = {};

			if (dirty & /*$$scope*/ 524288) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_visible && dirty & /*state*/ 1) {
				updating_visible = true;
				dialog_changes.visible = /*state*/ ctx[0].openHelp;
				add_flush_callback(() => updating_visible = false);
			}

			dialog.$set(dialog_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			transition_in(dialog.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			transition_out(dialog.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(checkbox);
			destroy_component(dialog);
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

const note1 = "Here # is the parent (root) element of tree and it will not be drag, ## are child of parent element and it will also not be drag, ### are the child of parent element’s childs and it can be drag and drop.";
const note2 = "Key|Option text|Icon (Put comma after each line) Where  option text is the label for option of contextmenu list and icon is icon for that label and key is numeric value that helps to create the list option.";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('TreeViewAuthoring', slots, []);
	let { xml } = $$props;
	let { getChildXml } = $$props;
	let { visible = false } = $$props;
	let sort = 0;
	let allowSort = 1;
	let icons_html = IconsList;
	let state = {};
	let sortVar = 0;

	const hdd = writable({
		xml: '',
		sort: false,
		allowSort: 1,
		openHelp: false
	});

	const unsubscribe = hdd.subscribe(items => {
		$$invalidate(0, state = items);
	});

	onMount(() => {
		$$invalidate(0, state.xml = xml, state);
		parseXml(xml);

		AH.bind('#main', 'keyup', () => {
			var auth_timer2 = setTimeout(
				(function () {
					updateXmlValue();
					clearTimeout(auth_timer2);
				}).bind(this),
				500
			);
		});

		AH.bind('#main', 'click', () => {
			updateXmlValue();
		});

		AH.listen(document, 'click', '#xmlDone', () => {
			window.xml_button_clicked = true;
		});
	});

	function parseXml(xml) {
		var newXml = XMLToJSON(xml);

		var seq = newXml.smxml.tree
		? newXml.smxml.tree
		: newXml.smxml.list;

		if (seq) {
			seq._options
			? AH.select('#options').value = seq._options
			: '';

			AH.select('#tree').value = seq.__cdata.replace(/\t/gmi, '');

			seq._allowSort != "0"
			? $$invalidate(0, state.allowSort = true, state)
			: seq._allowsort != "0"
				? $$invalidate(0, state.allowsort = true, state)
				: '';

			seq._headingCorrect
			? AH.select('#headingcorrect').value = seq._headingCorrect
			: seq._headingcorrect
				? AH.select('#headingcorrect').value = seq._headingcorrect
				: '';

			seq._headingAll
			? AH.select('#headingall').value = seq._headingAll
			: seq._headingall
				? AH.select('#headingall').value = seq._headingall
				: '';

			seq._sort == 1
			? $$invalidate(0, state.sort = true, state)
			: $$invalidate(0, state.sort = false, state);

			let icons = ["database-icon", "table-icon", "file-icon"];

			if (seq.icons) {
				let new_icons = seq.icons.split(',');
				icons = new_icons.length == 3 ? new_icons : icons;
			}

			AH.select('#parent_icon').value = icons[0];
			AH.select('#subparent_icon').value = icons[1];
			AH.select('#default_icon').value = icons[2];
		}

		updateXmlValue();
	}

	function updateXmlValue() {
		let xmlDom = AH.parseHtml(state.xml);
		let elem = AH.findChild(xmlDom, 'tree');
		if (sortVar == 0) sort = state.sort ? 1 : 0;

		if (!elem) {
			elem = AH.findChild(xmlDom, 'list');
		}

		if (AH.select("#headingcorrect").value == "" || AH.select("#headingall").value == "") {
			AH.showmsg("Heading should not be blank!");
		}

		let parent_icon = AH.select('#parent_icon').value;
		let subparent_icon = AH.select('#subparent_icon').value;
		let default_icon = AH.select('#default_icon').value;
		let icons = "database-icon,table-icon,file-icon";

		if (parent_icon.trim() != '' && subparent_icon.trim() != '' && default_icon.trim() != '') {
			icons = parent_icon + ',' + subparent_icon + ',' + default_icon;
		} else {
			AI && AI.showmsg(l.icon_not_blank);
		}

		if (elem) {
			AH.setAttr(elem, {
				"headingCorrect": AH.select("#headingcorrect").value,
				"headingAll": AH.select("#headingall").value,
				"options": AH.select("#options").value.trim().replace(/\\n{2,}/g, "\\n").replace(/\\n/g, ","),
				sort,
				allowSort,
				icons
			});

			elem.innerHTML = "<![CDATA[\n" + AH.select("#tree").value + "\n]]>";
		}

		$$invalidate(
			0,
			state.xml = formatXml(xmlDom.xml
			? xmlDom.xml
			: new XMLSerializer().serializeToString(xmlDom)),
			state
		);

		getChildXml(formatXml(xmlDom.xml
		? xmlDom.xml
		: new XMLSerializer().serializeToString(xmlDom)));
	}

	function handleDialog() {
		$$invalidate(0, state.openHelp = true, state);
		$$invalidate(6, visible = true);
	}

	// used to close the configuration dialog box
	function handleClose() {
		$$invalidate(6, visible = false);
		$$invalidate(0, state.openHelp = false, state);
	}

	// for searching in the table
	function searchTable(inputVal, class_name) {
		var table = AH.select(class_name);
		AH.toggleDom(table, 'show');

		if (inputVal.trim() == '') {
			AH.selectAll('.treeview_record', 'hide');
			AH.selectAll(class_name + ' tr', 'show');
		} else {
			if (table.nodeName != undefined) {
				AH.find(table, 'tr', 'all').forEach((row, index) => {
					var allCells = AH.find(row, '.search', 'all');

					if (allCells.length > 0) {
						var found = false;

						allCells.forEach((td, index) => {
							var regExp = new RegExp(inputVal, 'i');

							if (regExp.test(td.textContent)) {
								found = true;
								return false;
							}
						});

						found == true
						? AH.select(row, 'css', { display: '' })
						: AH.select(row, 'css', { display: 'none' });
					}
				});

				if (AH.find(table, '.search', 'visible').length > 0) {
					AH.selectAll('.treeview_record', 'hide');
					AH.toggleDom(table, 'show');
				} else {
					AH.toggleDom('.treeview_record', 'show');
					AH.toggleDom(table, 'hide');
				}
			}
		}
	}

	function sortFunc(_this) {
		sortVar = 1;
		$$invalidate(0, state.sort = _this.currentTarget.checked, state);
		sort = state.sort ? 1 : 0;
	}

	const writable_props = ['xml', 'getChildXml', 'visible'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<TreeViewAuthoring> was created with unknown prop '${key}'`);
	});

	const click_handler = _this => {
		sortFunc(_this);
	};

	const keyup_handler = event => {
		searchTable(event.target.value, '.icons_table');
	};

	function dialog_visible_binding(value) {
		if ($$self.$$.not_equal(state.openHelp, value)) {
			state.openHelp = value;
			$$invalidate(0, state);
		}
	}

	$$self.$$set = $$props => {
		if ('xml' in $$props) $$invalidate(7, xml = $$props.xml);
		if ('getChildXml' in $$props) $$invalidate(8, getChildXml = $$props.getChildXml);
		if ('visible' in $$props) $$invalidate(6, visible = $$props.visible);
	};

	$$self.$capture_state = () => ({
		onMount,
		AH,
		XMLToJSON,
		Checkbox,
		Dialog,
		Button,
		l,
		IconsList,
		writable,
		xml,
		getChildXml,
		visible,
		note1,
		note2,
		sort,
		allowSort,
		icons_html,
		state,
		sortVar,
		hdd,
		unsubscribe,
		parseXml,
		updateXmlValue,
		handleDialog,
		handleClose,
		searchTable,
		sortFunc
	});

	$$self.$inject_state = $$props => {
		if ('xml' in $$props) $$invalidate(7, xml = $$props.xml);
		if ('getChildXml' in $$props) $$invalidate(8, getChildXml = $$props.getChildXml);
		if ('visible' in $$props) $$invalidate(6, visible = $$props.visible);
		if ('sort' in $$props) sort = $$props.sort;
		if ('allowSort' in $$props) allowSort = $$props.allowSort;
		if ('icons_html' in $$props) $$invalidate(1, icons_html = $$props.icons_html);
		if ('state' in $$props) $$invalidate(0, state = $$props.state);
		if ('sortVar' in $$props) sortVar = $$props.sortVar;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		state,
		icons_html,
		handleDialog,
		handleClose,
		searchTable,
		sortFunc,
		visible,
		xml,
		getChildXml,
		click_handler,
		keyup_handler,
		dialog_visible_binding
	];
}

class TreeViewAuthoring extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { xml: 7, getChildXml: 8, visible: 6 }, add_css);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TreeViewAuthoring",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*xml*/ ctx[7] === undefined && !('xml' in props)) {
			console.warn("<TreeViewAuthoring> was created without expected prop 'xml'");
		}

		if (/*getChildXml*/ ctx[8] === undefined && !('getChildXml' in props)) {
			console.warn("<TreeViewAuthoring> was created without expected prop 'getChildXml'");
		}
	}

	get xml() {
		throw new Error("<TreeViewAuthoring>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xml(value) {
		throw new Error("<TreeViewAuthoring>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getChildXml() {
		throw new Error("<TreeViewAuthoring>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getChildXml(value) {
		throw new Error("<TreeViewAuthoring>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get visible() {
		throw new Error("<TreeViewAuthoring>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set visible(value) {
		throw new Error("<TreeViewAuthoring>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default TreeViewAuthoring;
//# sourceMappingURL=TreeViewAuthoring-8bb9e321.js.map
