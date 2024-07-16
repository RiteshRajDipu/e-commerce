import "./Header.css";
import { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

function Header() {
  const cartDetails = localStorage.getItem("cartDetails");
  const cart = useSelector((state: any) => state.cart.cart);
  const totalCartItem = cart.reduce((acc: any, curr: any) => {
    return acc + curr.quantity;
  }, 0);
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const updateCartItem = async () => {
    try {
      const productData = cart.map((item: any) => {
        return {
          productId: item.id,
          quantity: item.quantity,
        };
      });

      const payload = {
        userId: 3,
        date: format(new Date(), "yyyy-MM-dd"),
        products: productData,
      };

      // Delay execution by 500ms using setTimeout
      await new Promise((resolve) => setTimeout(resolve, 500));

      const cartId = cartDetails ? JSON.parse(cartDetails).id : null;
      console.log(cartId)
      if (cartId) {
        const response = await fetch(
          `https://fakestoreapi.com/carts/${cartId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to update cart item. Status: ${response.status}`
          );
        }

        // Optionally handle response data
        const responseData = await response.json();
        console.log("Update cart item response:", responseData);
      }

      // Handle success or further operations if needed
    } catch (err) {
      console.error("Error updating cart item:", err);
    }
  };

  const createCartItems = async () => {
    try {
      const productData = cart.map((item: any) => {
        return {
          productId: item.id,
          quantity: item.quantity,
        };
      });

      const payload = {
        userId: 3,
        date: format(new Date(), "yyyy-MM-dd"),
        products: productData,
      };

      console.log(productData)
      if (productData.length > 0) {
        const response = await fetch(`https://fakestoreapi.com/carts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to create cart item. Status: ${response.status}`
          );
        }

        // Optionally handle response data
        const responseData = await response.json();
        console.log("Cart created response:", responseData);

        localStorage.setItem("cartDetails", JSON.stringify(responseData));

        // Handle success or further operations if needed
      }
    } catch (err) {
      console.error("Error creating cart item:", err);
    }
  };

  useEffect(() => {
    if (cartDetails) {
      updateCartItem();
    } else {
      createCartItems();
    }
  }, [cart]);

  return (
    <>
      <div className="header">
        {/* {Logo of ecom} */}
        <div>
          <img
            style={{ width: 120, height: 50, marginTop: 10, marginRight: 45 }}
            className="image"
            alt="logo"
            src="https://www.logolynx.com/images/logolynx/4c/4c1e9d4c49f1ee74f3bb871a181fea10.png"
          />
        </div>

        <div
          className="headerText"
          style={{ display: "flex", position: "relative" }}
        >
          <Home />
          <Category />
          <About />
          <Contact />
        </div>

        {/* Search Bar */}
        <div className="headerInputContainer">
          <input
            className="headerInput"
            type="text"
            placeholder="Search products "
          />
          <SearchOutlinedIcon style={{ marginLeft: 4, marginTop: 5 }} />
        </div>

        <div
          onClick={navigateToCart}
          className="headerText"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <AddShoppingCartOutlinedIcon />
          <span
            style={{
              position: "absolute",
              left: 18,
              right: 14,
              width: 14,
              height: 14,
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 7,
              textAlign: "center",
            }}
          >
            {totalCartItem}
          </span>
        </div>
        {/* Avatar */}
        <AccountCircleRoundedIcon className="headerText" />
      </div>

      {/* Bottom Header */}

      <div className="headerBottom">
        <p style={{ marginLeft: 35, padding: 7 }}>Ecommerce</p>
      </div>
    </>
  );
}

export default Header;
