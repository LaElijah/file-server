import ProgressBar from "./components/ProgressBar.js";
class App {
    constructor() {
    }
    getData() {
        const bar = new ProgressBar(82.70);
        return (bar.getHTML("Overall Storage"));
    }
}
const app = new App();
document.getElementById("site").innerHTML = app.getData();
