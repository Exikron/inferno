import events              from "../events/shared/events";
import clearEventListeners from "../events/clearEventListeners";
import addEventListener    from "../events/addEventListener";
import { setStyles }       from "./CSSOperations";
import { setHtml }         from "./DOMOperations";
import forIn               from "../../util/forIn";

/**
 * Set HTML attributes on the template
 * @param{ HTMLElement } node
 * @param{ Object } attrs 
 */
export default (node, attrs) => {
	
    forIn(attrs, (attrName, attrVal) => {
        // avoid 'null' values
        if (attrVal != null) {
            if (events[attrName] != null) {
                clearEventListeners(node, attrName);
                addEventListener(node, attrName, attrVal);
			} else if (attrName === "style") {
               setStyles(node, attrName, attrVal);
            } else {
               setHtml(node, attrName, attrVal);
            }
        }
    });
};