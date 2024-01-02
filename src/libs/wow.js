"use client"
import { useEffect } from "react";
import WOW from "wowjs";

const WOWInit = () => {
  
  return useEffect(() => {
   new WOW.WOW({
    live: true,
   }).init();
  }, []);
}

export default WOWInit;