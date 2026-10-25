import { useState } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

// Navigation data. Each item becomes one reusable <NavButton /> component.
const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Gadgets", url: "#", id: 2 },
  { name: "Accessories", url: "#", id: 3 },
];

// Initial state of the market: a list of at least four items.
const initialProducts = [
  { id: 1, name: "Asahy Power Juicer" },
  { id: 2, name: "Samsong Washing Machine" },
  { id: 3, name: "Hanabesh Electric Fan" },
  { id: 4, name: "Kitchenix Rice Cooker" },
];

export default function App() {
  // State: items available in the market
  const [products] = useState(initialProducts);
  // State: items in the cart, each shaped like { id, name, qty }
  const [cart, setCart] = useState([]);

  // Add to cart: if the item is already in the cart, increase its quantity;
  // otherwise add it as a new line with qty 1.
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { id: product.id, name: product.name, qty: 1 }];
    });
    console.log(`Added ${product.name} to the cart!`);
  };

  // Delete: remove one individual item (line) from the cart by its id.
  const handleDelete = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Total number of items in the cart (sum of all quantities).
  const total = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="page">
    
      <Header storeName="Lazado" menus={menus} />

    
      <main className="body">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart items={cart} total={total} onDelete={handleDelete} />
      </main>
    </div>
  );
}
