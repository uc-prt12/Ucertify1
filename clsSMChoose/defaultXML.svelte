<script context="module">
export function getDefaultXMl(type) {
    var xmls = {
        "editor_item_15.xml": '<SMXML type="6" name="ChooseAndReorder"><list headingCorrect="Filename Extension" headingAll="" allowSort="0" ><![CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]></list></SMXML>',    
        "editor_item_16.xml": '<SMXML type="6" name="ChooseAndReorder"><list headingCorrect="Installing a hard disk drive" headingAll="" allowSort="1" ><![CDATA[*Ensure proper ESD (electrostatic discharge) protection.\n*Open the PC case.\n*Set the jumpers or switches.\n*Install the drive in an empty drive bay.\n*Connect the data ribbon cable.\n*Connect the power cable.\n*Close the PC case.]]></list></SMXML>',
        "editor_item_75.xml": '<SMXML type="6" name="ChooseAndReorder"><list groupcheck="false" whichfixed ="" headingCorrect="IP Classes" row="2" col="3"><!--[CDATA[!Class A\n!Class B\n!Class C\n21.3.23.233\n128.1.1.1\n200.255.255.255]]--></list></SMXML>',
        "editor_item_17.xml": '<smxml xmlns="http://www.w3.org/1999/xhtml" type="6" name="ChooseAndReorder"><list headingcorrect="Filename Extension" headingall="" allowsort="1" issentence="0" isparagraph="1"><!--[CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]--></list></smxml>',
        "editor_item_18.xml": '<smxml xmlns="http://www.w3.org/1999/xhtml" type="6" name="ChooseAndReorder"><list headingcorrect="Filename Extension" headingall="" allowsort="1" issentence="1" isparagraph="0"><!--[CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]--></list></smxml>',
        "sample": '<smxml xmlns="http://www.w3.org/1999/xhtml" type="6" name="ChooseAndReorder"><list headingcorrect="Filename Extension" headingall="" allowsort="1" issentence="1" isparagraph="0"><!--[CDATA[*.doc/.docx\n*.zip\n*.txt\n.hlp\n.pif]]--></list></smxml>',
    };

    return xmls[type];
}
</script>
