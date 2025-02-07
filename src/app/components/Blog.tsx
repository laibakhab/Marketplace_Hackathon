// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Laptop from "../../../public/Laptop.png";
// import { CalendarDays, Tag, User } from "lucide-react";
// import Link from "next/link";
// import Exp from "../../../public/Exploring.png";
// import Decoration from "../../../public/second.png"
// import Handmade from "../../../public/Images (3).png"
// import Milan from "../../../public/secondlast.png"
// import Paper from "../../../public/Rectangle 36.png"
// import Colorful from "../../../public/last.png"


// import Hand from "../../../public/Handmade.png";
// const categories = [
//   { name: "Crafts", count: 2 },
//   { name: "Design", count: 8 },
//   { name: "Handmade", count: 7 },
//   { name: "Interior", count: 1 },
//   { name: "Wood", count: 8 },
// ];

// const posts = [
//   {
//     title: "Going all-in with millennial design",
//     date: "14 Oct 2022",
//     category: "Wood",
//   },
//   {
//     title: "Exploring new ways of decorating",
//     date: "13 Oct 2022",
//     category: "Handmade",
//   },
//   {
//     title: "Modern home in Milan",
//     date: "03 Aug 2023",
//     category: "Interior",
//   },
// ];

// export default function BlogPosts() {
//   return (
//     <div>
//       <div className="container mx-auto" >
//         <div className="grid gap-8 md:grid-cols-3">
//           {/* Main Content */}
//           <div className="space-y-6 md:col-span-2">
//             {/* card 1  */}
//             <div className=" mt-[80px] sm:ml-4 md:ml-8">
//               <Image
//                 src={Laptop}
//                 alt="Laptop"
//                 className="w-[817px] h-[500px] sm:w-full md:w-4/5 lg:w-[817px]"
//               />
//               <div className="mt-[17px]">
//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//                   <div className="flex gap-1">
//                     <User className="w-4 h-4" />
//                     <span>Admin</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <CalendarDays className="w-4 h-4" />
//                     <time dateTime="2022-10-14">14 Oct 2022</time>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Tag className="w-4 h-4" />
//                     <span>Handmade</span>
//                   </div>
//                 </div>

//                 <h2 className="text-2xl font-bold tracking-tight mb-4 sm:text-xl md:text-2xl lg:text-2xl">
//                   Exploring new ways of decorating
//                 </h2>

//                 <p className="w-[817px] h-[115px] text-muted-foreground mb-4 line-clamp-3 sm:w-full md:w-4/5 lg:w-[817px]">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Muis mauris vitae ultricies leo integer malesuada nunc. In
//                   nulla posuere sollicitudin aliquam ultrices. Morbi blandit
//                   cursus risus at ultrices mi tempus imperdiet. Libero enim sed
//                   faucibus turpis in. Cursus mattis molestie a iaculis at erat.
//                   Nibh cras pulvinar mattis nunc sed blandit libero.
//                   Pellentesque elit ullamcorper dignissim cras tincidunt.
//                   Pharetra et ultrices neque ornare aenean euismod elementum.
//                 </p>

//                 <Link
//                   href="#"
//                   className="inline-flex text-sm font-medium text-primary hover:text-primary/90"
//                 >
//                   Read more
//                   <span className="sr-only">
//                     {" "}
//                     about Going all-in with millennial design
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* card 2 */}
//             <div className="ml-[80px] mt-[106px] sm:ml-4 md:ml-8 ">
//               <Image
//                 src={Exp}
//                 alt="Laptop"
//                 className="w-[817px] h-[500px] sm:w-full md:w-4/5 lg:w-[817px]"
//               />
//               <div className="mt-[17px]">
//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//                   <div className="flex gap-1">
//                     <User className="w-4 h-4" />
//                     <span>Admin</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <CalendarDays className="w-4 h-4" />
//                     <time dateTime="2022-10-14">14 Oct 2022</time>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Tag className="w-4 h-4" />
//                     <span>Handmade</span>
//                   </div>
//                 </div>

//                 <h2 className="text-2xl font-bold tracking-tight mb-4 sm:text-xl md:text-2xl lg:text-2xl">
//                   Exploring new ways of decorating
//                 </h2>

//                 <p className="w-[817px] h-[115px] text-muted-foreground mb-4 line-clamp-3 sm:w-full md:w-4/5 lg:w-[817px]">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Muis mauris vitae ultricies leo integer malesuada nunc. In
//                   nulla posuere sollicitudin aliquam ultrices. Morbi blandit
//                   cursus risus at ultrices mi tempus imperdiet. Libero enim sed
//                   faucibus turpis in. Cursus mattis molestie a iaculis at erat.
//                   Nibh cras pulvinar mattis nunc sed blandit libero.
//                   Pellentesque elit ullamcorper dignissim cras tincidunt.
//                   Pharetra et ultrices neque ornare aenean euismod elementum.
//                 </p>

//                 <Link
//                   href="#"
//                   className="inline-flex text-sm font-medium text-primary hover:text-primary/90"
//                 >
//                   Read more
//                   <span className="sr-only">
//                     {" "}
//                     about Going all-in with millennial design
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* card 3 */}

//             <div className="ml-[100px] mt-[106px] sm:ml-4 md:ml-8 ">
//               <Image
//                 src={Hand}
//                 alt="Laptop"
//                 className="w-[817px] h-[500px] sm:w-full md:w-4/5 lg:w-[817px]"
//               />
//               <div className="mt-[17px]">
//                 <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//                   <div className="flex gap-1">
//                     <User className="w-4 h-4" />
//                     <span>Admin</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <CalendarDays className="w-4 h-4" />
//                     <time dateTime="2022-10-14">14 Oct 2022</time>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Tag className="w-4 h-4" />
//                     <span>Handmade</span>
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold tracking-tight mb-4 sm:text-xl md:text-2xl lg:text-2xl">
//                   Exploring new ways of decorating
//                 </h2>

//                 <p className="w-[817px] h-[115px] text-muted-foreground mb-4 line-clamp-3 sm:w-full md:w-4/5 lg:w-[817px]">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Muis mauris vitae ultricies leo integer malesuada nunc. In
//                   nulla posuere sollicitudin aliquam ultrices. Morbi blandit
//                   cursus risus at ultrices mi tempus imperdiet. Libero enim sed
//                   faucibus turpis in. Cursus mattis molestie a iaculis at erat.
//                   Nibh cras pulvinar mattis nunc sed blandit libero.
//                   Pellentesque elit ullamcorper dignissim cras tincidunt.
//                   Pharetra et ultrices neque ornare aenean euismod elementum.
//                 </p>

//                 <Link
//                   href="#"
//                   className="inline-flex text-sm font-medium text-primary hover:text-primary/90"
//                 >
//                   Read more
//                   <span className="sr-only">
//                     {" "}
//                     about Going all-in with millennial design
//                   </span>
//                 </Link>
//               </div>
//             </div>


//             <div className='w-[392px] h-[60px] mb-20 top-[2349px] left-[12382px] rounded-[10px] gap-[40px] mt-11 ml-[200px]  flex'>
//              <div className=' w-[60px] h-[60px]  rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
//                <p className='w-[7px] h-[30px] top-[45px] left-[27px] text-[20px] leading-[30px] text-black ml-6 pt-4'>1</p>
//              </div>
             
//              <div className=' w-[60px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
//                <p className='w-[7px] h-[30px] top-[45px] left-[27px] text-[20px] leading-[30px] text-black ml-6 pt-4'>2</p>
//              </div>

//              <div className='w-[60px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
//                <p className='w-[7px] h-[30px] top-[45px] left-[27px] text-[20px] leading-[30px] textblack  ml-6 pt-4'>3</p>
//              </div> 

//              <div className=' w-[98px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
//                <p className='w-[43px] h-[30px] top-[45px] left-[322px] text-[20px] leading-[30px] textblack  font-light ml-6 pt-4'>Next</p>
//              </div>
//            </div>


            
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6 mt-[80px]">
//             <div>
//               <Input type="search" placeholder="Search..." className="w-full" />
//             </div>
//             {/* section 1 */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Categories</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2">
//                   {categories.map((category) => (
//                     <li key={category.name} className="flex  justify-between">
//                       <span className="text-sm mb-8">{category.name}</span>
//                       <span className="text-sm text-muted-foreground">
//                         {category.count}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//             {/* section 2 */}
//             <div className='w-[393px] h-[650px] mt-16'>


// <div className='w-[252px] h-[618px]   rounded-[10px]    pt-11 ml-[15px]'>
//    <h2 className='w-[200px]  h-[36px] mb-5 top-[-94px] left-[12582px] font-medium text-[24px]  leading-[36px] '>Recent Posts</h2>
//      <div className='w-[211px] h-[80px] top-[439px] left-[12581px]  rounded-[10px] flex  mb-8'>
//        <Image src={Paper} alt="image"width={80} height={80}  />
//        <div className='w-[119px] h-[65px] top-[447px] left-[12673px]   ml-5'>
//          <p className='w-[150px] h-[42px]'>Going all-in with millennial design <br /> 03 Aug 2022</p>
//        </div>
//      </div>

//      <div className='w-[211px] h-[80px] top-[439px] left-[12581px] rounded-[10px] flex mb-8'>
//        <Image src={Decoration} alt="image"width={80} height={80}  />
//        <div className='w-[119px] h-[65px] top-[447px] left-[12673px]  ml-5'>
//          <p className='w-[150px] h-[42px]'>Exploring new ways of Decoration <br /> 03 Aug 2022</p>
//        </div>
//      </div>

//      <div className='w-[211px] h-[80px] top-[439px] left-[12581px] rounded-[10px] flex mb-8'>             
//       <Image src={Handmade} alt="image"width={80} height={80}  />           
//         <div className='w-[119px] h-[65px] top-[447px] left-[12673px]  ml-5'>
//          <p className='w-[170px] h-[42px]'>Handmade pieces <br />that  took time to make <br /> 03 Aug 2022</p>
//              </div>
//            </div>

//            <div className='w-[211px] h-[80px] top-[439px] left-[12581px] rounded-[10px] flex mb-8'>
//              <Image src={Milan} alt="image"width={80} height={80}  />
//              <div className='w-[119px] h-[65px] top-[447px] left-[12673px]  ml-5'>
//                <p className='w-[150px] h-[42px]'>Modern home in Milan <br /> 03 Aug 2022</p>
//              </div>
//            </div>

//            <div className='w-[211px] h-[80px] top-[439px] left-[12581px] rounded-[10px] flex mb-8'>
//              <Image src={Colorful} alt="image"width={80} height={80}  />
//              <div className='w-[119px] h-[65px] top-[447px] left-[12673px] ml-5'>
//                <p className='w-[119px] h-[42px]'>Cilorful office redesign <br /> 03 Aug 2022</p>          
//                   </div>
//            </div>

//          </div>

//           </div>
          
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, Tag, User } from "lucide-react";
import Link from "next/link";
import Laptop from "../../../public/Laptop.png";
import Exp from "../../../public/Exploring.png";
import Hand from "../../../public/Handmade.png";
import Decoration from "../../../public/second.png";
import Handmade from "../../../public/Images (3).png";
import Milan from "../../../public/secondlast.png";
import Paper from "../../../public/Rectangle 36.png";
import Colorful from "../../../public/last.png";

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 8 },
];

export default function BlogPosts() {
  return (
    <div className="container mx-auto p-2 mt-10 md:px-8">
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {/* Main Content */}
        <div className="space-y-10 md:col-span-2 lg:col-span-3">
          {[Laptop, Exp, Hand].map((image, index) => (
            <div key={index} className="w-full space-y-4">
              <Image
                src={image}
                alt="Blog Image"
                className="w-full h-auto rounded-lg"
              />
              <div className="text-sm text-muted-foreground flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" /> <span>Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" /> <time>14 Oct 2022</time>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" /> <span>Handmade</span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">
                Exploring new ways of decorating
              </h2>
              <p className="text-muted-foreground line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </p>
              <Link href="#" className="text-primary hover:text-primary/90 text-sm font-medium">
                Read more
              </Link>
            </div>
          ))}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6 md:col-span-1 lg:col-span-1">
          <Input type="search" placeholder="Search..." className="w-full" />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name} className="flex justify-between">
                    <span className="text-sm">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Recent Posts */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Recent Posts</h2>
            {[Handmade, Decoration, Handmade, Milan, Colorful].map((image, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image src={image} alt="Recent post" width={80} height={80} className="rounded-lg" />
                <p className="text-sm">Modern home in Milan <br /> 03 Aug 2022</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-10">
        {[1, 2, 3, "Next"].map((item, index) => (
          <button
            key={index}
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F9F1E7] hover:bg-[#B88E2F] text-black"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

