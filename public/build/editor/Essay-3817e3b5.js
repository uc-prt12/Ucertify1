
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, M as append_styles, W as Checkbox, Q as binding_callbacks, R as bind, v as validate_slots, o as onMount, A as AH, X as XMLToJSON, L as beforeUpdate, e as element, h as text, f as space, j as attr_dev, k as add_location, n as insert_dev, p as append_dev, q as listen_dev, F as set_data_dev, G as prop_dev, x as detach_dev, H as run_all, c as create_component, m as mount_component, Z as add_flush_callback, t as transition_in, a as transition_out, b as destroy_component } from './main-372b8c3b.js';
import { s as sunEditor, p as plugins } from './index-c28385de.js';

/* clsSMEssay\Essay.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "clsSMEssay\\Essay.svelte";

function add_css(target) {
	append_styles(target, "svelte-11lmiqu", ".hero-unit.svelte-11lmiqu.svelte-11lmiqu{border:1px solid #ccc;width:84%;padding:18px!important;font-size:15px!important;margin-bottom:30px;font-weight:200;line-height:30px;color:inherit;background-color:#eeeeee;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}#essay_editorAuth.svelte-11lmiqu.svelte-11lmiqu{max-height:250px;height:250px;background-color:white;border-collapse:separate;border:1px solid rgb(204, 204, 204);padding:4px;box-sizing:content-box;-webkit-box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px;overflow:scroll;outline:none}.essay-container .upload-area.svelte-11lmiqu #files_number.svelte-11lmiqu{width:115px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNzYXkuc3ZlbHRlIiwibWFwcGluZ3MiOiJBQTZNSSxVQUFVLDhCQUFDLENBQUMsQUFDUixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3RCLEtBQUssQ0FBRSxHQUFHLENBQ1YsT0FBTyxDQUFFLElBQUksVUFBVSxDQUN2QixTQUFTLENBQUUsSUFBSSxVQUFVLENBQ3pCLGFBQWEsQ0FBRSxJQUFJLENBQ25CLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLEtBQUssQ0FBRSxPQUFPLENBQ2QsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixxQkFBcUIsQ0FBRSxHQUFHLENBQzFCLGtCQUFrQixDQUFFLEdBQUcsQ0FDdkIsYUFBYSxDQUFFLEdBQUcsQUFDdEIsQ0FBQyxBQUNELGlCQUFpQiw4QkFBQyxDQUFDLEFBQ2YsVUFBVSxDQUFFLEtBQUssQ0FDakIsTUFBTSxDQUFFLEtBQUssQ0FDYixnQkFBZ0IsQ0FBRSxLQUFLLENBQ3ZCLGVBQWUsQ0FBRSxRQUFRLENBQ3pCLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3BDLE9BQU8sQ0FBRSxHQUFHLENBQ1osVUFBVSxDQUFFLFdBQVcsQ0FDdkIsa0JBQWtCLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNsRSxVQUFVLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUMxRCx1QkFBdUIsQ0FBRSxHQUFHLENBQzVCLDBCQUEwQixDQUFFLEdBQUcsQ0FDL0IseUJBQXlCLENBQUUsR0FBRyxDQUM5QixzQkFBc0IsQ0FBRSxHQUFHLENBQzNCLFFBQVEsQ0FBRSxNQUFNLENBQ2hCLE9BQU8sQ0FBRSxJQUFJLEFBQ2pCLENBQUMsQUE4Q0QsZ0JBQWdCLENBQUMsMkJBQVksQ0FBQyxhQUFhLGVBQUMsQ0FBQyxBQUN6QyxLQUFLLENBQUUsS0FBSyxBQUNoQixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkVzc2F5LnN2ZWx0ZSJdfQ== */");
}

// (155:8) <Checkbox                bind:checked={isUpload}              on:click={updateXML}              id="uploadChk"              name="uploadChk"              color="primary"          >
function create_default_slot(ctx) {
	let span;

	const block = {
		c: function create() {
			span = element("span");
			span.textContent = "Upload";
			add_location(span, file, 161, 12, 6384);
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
		id: create_default_slot.name,
		type: "slot",
		source: "(155:8) <Checkbox                bind:checked={isUpload}              on:click={updateXML}              id=\\\"uploadChk\\\"              name=\\\"uploadChk\\\"              color=\\\"primary\\\"          >",
		ctx
	});

	return block;
}

// (164:8) {#if isUpload}
function create_if_block(ctx) {
	let div6;
	let div2;
	let div0;
	let label0;
	let t0_value = /*l*/ ctx[0].file_extension_text + "";
	let t0;
	let t1;
	let div1;
	let select;
	let option0;
	let option1;
	let option2;
	let option3;
	let option4;
	let option5;
	let t8;
	let div5;
	let div3;
	let label1;
	let t9_value = /*l*/ ctx[0].number_of_files + "";
	let t9;
	let t10;
	let div4;
	let input;
	let input_value_value;
	let t11;
	let small;
	let t12_value = /*l*/ ctx[0].you_can_upload + "";
	let t12;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div6 = element("div");
			div2 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			select = element("select");
			option0 = element("option");
			option0.textContent = "All(*.*)";
			option1 = element("option");
			option1.textContent = "*.txt";
			option2 = element("option");
			option2.textContent = "*.pdf";
			option3 = element("option");
			option3.textContent = "*.doc,*.docx";
			option4 = element("option");
			option4.textContent = "*.doc,*.docx,*.pdf";
			option5 = element("option");
			option5.textContent = "*.jpg,*.png,*.gif,*.bmp,*.jpeg";
			t8 = space();
			div5 = element("div");
			div3 = element("div");
			label1 = element("label");
			t9 = text(t9_value);
			t10 = space();
			div4 = element("div");
			input = element("input");
			t11 = space();
			small = element("small");
			t12 = text(t12_value);
			attr_dev(label0, "for", "choose_ext");
			attr_dev(label0, "class", "mb-0 pt-sm1 font14");
			add_location(label0, file, 167, 24, 6607);
			attr_dev(div0, "class", "col-sm-3");
			add_location(div0, file, 166, 20, 6559);
			option0.__value = "*.txt,*.doc,*.docx,*.pdf,*.jpg,*.png,*.gif,*.bmp,*.jpeg";
			option0.value = option0.__value;
			option0.selected = "selected";
			add_location(option0, file, 171, 28, 6929);
			option1.__value = "*.txt";
			option1.value = option1.__value;
			add_location(option1, file, 172, 28, 7068);
			option2.__value = "*.pdf";
			option2.value = option2.__value;
			add_location(option2, file, 173, 28, 7134);
			option3.__value = "*.doc,*.docx";
			option3.value = option3.__value;
			add_location(option3, file, 174, 28, 7200);
			option4.__value = "*.doc,*.docx,*.pdf";
			option4.value = option4.__value;
			add_location(option4, file, 175, 28, 7280);
			option5.__value = "*.jpg,*.png,*.gif,*.bmp,*.jpeg";
			option5.value = option5.__value;
			add_location(option5, file, 176, 28, 7372);
			attr_dev(select, "name", "choose_ext");
			attr_dev(select, "id", "choose_ext");
			attr_dev(select, "class", "form-control form-control-md");
			add_location(select, file, 170, 24, 6788);
			attr_dev(div1, "class", "col-sm-8");
			add_location(div1, file, 169, 20, 6740);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 165, 16, 6520);
			attr_dev(label1, "for", "files_number");
			attr_dev(label1, "class", "mb-0 font14 pt-1");
			add_location(label1, file, 182, 24, 7655);
			attr_dev(div3, "class", "col-sm-3");
			add_location(div3, file, 181, 20, 7607);
			attr_dev(input, "type", "number");
			attr_dev(input, "class", "form-control form-control-md float-left filenumber svelte-11lmiqu");
			attr_dev(input, "name", "files_number");
			attr_dev(input, "id", "files_number");
			input.value = input_value_value = /*state*/ ctx[2].files_number;
			attr_dev(input, "step", "1");
			attr_dev(input, "min", "1");
			attr_dev(input, "max", "10");
			input.required = "required";
			add_location(input, file, 185, 24, 7832);
			attr_dev(small, "class", "font11");
			add_location(small, file, 197, 24, 8417);
			attr_dev(div4, "class", "col-sm-8");
			add_location(div4, file, 184, 20, 7784);
			attr_dev(div5, "class", "row mt-2");
			add_location(div5, file, 180, 16, 7563);
			attr_dev(div6, "class", "upload-area mt-3 text-left svelte-11lmiqu");
			add_location(div6, file, 164, 12, 6462);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div2);
			append_dev(div2, div0);
			append_dev(div0, label0);
			append_dev(label0, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, select);
			append_dev(select, option0);
			append_dev(select, option1);
			append_dev(select, option2);
			append_dev(select, option3);
			append_dev(select, option4);
			append_dev(select, option5);
			append_dev(div6, t8);
			append_dev(div6, div5);
			append_dev(div5, div3);
			append_dev(div3, label1);
			append_dev(label1, t9);
			append_dev(div5, t10);
			append_dev(div5, div4);
			append_dev(div4, input);
			append_dev(div4, t11);
			append_dev(div4, small);
			append_dev(small, t12);

			if (!mounted) {
				dispose = [
					listen_dev(select, "blur", /*blur_handler*/ ctx[8], false, false, false),
					listen_dev(input, "change", /*maxLengthCheck*/ ctx[3].bind(this, 2), false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*l*/ 1 && t0_value !== (t0_value = /*l*/ ctx[0].file_extension_text + "")) set_data_dev(t0, t0_value);
			if (dirty & /*l*/ 1 && t9_value !== (t9_value = /*l*/ ctx[0].number_of_files + "")) set_data_dev(t9, t9_value);

			if (dirty & /*state*/ 4 && input_value_value !== (input_value_value = /*state*/ ctx[2].files_number)) {
				prop_dev(input, "value", input_value_value);
			}

			if (dirty & /*l*/ 1 && t12_value !== (t12_value = /*l*/ ctx[0].you_can_upload + "")) set_data_dev(t12, t12_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(164:8) {#if isUpload}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let main;
	let div1;
	let div0;
	let t0;
	let textarea;
	let t1;
	let checkbox;
	let updating_checked;
	let t2;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[7](value);
	}

	let checkbox_props = {
		id: "uploadChk",
		name: "uploadChk",
		color: "primary",
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	if (/*isUpload*/ ctx[1] !== void 0) {
		checkbox_props.checked = /*isUpload*/ ctx[1];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, 'checked', checkbox_checked_binding));
	checkbox.$on("click", /*updateXML*/ ctx[4]);
	let if_block = /*isUpload*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			main = element("main");
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			textarea = element("textarea");
			t1 = space();
			create_component(checkbox.$$.fragment);
			t2 = space();
			if (if_block) if_block.c();
			attr_dev(div0, "id", "essayToolbar");
			attr_dev(div0, "class", "sun-editor");
			add_location(div0, file, 152, 8, 6034);
			attr_dev(textarea, "id", "essay_editorAuth");
			attr_dev(textarea, "class", "text-left editor sun-editor-editable svelte-11lmiqu");
			add_location(textarea, file, 153, 8, 6092);
			attr_dev(div1, "class", "hero-unit svelte-11lmiqu");
			add_location(div1, file, 151, 4, 6001);
			attr_dev(main, "id", "SM_essay");
			add_location(main, file, 150, 0, 5975);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div1);
			append_dev(div1, div0);
			append_dev(div1, t0);
			append_dev(div1, textarea);
			append_dev(div1, t1);
			mount_component(checkbox, div1, null);
			append_dev(div1, t2);
			if (if_block) if_block.m(div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const checkbox_changes = {};

			if (dirty & /*$$scope*/ 32768) {
				checkbox_changes.$$scope = { dirty, ctx };
			}

			if (!updating_checked && dirty & /*isUpload*/ 2) {
				updating_checked = true;
				checkbox_changes.checked = /*isUpload*/ ctx[1];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);

			if (/*isUpload*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
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
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(checkbox);
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
	validate_slots('Essay', slots, []);
	let { xml } = $$props;
	let { getChildXml } = $$props;
	let { l } = $$props;
	let isUpload = false;
	let author_xml;

	const headingArray = [
		{
			"font": "fontSize 6",
			"text": "Heading 1"
		},
		{
			"font": "fontSize 5",
			"text": "Heading 2"
		},
		{
			"font": "fontSize 4",
			"text": "Heading 3"
		},
		{
			"font": "fontSize 3",
			"text": "Heading 4"
		},
		{
			"font": "fontSize 2",
			"text": "Heading 5"
		},
		{
			"font": "fontSize 1",
			"text": "Heading 6"
		}
	];

	let essayAuthEditor;
	let timer = null;
	let state = { files_number: 1, cdata: true };

	onMount(() => {
		initEdit();
		let listenrTarget = AH.find('#SM_essay', 'a,button,input,select');

		AH.listenAll(listenrTarget, "blur", e => {
			console.log(e.target);
			updateXML(500);
		});

		// AH.listenAll(listenrTarget, "keyup", ()=> { updateXML(500); });
		// AH.listenAll(listenrTarget, "keydown", ()=> { updateXML(500); });
		AH.bind("#files_number", 'keydown', e => {
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				AH.select("#err_txt").innerHTML = "Digits Only";
				AH.selectAll("#err_txt", 'show');
				return false;
			}
		});

		// if ((navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/")) > -1) {
		//     jQuery('#uploadChk').keyup(function(e) { if (e.keyCode == 32) this.click() });
		// }
		let parsedXmlNode = AH.parseHtml(xml);

		if (AH.find(parsedXmlNode, 'default') && AH.find(parsedXmlNode, 'default').getAttribute('type') == 1) {
			AH.selectAll('.upload-area', 'removeClass', 'h');
			AH.select('#uploadChk').checked = true;
			console.log(AH.find(parsedXmlNode, 'default').getAttribute('fileTypeExts'));
			AH.select(`#choose_ext option[value="${AH.find(parsedXmlNode, 'default').getAttribute('fileTypeExts')}"]`, 'attr', { selected: 'selected' });
			AH.select('#files_number').value = AH.find(parsedXmlNode, 'default').getAttribute('limit');
		}

		//updateXML();
		parseXml(xml);
	});

	function initEdit() {
		essayAuthEditor = sunEditor.create('essay_editorAuth', {
			width: 'auto',
			toolbarContainer: "#essayToolbar",
			placeholder: "Write text here.",
			plugins,
			resizingBar: false,
			showPathLabel: false,
			buttonList: [
				['formatBlock'],
				['bold', 'italic', 'underline'],
				['link'],
				['list', 'outdent', 'indent', 'align'],
				['removeFormat']
			]
		});

		essayAuthEditor.onChange = (content, core) => {
			updateXML(1000, content);
		};

		essayAuthEditor.onKeyDown = (e, core) => {
			if (e.keyCode == 86 || e.keyCode == 67) {
				updateXML(1000);
			}
		};
	}

	// // it detects any change in xml.
	// beforeUpdate(()=> {
	//     if (xml != author_xml) {
	//         author_xml = xml;
	//         parseXml(xml);
	//     }
	// });
	// if xml change the it updates cdata
	function parseXml(xml) {
		if (state.cdata) {
			$$invalidate(2, state.cdata = false, state);
			let qxml = XMLToJSON(xml);

			if (AI.isValid(qxml) && AI.isValid(qxml.smxml.default)) {
				essayAuthEditor.setContents(qxml.smxml.default.__cdata);
			}
		}
	}

	// it checks the no .of files for upload. 
	function maxLengthCheck(e, maxLength) {
		$$invalidate(2, state.files_number = e.value, state);

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			AH.select("#err_txt").innerHTML = "Digits Only";
			AH.selectAll("#err_txt", 'show');
			return false;
		}
	}

	// it updates the xml;
	function updateXML(time, content) {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(
			function () {
				let val = content || essayAuthEditor.getContents();
				let xmlDom = AH.parseHtml(xml);
				let chooseExtOpt = AH.selectAll("#choose_ext option", "selected")[0];
				let defaultDom = xmlDom.querySelector('default');

				if (AH.select("#uploadChk").checked) {
					if (defaultDom) {
						AH.setAttr(defaultDom, {
							'type': 1,
							'fileTypeExts': chooseExtOpt ? chooseExtOpt.value : "",
							'limit': AH.select('#files_number').value
						});
					} else {
						let defHtml = AH.parseHtml(`<default type="1" fileTypeExts="${chooseExtOpt ? chooseExtOpt.value : ''}" limit="${AH.select('#files_number').value}"></default>`);
						xmlDom.appendChild(defHtml);
					}
				} else if (defaultDom) {
					defaultDom.setAttribute('type', 0);
					defaultDom.removeAttribute(...['fileTypeExts', 'limit']);
				}

				if (defaultDom) {
					defaultDom.innerHTML = `<!--[CDATA[${val}]]-->`;
				} else {
					let defHtml = AH.parseHtml(`<default type="0"><!--[CDATA[${val}]]--></default>`);
					xmlDom.appendChild(defHtml);
				} //xmlDom.querySelector('default').innerHTML = '';

				//console.log(xmlDom);
				author_xml = formatXml(xmlDom.outerHTML);

				getChildXml(author_xml);
			},
			time
		);
	}

	const writable_props = ['xml', 'getChildXml', 'l'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Essay> was created with unknown prop '${key}'`);
	});

	function checkbox_checked_binding(value) {
		isUpload = value;
		$$invalidate(1, isUpload);
	}

	const blur_handler = () => updateXML(500);

	$$self.$$set = $$props => {
		if ('xml' in $$props) $$invalidate(5, xml = $$props.xml);
		if ('getChildXml' in $$props) $$invalidate(6, getChildXml = $$props.getChildXml);
		if ('l' in $$props) $$invalidate(0, l = $$props.l);
	};

	$$self.$capture_state = () => ({
		beforeUpdate,
		onMount,
		AH,
		XMLToJSON,
		SUNEDITOR: sunEditor,
		plugins,
		Checkbox,
		xml,
		getChildXml,
		l,
		isUpload,
		author_xml,
		headingArray,
		essayAuthEditor,
		timer,
		state,
		initEdit,
		parseXml,
		maxLengthCheck,
		updateXML
	});

	$$self.$inject_state = $$props => {
		if ('xml' in $$props) $$invalidate(5, xml = $$props.xml);
		if ('getChildXml' in $$props) $$invalidate(6, getChildXml = $$props.getChildXml);
		if ('l' in $$props) $$invalidate(0, l = $$props.l);
		if ('isUpload' in $$props) $$invalidate(1, isUpload = $$props.isUpload);
		if ('author_xml' in $$props) author_xml = $$props.author_xml;
		if ('essayAuthEditor' in $$props) essayAuthEditor = $$props.essayAuthEditor;
		if ('timer' in $$props) timer = $$props.timer;
		if ('state' in $$props) $$invalidate(2, state = $$props.state);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		l,
		isUpload,
		state,
		maxLengthCheck,
		updateXML,
		xml,
		getChildXml,
		checkbox_checked_binding,
		blur_handler
	];
}

class Essay extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { xml: 5, getChildXml: 6, l: 0 }, add_css);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Essay",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*xml*/ ctx[5] === undefined && !('xml' in props)) {
			console_1.warn("<Essay> was created without expected prop 'xml'");
		}

		if (/*getChildXml*/ ctx[6] === undefined && !('getChildXml' in props)) {
			console_1.warn("<Essay> was created without expected prop 'getChildXml'");
		}

		if (/*l*/ ctx[0] === undefined && !('l' in props)) {
			console_1.warn("<Essay> was created without expected prop 'l'");
		}
	}

	get xml() {
		throw new Error("<Essay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set xml(value) {
		throw new Error("<Essay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getChildXml() {
		throw new Error("<Essay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set getChildXml(value) {
		throw new Error("<Essay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get l() {
		throw new Error("<Essay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set l(value) {
		throw new Error("<Essay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Essay;
//# sourceMappingURL=Essay-3817e3b5.js.map
