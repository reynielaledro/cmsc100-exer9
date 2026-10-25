import ProductCard from "./ProductCard.jsx";

// Wrapping flex container that holds all product cards.
export default function ProductList({ products, onAddToCart }) {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
