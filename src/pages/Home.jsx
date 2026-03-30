import React from "react";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Categories from "../components/home/Categories";
import TrendingByCategory from "../components/home/TrendingByCategory";


export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden text-gray-900">
      <Hero />
      <Products/>
      <Categories/>
      {/* <TrendingByCategory/> */}
      </div>
  );
}
