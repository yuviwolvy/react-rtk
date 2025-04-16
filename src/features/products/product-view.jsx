import React, { useEffect } from "react";
import { fetchProducts } from "./product-slice";
import { useDispatch, useSelector } from "react-redux";

function ProductView() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      {products?.loading ? (
        <h2>Loading...</h2>
      ) : products?.error?.length ? (
        <h2>Error: {products?.error}</h2>
      ) : (
        !!products?.products?.length && (
          <ul>
            {products?.products?.map((product) => (
              <li>{product}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default ProductView;
