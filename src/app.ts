import ProgressBar from "./components/ProgressBar.js"


class App
{

    constructor()
    {
    }


    public getData(): string
    {

        const bar: ProgressBar = new ProgressBar(82.70);
        
	
	return(
            bar.getHTML("Overall Storage")	
	);
    }

}



const app: App = new App();

document.getElementById("site")!.innerHTML = app.getData();
