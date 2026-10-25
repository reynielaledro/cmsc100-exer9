// A single product: picture placeholder, name, and an "Add to cart" button.
// Passes the whole product back to the parent when the button is clicked.
export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <div className="card__picture">{product.name}</div>
      <button
        className="card__button"
        type="button"
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </button>
    </article>
  );
}
