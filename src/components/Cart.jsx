import CartItem from "./CartItem.jsx";

// Shopping cart panel shown on the right side of the page.
// Displays the total number of items and one CartItem per cart line.
export default function Cart({ items, total, onDelete }) {
  return (
    <aside className="cart">
      <h2 className="cart__title">Shopping cart (Total: {total})</h2>
      {items.length === 0 ? (
        <p className="cart__empty">Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <CartItem key={item.id} item={item} onDelete={onDelete} />
        ))
      )}
    </aside>
  );
}
