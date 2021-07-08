class Product {
  /*title = 'DEFAULT';
  imageUrl;
  price;
  description;*/

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding Product to Cart ...');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div>
     <img src="${this.product.imageUrl}" alt="${this.product.title}">
     <div class = "product-item__content">
     <h2>${this.product.title}</h2>
     <h3>\$${this.product.price}</h3>
     <p>${this.product.description}</p>
     <button>Add to Cart</button>
     </div>
     </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart());
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://cdn.shopify.com/s/files/1/0150/0643/3380/products/Viacom_Spongebob_Pillow16inX16inPRTGENSLG16B_00043_800x.jpg?v=1563223169',
      19.99,
      'A soft pillow!'
    ),
    new Product(
      'A Carpet',
      'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/994803/1.jpg?7448',
      89.99,
      'A clean and nice carpet which you might like!'
    ),
  ];
  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
