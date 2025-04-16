import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./burger-slice";

function BurgerView() {
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of burger buns: {burgerBuns}</h2>
      <button onClick={() => dispatch(orderBurger())}>Order Burger</button>
    </div>
  );
}

export default BurgerView;
