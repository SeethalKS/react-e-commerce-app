import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, cartCount, removeFromCart } = useContext(CartContext);

  console.log("Cart Items:", cartItems);
  console.log("Cart Count:", cartCount);

  // Calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h3>
        Total Cart Items: {cartCount} | Total Price: ₹{calculateTotalPrice()}
      </h3>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <img src={item.image} alt={item.title} height={100} />
              <p>Price: ₹{item.price * item.quantity}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
