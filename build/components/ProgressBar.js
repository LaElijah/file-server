import Component from "../utils/component.js";
export default class ProgressBar extends Component {
    constructor(progress) {
        super();
        this.progress = progress;
    }
    ;
    prepareComponent(text) {
        return (`
	        <div>
                    <h1>${text}</h1>
		    <div>${this.progress}</div>

	        </div>	
	    `);
    }
    getHTML(text) {
        return this.prepareComponent(text);
    }
}
;
