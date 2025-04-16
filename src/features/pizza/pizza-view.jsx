import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPizza } from "./pizza-slice";

function PizzaView() {
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  return (
    <div>
      <h2>Number of pizza base: {pizzaBase}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={() => dispatch(orderPizza(input))}>Order Pizza</button>
    </div>
  );
}

export default PizzaView;
