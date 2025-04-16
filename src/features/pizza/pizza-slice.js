import { createSlice } from "@reduxjs/toolkit";

const initialState = { pizzaBase: 1000 };

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    orderPizza: (state, action) => {
      state.pizzaBase -= action.payload;
    },
  },
});

export default pizzaSlice.reducer;
export const { orderPizza } = pizzaSlice.actions;
