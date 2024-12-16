import React, { useEffect } from "react";
import Header from "../MyComponents/Header.js";
import Content from "../MyComponents/Content.js";
import Footer from "../MyComponents/Footer.js";

export default function Home() {
  useEffect(() => {
    console.log("Home component rendered");
  }, []);
  return (
    <div>
      <Content />
      </div>
  );
}
