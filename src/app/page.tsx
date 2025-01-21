import Image from "next/image";
import Herosection from "./components/Herosection";
import OurProduct from "./components/Ourproduct";
import Funiturestyle from "./components/Funiturestyle";
import Range from "./components/Range";
import Rooms from "./components/Rooms";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Range/>
      <OurProduct/>
      <Rooms/>
      <Funiturestyle/>
      <Footer/>
      
     
    
    </div>
  );
}
