import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "@mui/material";
import './CartCheckout.css';

function CartCheckout() {
    const cart = useSelector((state: any) => state.cart.cart);
    const total = cart
      .map((item: any) => item.price * item.quantity)
      .reduce((acc: any, curr: any) => acc + curr, 0);
    console.log(total);
    const tax = 3;
    const navigator = useNavigate();
  
    const movetoHomePage = () => {
      navigator("/home");
    };

  return (
    <Card className="card">
    <div className="cartRight">
    {/* checkout and the total */}
    <div className="cartRightCheckout">
      <div className="orderSummary">
        <h4 style={{marginBottom:35}}>Order Summary</h4>
        <div className="cartRightCheckoutpart">
          <p>Subtotal</p>
          <p>${(total).toFixed(2)}</p>
        </div>
        <div className="cartRightCheckoutpart">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className="cartRightCheckoutpart">
          <p style={{paddingBottom:20}}>Tax:</p>
          <p>${tax}.00</p>
        </div>
      </div>
      <div className="cartRightCheckoutpart">
        <h5 style={{marginLeft:11}}>Total</h5>
        <p>${(total + tax).toFixed(2)}</p>
      </div>
    </div>

    <button className="cartRightCheckoutButton">
      <p style={{ color: "white" }}>Checkout</p>
    </button>
    <p onClick={() => movetoHomePage()} className="shopping">
      Continue Shopping
    </p>
  </div>
  </Card>
  )
}

export default CartCheckout