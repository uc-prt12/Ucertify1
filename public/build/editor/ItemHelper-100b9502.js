
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, M as append_styles, v as validate_slots, a5 as createEventDispatcher, e as element, f as space, j as attr_dev, k as add_location, n as insert_dev, p as append_dev, q as listen_dev, B as noop, x as detach_dev, H as run_all } from './main-fdaf2a34.js';

/* helper\ItemHelper.svelte generated by Svelte v3.40.2 */
const file = "helper\\ItemHelper.svelte";

function add_css(target) {
	append_styles(target, "svelte-ri6gyf", ".smControlerBtn .btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUhlbHBlci5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBOEJZLGdFQUFnRSxBQUFFLENBQUMsQUFDdkUsS0FBSyxDQUFFLElBQUksVUFBVSxDQUNyQixrQkFBa0IsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQ25ELFVBQVUsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQzNDLGdCQUFnQixDQUFFLE9BQU8sVUFBVSxDQUNuQyxZQUFZLENBQUUsT0FBTyxVQUFVLENBQy9CLGdCQUFnQixDQUFFLE9BQU8sVUFBVSxBQUN2QyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkl0ZW1IZWxwZXIuc3ZlbHRlIl19 */");
}

// (23:0) {#if reviewMode}
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
			add_location(button0, file, 24, 8, 1076);
			attr_dev(button1, "tabindex", "0");
			attr_dev(button1, "type", "button");
			attr_dev(button1, "mode", "u");
			attr_dev(button1, "class", "btn btn-light your-ans active");
			add_location(button1, file, 25, 8, 1214);
			attr_dev(div, "class", "smControlerBtn btn-group mb-3");
			attr_dev(div, "role", "group");
			attr_dev(div, "aria-label", "Answer buttons");
			add_location(div, file, 23, 4, 982);
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
		source: "(23:0) {#if reviewMode}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let center;
	let button0;
	let t0;
	let button1;
	let t1;
	let mounted;
	let dispose;
	let if_block = /*reviewMode*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			center = element("center");
			button0 = element("button");
			t0 = space();
			button1 = element("button");
			t1 = space();
			if (if_block) if_block.c();
			attr_dev(button0, "tabindex", "0");
			attr_dev(button0, "type", "button");
			attr_dev(button0, "class", "h h-imp");
			attr_dev(button0, "id", "set-review");
			add_location(button0, file, 20, 0, 722);
			attr_dev(button1, "tabindex", "0");
			attr_dev(button1, "type", "button");
			attr_dev(button1, "class", "h h-imp");
			attr_dev(button1, "id", "unset-review");
			add_location(button1, file, 21, 0, 839);
			add_location(center, file, 19, 0, 712);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, center, anchor);
			append_dev(center, button0);
			append_dev(center, t0);
			append_dev(center, button1);
			append_dev(center, t1);
			if (if_block) if_block.m(center, null);

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
					if_block.m(center, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(center);
			if (if_block) if_block.d();
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
	validate_slots('ItemHelper', slots, []);
	let { reviewMode = false } = $$props;
	let { handleReviewClick } = $$props;
	const dispatch = createEventDispatcher();

	function handleSmClick(event) {
		document.querySelectorAll('.smControlerBtn button').forEach(el => el.classList.remove('active'));
		event.target.classList.add('active');
		if (handleReviewClick) handleReviewClick(event.target.getAttribute('mode'), event);
	}

	const writable_props = ['reviewMode', 'handleReviewClick'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<ItemHelper> was created with unknown prop '${key}'`);
	});

	const click_handler = () => dispatch('setReview');
	const click_handler_1 = () => dispatch('unsetReview');

	$$self.$$set = $$props => {
		if ('reviewMode' in $$props) $$invalidate(0, reviewMode = $$props.reviewMode);
		if ('handleReviewClick' in $$props) $$invalidate(3, handleReviewClick = $$props.handleReviewClick);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		reviewMode,
		handleReviewClick,
		dispatch,
		handleSmClick
	});

	$$self.$inject_state = $$props => {
		if ('reviewMode' in $$props) $$invalidate(0, reviewMode = $$props.reviewMode);
		if ('handleReviewClick' in $$props) $$invalidate(3, handleReviewClick = $$props.handleReviewClick);
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
		init(this, options, instance, create_fragment, safe_not_equal, { reviewMode: 0, handleReviewClick: 3 }, add_css);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ItemHelper",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*handleReviewClick*/ ctx[3] === undefined && !('handleReviewClick' in props)) {
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
//# sourceMappingURL=ItemHelper-100b9502.js.map
