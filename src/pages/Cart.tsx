import Header from "../components/Header";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import CartCheckout from "./CartCheckout";


function Cart() {
  const cart = useSelector((state: any) => state.cart.cart);

  return (
    <>
      <Header />
     
      <div className="cart" key={Date.now()}>
        {/* Cart Items */}
        <div className="cartLeft">
        <h3>Your Cart</h3>
        <hr style={{ borderBottom: '1px solid #f9f9f9', margin: '12px 0'}} />
          {cart.map((item: any, index: any) => (
            <CartItem item={item} />
          ))}
        </div>

        {/* Checkout Summary */}
        <CartCheckout />
      </div>
    </>
  );
}

export default Cart;
