



export default class Component
{
    public getHTML(text: string): string
    {
        return this.prepareComponent(text); 
    };
    

    protected prepareComponent(data: string): string
    {
        return `${data}`;
    }

}


