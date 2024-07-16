import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import categoryReducer from "./redux/CategorySlice";

export default configureStore({
    reducer:{
        cart:cartReducer,
        category: categoryReducer
    }
})