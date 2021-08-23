
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, B as noop } from './main-d0e46147.js';

/* clsSMDragNDrop\defaultXML.svelte generated by Svelte v3.40.2 */

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
	var xmls = {
		"editor_item_8.xml": '<smxml type="1" name="DragNDrop" bgimg="VIA_Mini-ITX_Form_Factor_Comparison_000DbC.jpg" path="" height="489" width="823"><textbox width="106" height="30" top="105" left="70" type="text" id="ID10" correctans="Standerd-ATX" placeholder="Type here..."></textbox><textbox width="107" height="30" top="105" left="285" type="text" id="ID11" correctans="Micro-ATX" placeholder="Type here..."></textbox><textbox width="106" height="30" top="104" left="468" type="text" id="ID12" correctans="Mini-ITX" placeholder="Type here..."></textbox><textbox width="97" height="30" top="103" left="617" type="text" id="ID13" correctans="Nano-ITX" placeholder="Type here..."></textbox><textbox width="87" height="30" top="103" left="722.5" type="text" id="ID14" correctans="Pico-ITX" placeholder="Type here..."></textbox></smxml>',
		"editor_item_9.xml": '<smxml type="1" name="DragNDrop" bgimg="VIA_Mini-ITX_Form_Factor_Comparison_000DbC.jpg" path="" height="489" width="823"><select width="100" height="30" top="103" left="73" id="ID0">Please select\n*Standerd-ATX\nMicro-ATX\nMini-ITX\nNano-ITX\nPico-ITX</select><select width="100" height="30" top="104" left="296" id="ID1">Please select\nStanderd-ATX\n*Micro-ATX\nMini-ITX\nNano-ITX\nPico-ITX</select><select width="100" height="30" top="106" left="477" id="ID2">Please select\nStanderd-ATX\nMicro-ATX\n*Mini-ITX\nNano-ITX\nPico-ITX</select><select width="100" height="30" top="105" left="614" id="ID3">\nPlease select\nStanderd-ATX\nMicro-ATX\nMini-ITX\n*Nano-ITX\nPico-ITX</select><select width="95" height="30" top="105" left="720" id="ID4">Please select\nStanderd-ATX\nMicro-ATX\nMini-ITX\nNano-ITX\n*Pico-ITX</select></smxml>',
		"editor_item_10.xml": '<smxml type="1" name="DragNDrop" bgimg="VIA_Mini-ITX_Form_Factor_Comparison_0008EC.jpg" path="" height="100" width="500"><drag id="ID0" name="" top="316" left="847" width="100" height="25" image="" invisible="1" value="Micro-ATX" bgcolor="" bordercolor="" multi_drag="0"></drag><drop id="ID1" name="" top="103" left="62" width="100" height="25" anskey="ID3" invisible="1" value="Place Here" bgcolor="" bordercolor=""></drop><drag id="ID2" name="" top="360" left="847" height="25" width="100" image="" invisible="1" value="Mini-ITX" bgcolor="" bordercolor="" multi_drag="0"></drag><drag id="ID3" name="" top="271" left="847" height="25" width="100" image="" invisible="1" value="Standard-ATX" bgcolor="" bordercolor="" multi_drag="0"></drag><drag id="ID4" name="" top="182" left="847" height="25" width="100" image="" invisible="1" value="Pico-ITX" bgcolor="" bordercolor="" multi_drag="0"></drag><drag id="ID5" name="" top="227" left="847" height="25" width="100" image="" invisible="1" value="Nano-ITX" bgcolor="" bordercolor="" multi_drag="0"></drag><drop id="ID6" name="" top="103" left="286" height="25" width="100" anskey="ID0" invisible="1" value="Place Here" bgcolor="" bordercolor="" defaultans=""></drop><drop id="ID7" name="" top="103" left="466" height="25" width="100" anskey="ID2" invisible="1" value="Place Here" bgcolor="" bordercolor="" defaultans=""></drop><drop id="ID8" name="" top="103" left="608" height="25" width="100" anskey="ID5" invisible="1" value="Place Here" bgcolor="" bordercolor="" defaultans=""></drop><drop id="ID9" name="" top="103" left="723" height="25" width="100" anskey="ID4" invisible="1" value="Place Here" bgcolor="" bordercolor="" defaultans=""></drop></smxml>',
		"editor_item_11.xml": '<smxml type="1" name="DragNDrop" bgimg="lab-26_0007C9_000CsS.png" height="495" width="607"><drag id="ID0" top="442" left="307" width="120" height="25" value="Port operational"></drag><drag id="ID1" top="442" left="454" width="120" height="25" value="Layer 2 problem"></drag><drag id="ID2" top="442" left="10" width="120" height="25" value="Layer 1 problem"></drag><drag id="ID3" top="442" left="160" width="120" height="25" value="Port disabled"></drag><drop id="ID4" top="76" left="414" width="120" height="25" anskey="ID0" value="Drop Here"></drop><drop id="ID5" top="173" left="414" width="120" height="25" anskey="ID1" value="Drop Here"></drop><drop id="ID6" top="272" left="414" width="120" height="25" anskey="ID2" value="Drop Here"></drop><drop id="ID7" top="366" left="414" width="120" height="25" anskey="ID3" value="Drop Here"></drop></smxml>',
		"editor_item_12.xml": '<smxml type="1" name="DragNDrop" height="1000" width="818"><step id="S0" bgimg="motherboard_0005CW.png" path="" ddisplay="1"><drop id="ID7" name="" top="28" left="453" height="398" width="24" anskey="ID3" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID8" name="ExpansionCard" top="28" left="350" height="356" width="20" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID9" name="ExpansionCard" top="26" left="294" height="364" width="20" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID10" name="ExpansionCard" top="27" left="238" height="360" width="23" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID11" name="ExpansionCard" top="26" left="185" height="360" width="24" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID12" name="ExpansionCard" top="27" left="134" height="362" width="20" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID13" name="ExpansionCard" top="28" left="397" height="360" width="26" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop></step><tab id="ID0" bgimg="" path="" display="1" value="AGP Video Card"><drag id="ID3" name="" top="42" left="62" height="207" width="348" image="AGP-video-card.jpg_0004JQ.png,AGP-video-card-drag.jpg_0004j0.png,PCIe_video_card-top-view_0004Mt.png" invisible="1" border="0" value="" bgcolor="" bordercolor="" multi_drag="1" degree="0"></drag></tab><tab id="ID1" bgimg="" path="" display="0" value="PCI Network Adapter"><drag id="ID4" name="ExpansionCard" top="6" left="36" height="254" width="287" image="pci_network_adaptor_0005Fs.png,drag_0005Fq.png,SoundCardCreative_SBAudigy-SB0090-top_0004MT.png" invisible="1" border="0" value="" bgcolor="" bordercolor="" multi_drag="1" degree="0"></drag></tab><tab id="ID2" bgimg="" path="" display="0" value="PCI Firewire Adapter"><drag id="ID5" name="ExpansionCard" top="33" left="41" height="198" width="322" image="PCI_firewire_adapter.jpg_0004j1.png,PCI_firewire_adapter-drag.jpg_0004j2.png,SoundCardCreative_SBAudigy-SB0090-top_0004MT.png" invisible="1" border="0" value="" bgcolor="" bordercolor="" multi_drag="1" degree="0"></drag></tab></smxml>',
		"sample": '<smxml type="1" name="DragNDrop" height="1000" width="818"><step id="S0" bgimg="motherboard_0005CW.png" path="" ddisplay="1"><drop id="ID7" name="" top="28" left="453" height="398" width="24" anskey="ID3" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID8" name="ExpansionCard" top="28" left="350" height="356" width="20" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID9" name="ExpansionCard" top="26" left="294" height="364" width="20" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID10" name="ExpansionCard" top="27" left="238" height="360" width="23" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID11" name="ExpansionCard" top="26" left="185" height="360" width="24" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID12" name="ExpansionCard" top="27" left="134" height="362" width="20" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop><drop id="ID13" name="ExpansionCard" top="28" left="397" height="360" width="26" anskey="ID4,ID5" invisible="1" border="0" value="" bgcolor="" bordercolor="" defaultans="" degree="0"></drop></step><tab id="ID0" bgimg="" path="" display="1" value="AGP Video Card"><drag id="ID3" name="" top="42" left="62" height="207" width="348" image="AGP-video-card.jpg_0004JQ.png,AGP-video-card-drag.jpg_0004j0.png,PCIe_video_card-top-view_0004Mt.png" invisible="1" border="0" value="" bgcolor="" bordercolor="" multi_drag="1" degree="0"></drag></tab><tab id="ID1" bgimg="" path="" display="0" value="PCI Network Adapter"><drag id="ID4" name="ExpansionCard" top="6" left="36" height="254" width="287" image="pci_network_adaptor_0005Fs.png,drag_0005Fq.png,SoundCardCreative_SBAudigy-SB0090-top_0004MT.png" invisible="1" border="0" value="" bgcolor="" bordercolor="" multi_drag="1" degree="0"></drag></tab><tab id="ID2" bgimg="" path="" display="0" value="PCI Firewire Adapter"><drag id="ID5" name="ExpansionCard" top="33" left="41" height="198" width="322" image="PCI_firewire_adapter.jpg_0004j1.png,PCI_firewire_adapter-drag.jpg_0004j2.png,SoundCardCreative_SBAudigy-SB0090-top_0004MT.png" invisible="1" border="0" value="" bgcolor="" bordercolor="" multi_drag="1" degree="0"></drag></tab></smxml>'
	};

	return xmls[type];
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('DefaultXML', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<DefaultXML> was created with unknown prop '${key}'`);
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
//# sourceMappingURL=defaultXML-96c26a7f.js.map
