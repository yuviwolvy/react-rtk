import { createSlice } from "@reduxjs/toolkit";
import { orderPizza } from "../pizza/pizza-slice";

const initialState = { burgerBuns: 2000 };

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    orderBurger: (state) => {
      state.burgerBuns -= 2;
    },
  },
});

export default burgerSlice.reducer;
export const { orderBurger } = burgerSlice.actions;
