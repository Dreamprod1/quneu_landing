"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav id="navbar_header" className="bg-[#060405] shadow fixed top-4 sm:top-6 md:top-8 lg:top-10 left-0 right-0 z-50 border mx-2 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-16 2xl:mx-20 text-white p-1 sm:p-2 md:p-2">
      <div className="container mx-auto px-2 sm:px-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="#" className="text-xl font-bold">
              <Image src="/images/logo.png" alt="Logo" width={198} height={78}  />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline justify-between space-x-2 md:space-x-5 lg:space-x-10 xl:space-x-20 text-sm sm:text-base md:text-lg lg:text-2xl">
              <div className="relative">
                <button onClick={toggleSubMenu} className="flex items-center gap-1 sm:gap-2">
                  Q0 Platform {isSubMenuOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                {isSubMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 sm:mt-4 w-36 sm:w-48 bg-[#060405] border border-t-0 shadow-lg overflow-hidden">
                    <Link href="#graph_info_section" className="block px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => { setIsSubMenuOpen(false); }}>QGRAPH</Link>
                    <Link href="#qmat_section" className="block px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => { setIsSubMenuOpen(false); }}>QMAT</Link>
                  </div>
                )}
              </div>
              <Link href="#cognitive_layers">Cognitive Layers</Link>
              <Link href="#use_cases_section">Use Cases</Link>
              <Link href="#about_section">About</Link>
              <Link href="#contact_section">Contact</Link>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none text-xl">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden p-4">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={toggleSubMenu}>
              Q0 Platform
              {isSubMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {isSubMenuOpen && (
              <div className="pl-6 space-y-1">
                <Link href="#QGRAPH" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white" onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen(false); }}>QGRAPH</Link>
                <Link href="#QMAT" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white" onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen(false); }}>QMAT</Link>
              </div>
            )}
            <Link href="#cognitive_layers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={toggleMenu}>Cognitive Layers</Link>
            <Link href="#use_cases_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={toggleMenu}>Use Cases</Link>
            <Link href="#about_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={toggleMenu}>About</Link>
            <Link href="#contact_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;