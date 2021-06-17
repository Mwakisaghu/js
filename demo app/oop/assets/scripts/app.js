const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0150/0643/3380/products/Viacom_Spongebob_Pillow16inX16inPRTGENSLG16B_00043_800x.jpg?v=1563223169',
      price: 19.99,
      description: 'A soft pillow!',
    },
    {
      title: 'A Carpet',
      imageUrl:
        'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/994803/1.jpg?7448',
      price: 89.99,
      description: 'A clean and nice carpet which you might like!',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
       <img src="${prod.imageUrl}" alt="${prod.title}">
       <div class = "product-item__content">
       <h2>${prod.title}</h2>
       <h3>\$${prod.price}</h3>
       <p>${prod.description}</p>
       <button>Add to Cart</button>
       </div>
       </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
