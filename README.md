# Lazado

1. Aledro, Reyniel L.
2. D - 2L

## Code Description

Lazado is a React (Vite) e-commerce homepage built with reusable components, React state, and plain CSS.

- `src/App.jsx`: holds the state (`products` and `cart`), the `handleAddToCart` and `handleDelete` functions, and computes the cart total.
- `src/components/Header.jsx`, `NavBar.jsx`, `NavButton.jsx`: header with the store name and a reusable button for each navigation item.
- `src/components/ProductList.jsx`, `ProductCard.jsx`: the market items, each with an "Add to cart" button.
- `src/components/Cart.jsx`, `CartItem.jsx`: shows the total number of items, each item's quantity, and a delete button that removes that item.
