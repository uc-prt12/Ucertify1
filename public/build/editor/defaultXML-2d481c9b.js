
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-9d98459d.js';

/* clsSMAlignMatch/defaultXML.svelte generated by Svelte v3.29.0 */

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

function getDefaultXMl(type) {
	let xmls = {
		"editor_item_95.xml": `
                <smxml type="35" name="AlignMatch" maxwidth="500">
					<!--[CDATA[{
						"category":{
							"categories":[
								{
									"id":"category_1",
									"text":"State"								
								},
								{
									"id":"category_2",
									"text":"Capital"								
								},
								{
									"id":"category_3",
									"text":"Buildings"								
								}
							]
						},
						"item":{
							"items":[
								{
									"imageurl":"",
									"imagealt":"",
									"id":"item_1",
									"label":"Uttar Pradesh",
									"category":"category_1",
									"tags":"Tags 1"
								},
								{
									"imageurl":"1492581789/1_1492581789.jpg",
									"imagealt":"Lucknow",
									"id":"item_2",
									"label":"Lucknow",
									"category":"category_2",
									"tags":"Tags 1"
								},
								{
									"imageurl":"1492581846/1_1492581846.jpg",
									"imagealt":"Taj Mahal",
									"id":"item_3",
									"label":"Taj Mahal",
									"category":"category_3",
									"tags":"Tags 1"
								},
								{
									"imageurl":"1492581901/1_1492581901.jpg",
									"imagealt":"Maharashtra",
									"id":"item_4",
									"label":"Maharashtra",
									"category":"category_1",
									"tags":"Tags 2"
								},
								{
									"imageurl":"1492581951/1_1492581951.jpg",
									"imagealt":"Mumbai",
									"id":"item_5",
									"label":"Mumbai",
									"category":"category_2",
									"tags":"Tags 2"
								},
								{
									"imageurl":"",
									"imagealt":"",
									"id":"item_6",
									"label":"Gateway",
									"category":"category_3",
									"tags":"Tags 2"
								},
								{
									"imageurl":"1492582059/1_1492582059.jpg",
									"imagealt":"Madhya Pradesh",
									"id":"item_7",
									"label":"Madhya Pradesh",
									"category":"category_1",
									"tags":"Tags 3"	
								},
								{
									"imageurl":"",
									"imagealt":"",
									"id":"item_8",
									"label":"Bhopal",
									"category":"category_2",
									"tags":"Tags 3"
								},
								{
									"imageurl":"1492582188/1_1492582188.jpg",
									"imagealt":"Khujraho Temple",
									"id":"item_9",
									"label":"",
									"category":"category_3",
									"tags":"Tags 3"
								},
								{
									"imageurl":"1492670213/1_1492670213.jpg",
									"imagealt":"West Bengal",
									"id":"item_10",
									"label":"West Bengal",
									"category":"category_1",
									"tags":"Tags 4"
								},
								{
									"imageurl":"1492670329/1_1492670329.jpg",
									"imagealt":"Kolkata",
									"id":"item_11",
									"label":"Kolkata",
									"category":"category_2",
									"tags":"Tags 4"
								},
								{
									"imageurl":"1492670383/1_1492670383.jpg",
									"imagealt":"Hawarah Bridge",
									"id":"item_12",
									"label":"Hawarah Bridge",
									"category":"category_3",
									"tags":"Tags 4"
								}																								
							]
						},
						"settings": {
							"assignmentTitle":"State Info Challenge",
							"assignmentSubtitle":"How well do you know the Indian states?",
							"introText":"In this challenge, you will put your knowledge of Indian state to the ultimate test. ",
							"beginButtonText":"begin",
							"howToPlayTitle":"Game: Align",
							"howToPlayText":"Match each State with their Capital and Monuments.",
							"resultsTitle":"Results",
							"outroTitle":"Good job!",
							"outroText":"You did it! \\n\\n Now result time.",
							"outroImage":"1491889706/1_1491889706.jpg",
							"outroImageDescription":"",
							"requiredMatches":4,
							"matchButtonText":"Match",
							"showPoints":true,
							"showAccuracy":true,
							"showMatches":true,
							"timeLimit":0,
							"correctValue":50,
							"incorrectValue":-25
						}
					}
					]]-->
				</smxml>`,
		"sample": `
                <smxml type="35" name="AlignMatch" maxwidth="500">
					<!--[CDATA[{
						"category":{
							"categories":[
								{
									"id":"category_1",
									"text":"State"								
								},
								{
									"id":"category_2",
									"text":"Capital"								
								},
								{
									"id":"category_3",
									"text":"Buildings"								
								}
							]
						},
						"item":{
							"items":[
								{
									"imageurl":"",
									"imagealt":"",
									"id":"item_1",
									"label":"Uttar Pradesh",
									"category":"category_1",
									"tags":"Tags 1"
								},
								{
									"imageurl":"1492581789/1_1492581789.jpg",
									"imagealt":"Lucknow",
									"id":"item_2",
									"label":"Lucknow",
									"category":"category_2",
									"tags":"Tags 1"
								},
								{
									"imageurl":"1492581846/1_1492581846.jpg",
									"imagealt":"Taj Mahal",
									"id":"item_3",
									"label":"Taj Mahal",
									"category":"category_3",
									"tags":"Tags 1"
								},
								{
									"imageurl":"1492581901/1_1492581901.jpg",
									"imagealt":"Maharashtra",
									"id":"item_4",
									"label":"Maharashtra",
									"category":"category_1",
									"tags":"Tags 2"
								},
								{
									"imageurl":"1492581951/1_1492581951.jpg",
									"imagealt":"Mumbai",
									"id":"item_5",
									"label":"Mumbai",
									"category":"category_2",
									"tags":"Tags 2"
								},
								{
									"imageurl":"",
									"imagealt":"",
									"id":"item_6",
									"label":"Gateway",
									"category":"category_3",
									"tags":"Tags 2"
								},
								{
									"imageurl":"1492582059/1_1492582059.jpg",
									"imagealt":"Madhya Pradesh",
									"id":"item_7",
									"label":"Madhya Pradesh",
									"category":"category_1",
									"tags":"Tags 3"	
								},
								{
									"imageurl":"",
									"imagealt":"",
									"id":"item_8",
									"label":"Bhopal",
									"category":"category_2",
									"tags":"Tags 3"
								},
								{
									"imageurl":"1492582188/1_1492582188.jpg",
									"imagealt":"Khujraho Temple",
									"id":"item_9",
									"label":"",
									"category":"category_3",
									"tags":"Tags 3"
								},
								{
									"imageurl":"1492670213/1_1492670213.jpg",
									"imagealt":"West Bengal",
									"id":"item_10",
									"label":"West Bengal",
									"category":"category_1",
									"tags":"Tags 4"
								},
								{
									"imageurl":"1492670329/1_1492670329.jpg",
									"imagealt":"Kolkata",
									"id":"item_11",
									"label":"Kolkata",
									"category":"category_2",
									"tags":"Tags 4"
								},
								{
									"imageurl":"1492670383/1_1492670383.jpg",
									"imagealt":"Hawarah Bridge",
									"id":"item_12",
									"label":"Hawarah Bridge",
									"category":"category_3",
									"tags":"Tags 4"
								}																								
							]
						},
						"settings": {
							"assignmentTitle":"State Info Challenge",
							"assignmentSubtitle":"How well do you know the Indian states?",
							"introText":"In this challenge, you will put your knowledge of Indian state to the ultimate test. ",
							"beginButtonText":"begin",
							"howToPlayTitle":"Game: Align",
							"howToPlayText":"Match each State with their Capital and Monuments.",
							"resultsTitle":"Results",
							"outroTitle":"Good job!",
							"outroText":"You did it! \\n\\n Now result time.",
							"outroImage":"1491889706/1_1491889706.jpg",
							"outroImageDescription":"",
							"requiredMatches":4,
							"matchButtonText":"Match",
							"showPoints":true,
							"showAccuracy":true,
							"showMatches":true,
							"timeLimit":0,
							"correctValue":50,
							"incorrectValue":-25
						}
					}
					]]-->
				</smxml>`
	};

	return xmls[type];
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DefaultXML", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DefaultXML> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ getDefaultXMl });
	return [];
}

class DefaultXML extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DefaultXML",
			options,
			id: create_fragment.name
		});
	}
}

export default DefaultXML;
export { getDefaultXMl };
//# sourceMappingURL=defaultXML-2d481c9b.js.map
