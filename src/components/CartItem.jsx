// One row in the cart: item name, quantity, and a delete (x) button.
export default function CartItem({ item, onDelete }) {
  return (
    <div className="cart__item">
      <span className="cart__name">{item.name}</span>
      <span className="cart__qty">QUANTITY: {item.qty}</span>
      <button
        className="cart__delete"
        type="button"
        aria-label={`Remove ${item.name} from the cart`}
        onClick={() => onDelete(item.id)}
      >
        X
      </button>
    </div>
  );
}
