"use client";

import Herosection from "./components/Herosection";
import OurProduct from "./components/Ourproduct";
import Funiturestyle from "./components/Funiturestyle";
import Range from "./components/Range";
import Rooms from "./components/Rooms";



export default function Home() {
  return (
    <div>

      <Herosection/>
      <Range/>
      <OurProduct/>
      <Rooms/>
      <Funiturestyle/>

    </div>
  );
}
