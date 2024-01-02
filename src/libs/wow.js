"use client"
import { useEffect } from "react";

const WOWInit = () => {
  return useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      
      new WOW.WOW({
       live: true,
      }).init();
    }
  }, []);
}

export default WOWInit;