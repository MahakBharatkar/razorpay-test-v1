"use client";
import ProductCard from "./components/ProductCard/page";
import axios from "axios";

export default function Home() {
  const checkoutHandler = async (amount) => {
    const {data} = await axios.post("http://localhost:4000/api/checkout", { amount });

    console.log(data);
  };

  return (
    <div className="h-full bg-slate-100">
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <ProductCard
          img={
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          amount={200}
          checkoutHandler={checkoutHandler}
        />

        <ProductCard
          img={
            "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          amount={300}
          checkoutHandler={checkoutHandler}
        />
      </div>
    </div>
  );
}
