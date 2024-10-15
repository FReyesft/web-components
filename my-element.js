class SftCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.title = this.getAttribute('title');
        this.parrafo = this.getAttribute('parrafo');
        this.img = this.getAttribute('img');
    }

    static get observedAttribute() {
        return ['title', 'parrafo', 'img'];
    }

    attributeChangeCallback(attr, oldvalue, newvalue) {
        if (attr === "title") {
            if (oldvalue !== newvalue) return;
            this.title = newvalue;
        }
        if (attr === "parrafo") {
            if (oldvalue !== newvalue) return;
            this.parrafo = newvalue;
        }
        if (attr === "img") {
            if (oldvalue !== newvalue) return;
            this.img = newvalue;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <p> ${this.parrafo} </p>
                <img src="${this.img}" />
            </section>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles() {
        return `
        <style>
          :host{
    
            display: inline-block;
            with:100%;
            min-width: 300px;
            max-width: 450px;
            font-size:20px;
            background: grey;
          }
    
          
          :host(.blue){
    
            background:blue;
    
          }
          </style>
        `

    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    disconnectedCallback() {
        console.log("disconnectedCallback")
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("sft-card", SftCard);
//document.querySelector("sft-card").remove();