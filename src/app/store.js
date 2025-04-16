import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../features/pizza/pizza-slice";
import burgerReducer from "../features/burger/burger-slice";
import productReducer from "../features/products/product-slice";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productReducer,
  },
});

export default store;
