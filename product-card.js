// product-card.js
class ProductCard extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });

        // Create the structure of the card
        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            overflow: hidden;
          }
          .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .product-info {
            padding: 16px;
          }
          .product-name {
            font-size: 1.2em;
            margin: 0;
            color: #333;
          }
          .product-price {
            font-size: 1em;
            color: #007BFF;
            margin: 8px 0;
          }
          .product-description {
            font-size: 0.9em;
            color: #666;
          }
        </style>
        <img class="product-image" alt="Product image">
        <div class="product-info">
          <h2 class="product-name"></h2>
          <p class="product-price"></p>
          <p class="product-description"></p>
        </div>
      `;
    }

    static get observedAttributes() {
        return ['name', 'price', 'description', 'image'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'name':
                this.shadowRoot.querySelector('.product-name').textContent = newValue;
                break;
            case 'price':
                this.shadowRoot.querySelector('.product-price').textContent = `$${newValue}`;
                break;
            case 'description':
                this.shadowRoot.querySelector('.product-description').textContent = newValue;
                break;
            case 'image':
                this.shadowRoot.querySelector('.product-image').src = newValue;
                break;
        }
    }
}

customElements.define('product-card', ProductCard);
