"use client";

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

