const shopData = [
  {
    category: "Electronics",
    subcategories: [
      {
        name: "Phones",
        items: [
          { name: "iPhone 14", price: 1200, image: "https://i.pinimg.com/236x/ca/43/a1/ca43a11d6672b910f1c19b2c537ba2da.jpg" },
          { name: "Samsung Galaxy S23", price: 1000, image: "https://i.pinimg.com/236x/5b/d8/93/5bd893c5ec4277bc4cff54fbb3e79afb.jpg" },
          { name: "Tecno Spark", price: 1000, image: "https://i.pinimg.com/236x/9c/b5/de/9cb5ded7d455e3746ab8145b7acadf0e.jpg" },
          { name: "Infinix Hot Pro 40", price: 1000, image: "https://i.pinimg.com/236x/3a/f2/79/3af27941c703ad0bfa5869fca36c440b.jpg" }
        ]
      },
      {
        name: "Laptops",
        items: [
          { name: "MacBook Pro", price: 2000, image: "https://i.pinimg.com/236x/78/bf/a8/78bfa893270a0b531705b1c56f25674d.jpg" },
          { name: "Dell XPS 13", price: 1500, image: "https://i.pinimg.com/236x/f5/95/1b/f5951b5564d563e51f53a5cdec268815.jpg" },
          { name: "HP 640 G5", price: 1500, image: "https://i.pinimg.com/236x/db/f2/1e/dbf21ee3252027b0164b2a2f5d00bea6.jpg" },
          { name: "Lenovo 134-GFL Powercore", price: 1500, image: "https://i.pinimg.com/236x/d0/91/6d/d0916d83f8fac27348a957e0e58db938.jpg" }
        ]
      },
      
    ]
  },
  {
    category: "Clothing",
    subcategories: [
      {
        name: "Men's Wear",
        items: [
          { name: "Leather Jacket", price: 300, image: "project-images/jacket.jpg" },
          { name: "Sneakers", price: 150, image: "project-images/sneakers.jpg" }
        ]
      }
    ]
  }
];


const productsGrid = document.getElementById("products-grid");


shopData.forEach(category => {
category.subcategories.forEach(subcategory => {
  subcategory.items.forEach(item => {
    // Create a product card
    const productCard = document.createElement("div");
    productCard.classList.add("bg-white", "shadow-md", "rounded-lg", "overflow-hidden", "transition-transform", "hover:scale-105");

    
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.classList.add("w-full", "h-48", "object-cover");
    productCard.appendChild(img);

    
    const name = document.createElement("h4");
    name.textContent = item.name;
    name.classList.add("text-lg", "font-bold", "mt-4", "px-4");
    productCard.appendChild(name);

    
    const price = document.createElement("p");
    price.textContent = `$${item.price}`;
    price.classList.add("text-gray-600", "mt-2", "px-4");
    productCard.appendChild(price);

    
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.classList.add(
      "bg-blue-500",
      "text-white",
      "font-semibold",
      "py-2",
      "px-4",
      "rounded",
      "mt-4",
      "mb-4",
      "mx-4",
      "hover:bg-blue-600"
    );
    productCard.appendChild(button);

    
    productsGrid.appendChild(productCard);
  });
});
}); 