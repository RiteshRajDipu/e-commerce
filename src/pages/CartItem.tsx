import { useDispatch, useSelector } from "react-redux";
import "./CartItem.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
// import { Card } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CartItem({ item }: any) {
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const incrementItemQuantity = (item: any) => {
    dispatch(incrementQuantity(item));
  };
  const decrementItemQuantity = (item: any) => {
    dispatch(decrementQuantity(item));
  };

  const removeItemFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  console.log(cart);

  return (
    <div>
      <div className="cart">
        <div className="cartLeft">
          <div className="cartContainer">
            <div>
              <img
                src={item.image}
                alt="image on cart"
                style={{ width: 100, height: 100 }}
              />
            </div>

            {/* description */}
            <div className="cartDescription">
              <p>
                {item.title.length > 60 ? item.title.substr(0, 60) : item.title}
              </p>
              {/* <p style={{ marginTop: 8 }}>
                {item.description.length > 60
                  ? item.description.substr(0, 80)
                  : item.description}
              </p> */}
              {/* <p style={{ marginTop: 8 }}>${item.price}</p> */}
            </div>

            {/* Button */}

            <div className="leftCartRow">
              <h5>${item.price * item.quantity}</h5>
              <div className="cartButtonContainer">
                <div>
                  <div className="cartButtons">
                    <div
                      onClick={() => decrementItemQuantity(item)}
                      className="qtyButton"
                    >
                      -
                    </div>

                    <div>{item.quantity}</div>

                    <div
                      onClick={() => incrementItemQuantity(item)}
                      className="qtyButton"
                    >
                      +
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <button
                onClick={() => removeItemFromCart(item)}
                className="cartButton"
              >
                <CloseIcon>Remove Item</CloseIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
