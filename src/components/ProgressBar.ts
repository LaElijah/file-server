import Component from "../utils/component.js";

export default class ProgressBar extends Component
{

    constructor(progress: number)
    {
	super();
        this.progress = progress; 
    };


    protected override prepareComponent(text: string): string
    {
        return(
            `
	        <div>
                    <h1>${text}</h1>
		    <div>${this.progress}</div>

	        </div>	
	    `	
	)
    }

    public override getHTML(text: string): string 
    {
        return this.prepareComponent(text);	
    }

    private progress: number;

};



