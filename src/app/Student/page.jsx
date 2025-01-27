"use client"
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return <div>page</div>;
}

export default page;
