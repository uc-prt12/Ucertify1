
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, e as element, p as append_dev, v as validate_slots, a0 as createEventDispatcher, f as space, j as attr_dev, k as add_location, n as insert_dev, q as listen_dev, B as noop, x as detach_dev, H as run_all, z as empty } from './main-d98b8a5f.js';

/* helper/ItemHelper.svelte generated by Svelte v3.29.0 */

const { document: document_1 } = globals;
const file = "helper/ItemHelper.svelte";

function add_css() {
	var style = element("style");
	style.id = "svelte-ri6gyf-style";
	style.textContent = ".smControlerBtn .btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUhlbHBlci5zdmVsdGUiLCJzb3VyY2VzIjpbIkl0ZW1IZWxwZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS1cbiAqICBGaWxlIE5hbWUgICA6IEl0ZW1IZWxwZXIuc3ZlbHRlXG4gKiAgRGVzY3JpcHRpb24gOiBSZXNwb25zaWJsZSBmb3Igc2V0dGluZyByZXZpZXdcbiAqICBBdXRob3IgICAgICA6IFByYWRlZXAgWWFkYXZcbiAqICBQYWNrYWdlICAgICA6IEVkaXRvclxuICogIExhc3QgdXBkYXRlIDogMTAtRGVjLTIwMjBcbiAqICBMYXN0IFVwZGF0ZWQgQnkgOiBBeXVzaCBTcml2YXN0YXZhXG4tLT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiAgICBleHBvcnQgbGV0IHJldmlld01vZGUgPSBmYWxzZTtcbiAgICBleHBvcnQgbGV0IGhhbmRsZVJldmlld0NsaWNrO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlU21DbGljayhldmVudCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21Db250cm9sZXJCdG4gYnV0dG9uJykuZm9yRWFjaCgoZWwpPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGlmIChoYW5kbGVSZXZpZXdDbGljaykgaGFuZGxlUmV2aWV3Q2xpY2soZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbW9kZScpLCBldmVudCk7XG4gICAgfVxuPC9zY3JpcHQ+XG48YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImggaC1pbXBcIiBpZD1cInNldC1yZXZpZXdcIiBvbjpjbGljaz1cInsoKT0+ZGlzcGF0Y2goJ3NldFJldmlldycpfVwiPjwvYnV0dG9uPlxuPGJ1dHRvbiB0YWJpbmRleD1cIjBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJoIGgtaW1wXCIgaWQ9XCJ1bnNldC1yZXZpZXdcIiBvbjpjbGljaz1cInsoKT0+ZGlzcGF0Y2goJ3Vuc2V0UmV2aWV3Jyl9XCI+PC9idXR0b24+XG57I2lmIHJldmlld01vZGV9XG4gICAgPGRpdiBjbGFzcz1cInNtQ29udHJvbGVyQnRuIGJ0bi1ncm91cCBtYi0zXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkFuc3dlciBidXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIG1vZGU9XCJjXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGNvcnJlY3QtYW5zXCIgb246Y2xpY2s9XCJ7aGFuZGxlU21DbGlja31cIj5Db3JyZWN0IEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHRhYmluZGV4PVwiMFwiIHR5cGU9XCJidXR0b25cIiBtb2RlPVwidVwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCB5b3VyLWFucyBhY3RpdmVcIiBvbjpjbGljaz1cIntoYW5kbGVTbUNsaWNrfVwiPllvdXIgQW5zd2VyPC9idXR0b24+XG4gICAgPC9kaXY+XG57L2lmfVxuPHN0eWxlPlxuICAgIDpnbG9iYWwoLnNtQ29udHJvbGVyQnRuIC5idG4tbGlnaHQ6bm90KFtkaXNhYmxlZF0pOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSkge1xuICAgICAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggMCAjMTI2NmYxIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggMCAjMTI2NmYxIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NzJmMiFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI1NzJmMiFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwYzU3ZDMhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJZLGdFQUFnRSxBQUFFLENBQUMsQUFDdkUsS0FBSyxDQUFFLElBQUksVUFBVSxDQUNyQixrQkFBa0IsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQ25ELFVBQVUsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQzNDLGdCQUFnQixDQUFFLE9BQU8sVUFBVSxDQUNuQyxZQUFZLENBQUUsT0FBTyxVQUFVLENBQy9CLGdCQUFnQixDQUFFLE9BQU8sVUFBVSxBQUN2QyxDQUFDIn0= */";
	append_dev(document_1.head, style);
}

// (22:0) {#if reviewMode}
function create_if_block(ctx) {
	let div;
	let button0;
	let t1;
	let button1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			button0 = element("button");
			button0.textContent = "Correct Answer";
			t1 = space();
			button1 = element("button");
			button1.textContent = "Your Answer";
			attr_dev(button0, "tabindex", "0");
			attr_dev(button0, "type", "button");
			attr_dev(button0, "mode", "c");
			attr_dev(button0, "class", "btn btn-light correct-ans");
			add_location(button0, file, 23, 8, 1043);
			attr_dev(button1, "tabindex", "0");
			attr_dev(button1, "type", "button");
			attr_dev(button1, "mode", "u");
			attr_dev(button1, "class", "btn btn-light your-ans active");
			add_location(button1, file, 24, 8, 1180);
			attr_dev(div, "class", "smControlerBtn btn-group mb-3");
			attr_dev(div, "role", "group");
			attr_dev(div, "aria-label", "Answer buttons");
			add_location(div, file, 22, 4, 950);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, button0);
			append_dev(div, t1);
			append_dev(div, button1);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*handleSmClick*/ ctx[2], false, false, false),
					listen_dev(button1, "click", /*handleSmClick*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(22:0) {#if reviewMode}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let button0;
	let t0;
	let button1;
	let t1;
	let if_block_anchor;
	let mounted;
	let dispose;
	let if_block = /*reviewMode*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			button0 = element("button");
			t0 = space();
			button1 = element("button");
			t1 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			attr_dev(button0, "tabindex", "0");
			attr_dev(button0, "type", "button");
			attr_dev(button0, "class", "h h-imp");
			attr_dev(button0, "id", "set-review");
			add_location(button0, file, 19, 0, 693);
			attr_dev(button1, "tabindex", "0");
			attr_dev(button1, "type", "button");
			attr_dev(button1, "class", "h h-imp");
			attr_dev(button1, "id", "unset-review");
			add_location(button1, file, 20, 0, 809);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, button0, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, button1, anchor);
			insert_dev(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler*/ ctx[4], false, false, false),
					listen_dev(button1, "click", /*click_handler_1*/ ctx[5], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*reviewMode*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(button1);
			if (detaching) detach_dev(t1);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			mounted = false;
			run_all(dispose);
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
	validate_slots("ItemHelper", slots, []);
	let { reviewMode = false } = $$props;
	let { handleReviewClick } = $$props;
	const dispatch = createEventDispatcher();

	function handleSmClick(event) {
		document.querySelectorAll(".smControlerBtn button").forEach(el => el.classList.remove("active"));
		event.target.classList.add("active");
		if (handleReviewClick) handleReviewClick(event.target.getAttribute("mode"), event);
	}

	const writable_props = ["reviewMode", "handleReviewClick"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ItemHelper> was created with unknown prop '${key}'`);
	});

	const click_handler = () => dispatch("setReview");
	const click_handler_1 = () => dispatch("unsetReview");

	$$self.$$set = $$props => {
		if ("reviewMode" in $$props) $$invalidate(0, reviewMode = $$props.reviewMode);
		if ("handleReviewClick" in $$props) $$invalidate(3, handleReviewClick = $$props.handleReviewClick);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		reviewMode,
		handleReviewClick,
		dispatch,
		handleSmClick
	});

	$$self.$inject_state = $$props => {
		if ("reviewMode" in $$props) $$invalidate(0, reviewMode = $$props.reviewMode);
		if ("handleReviewClick" in $$props) $$invalidate(3, handleReviewClick = $$props.handleReviewClick);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		reviewMode,
		dispatch,
		handleSmClick,
		handleReviewClick,
		click_handler,
		click_handler_1
	];
}

class ItemHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document_1.getElementById("svelte-ri6gyf-style")) add_css();
		init(this, options, instance, create_fragment, safe_not_equal, { reviewMode: 0, handleReviewClick: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ItemHelper",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*handleReviewClick*/ ctx[3] === undefined && !("handleReviewClick" in props)) {
			console.warn("<ItemHelper> was created without expected prop 'handleReviewClick'");
		}
	}

	get reviewMode() {
		throw new Error("<ItemHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set reviewMode(value) {
		throw new Error("<ItemHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleReviewClick() {
		throw new Error("<ItemHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set handleReviewClick(value) {
		throw new Error("<ItemHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ItemHelper as I };
//# sourceMappingURL=ItemHelper-5f3cad21.js.map
