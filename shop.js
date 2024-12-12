const shopItems = [
    {
      category: "Electronics",
      subcategory: "Phones",
      items: [
        { name: "iPhone 14", price: 1200, image: "./Project images\Product Detail Page.jpeg" },
        { name: "Samsung Galaxy S23", price: 1000, image: "Project images\Serie Camon 19 - Conoce los detalles de los nuevos equipos de Tecno Mobile - Pixelco Tech.jpeg" },
        { name: "Samsung Galaxy S23", price: 1000, image: "galaxy-s23.jpg" },
        { name: "Samsung Galaxy S23", price: 1000, image: "galaxy-s23.jpg" },
        { name: "Samsung Galaxy S23", price: 1000, image: "galaxy-s23.jpg" },
      ],
    },
    {
      category: "Electronics",
      subcategory: "Laptops",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Electronics",
      subcategory: "Gaming Hardware and Software",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Home accessories",
      subcategory: "Decorations",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Home accessories",
      subcategory: "Kitchenware",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Home accessories",
      subcategory: "Furniture",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Fashion",
      subcategory: "Women's wear",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Fashion",
      subcategory: "Men's wear",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
    {
      category: "Home accessories",
      subcategory: "Kid's clothing",
      items: [
        { name: "MacBook Pro", price: 2500, image: "macbook.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
        { name: "Dell XPS 13", price: 1800, image: "dell-xps.jpg" },
      ],
    },
  ];
  

  function renderShop() {
    const container = document.getElementById("shop-container");
    shopItems.forEach(category => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";
      categoryDiv.innerHTML = `<h2>${category.category} - ${category.subcategory}</h2>`;
      
      category.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          <button onclick="addToCart('${item.name}')">Add to Cart</button>
        `;
        categoryDiv.appendChild(itemDiv);
      });
  
      container.appendChild(categoryDiv);
    });
  }
  
  renderShop();
  