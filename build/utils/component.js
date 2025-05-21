export default class Component {
    getHTML(text) {
        return this.prepareComponent(text);
    }
    ;
    prepareComponent(data) {
        return `${data}`;
    }
}
