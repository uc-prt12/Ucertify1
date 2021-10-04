
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-2efadb2a.js';

/* clsSMMultipleChoice\mcqHelper.svelte generated by Svelte v3.40.2 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
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

const alphabet = ('A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z').split(',');

const itemHelper = {
	doNotformatXml(type, xml) {
		return +type == 0 ? '' : xml;
	},
	donNotSendXMl: true,
	checkDataOnSave(data, content_subtype, state, updateModule) {
		// let ansstr = "";
		// let arr = [];
		// Object.values(state.ajaxData.answers).map((item, index) => {
		//     let option = (item.is_correct == "1") ? "*" : '-';
		//     ansstr += '[[Option' + option + alphabet[index] + ': ' + seqTag(item.answer) + "\n";
		//     arr = removeBogus(ansstr);
		// });
		data['correct_answers'] = state.ajaxData.correct_answers;

		data['total_answers'] = state.ajaxData.total_answers;
		data['answers'] = state.ajaxData.answers;
		return data;
	},
	actionOnUpdate(state) {
		if (state.content_type == "q" && state.item == 0 && state.content_icon == 0) {
			jQuery('#xmlBtn').addClass("h");
		} else {
			jQuery('#xmlBtn').removeClass("h");
		}
	},
	checkBeforeSave(state, updateModule) {
		let checkOptionSelection = JSON.stringify(state.ajaxData.answers).match(/"is_correct":"[1-9]"/);

		if (checkOptionSelection == null) {
			updateModule('message', "You must select a option");
			updateModule('saveDialog', false);
			updateModule('snackback', true);
			return true;
		}

		return false;
	},
	helpVideo: '//player.vimeo.com/external/290348936.hd.mp4?s=a13a32bc22efff0e3b2813f64ee52ab6413166ea'
};

function removeBogus(data) {
	if (data) {
		data = data.replace(/<span data-mce-bogus[^>]*>/g, '');

		data = data.replace(/<span anscounter[^>]*>(.*?)<\/span>/g, (p1, p2) => {
			return p2;
		});
	}

	return data;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('McqHelper', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<McqHelper> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ alphabet, itemHelper, removeBogus });
	return [];
}

class McqHelper extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "McqHelper",
			options,
			id: create_fragment.name
		});
	}
}

export default McqHelper;
export { itemHelper };
//# sourceMappingURL=mcqHelper-e14d2e3e.js.map
