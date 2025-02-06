


"use client";

import React, { useState } from "react";
import Image from "next/image";
import Meubel from "../../../public/Meubel.png";
import { Search, Heart, ShoppingCart, UserRoundCog, Menu, X } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import SearchComponent from "../components/Search";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
 

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image src={Meubel} alt="Meubel Logo" width={100} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-4">

        <UserButton />
          <Link href="/login">
            <UserRoundCog className="cursor-pointer hover:text-blue-500" size={24} />
          </Link>

          <Search 
            size={24} 
            className="cursor-pointer hover:text-blue-500" 
            onClick={() => setIsSearchOpen(!isSearchOpen)} 
          />

          
         

          <Heart className="cursor-pointer hover:text-blue-500" size={24} />

          <Link href="/cart">
            <ShoppingCart className="cursor-pointer hover:text-blue-500" size={24} />
          </Link>

          {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-12  right-10">
          <SearchComponent />
          </div>)}
       

        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Slide-down) */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg transition-all duration-300">
          <nav className="flex flex-col gap-4 px-4 py-3">
            <Link href="/" className="hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className="hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/blog" className="hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>

          {/* Mobile Icons */}
          <div className="flex justify-center gap-6 py-3 border-t">
            <Link href="/loggin">
              <UserRoundCog className="cursor-pointer hover:text-blue-500" size={24} />
            </Link>
            <Search className="cursor-pointer hover:text-blue-500" size={24} />
            <Heart className="cursor-pointer hover:text-blue-500" size={24} />
            <Link href="/cart">
              <ShoppingCart className="cursor-pointer hover:text-blue-500" size={24} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

