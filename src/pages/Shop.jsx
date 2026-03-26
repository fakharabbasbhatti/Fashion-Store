import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/shop/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        Loading Products...
      </h2>
    );

  if (error)
    return (
      <h2 className="text-center mt-10 text-red-500">
        {error}
      </h2>
    );

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4">
        
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default Shop;