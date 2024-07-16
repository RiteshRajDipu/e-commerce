import { useEffect } from "react";
import "./AllProducts.css";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCategory } from "../redux/CategorySlice";

const AllProducts = () => {
  const categories = useSelector((state: any) => state.category.category);
  const cart = useSelector((state: any) => state.cart.cart);

  const dispatch = useDispatch();

  console.log(cart);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(addToCategory(data));
          });
    };
    fetchProducts();
  }, []);


  return (
  <div className="body">
    <div className="bodyItems">
     {categories.length > 0 && categories.map((item: any,index: any) => (
      <ProductItem item={item} key={item} />
     ))}
    </div>
  </div>
  )
};

export default AllProducts;
