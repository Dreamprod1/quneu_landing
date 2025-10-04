"use client"
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from 'react-scroll';

import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen_1, setIsSubMenuOpen_1] = useState(false);
  const [isSubMenuOpen_2, setIsSubMenuOpen_2] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu_1 = () => {
    setIsSubMenuOpen_1(!isSubMenuOpen_1);
  };
  const toggleSubMenu_2 = () => {
    setIsSubMenuOpen_2(!isSubMenuOpen_2);
  };

  const defaultScrollOptions = {
    duration: 1000,
    easing: 'easeInOutQuad',
    offset: -115,
  };
  const defaultScrollOptions2 = {
    duration: 1000,
    easing: 'easeInOutQuad',
    offset: -93,
  };

  return (
    <nav id="navbar_header" className="bg-[#060405] shadow fixed left-0 right-0 z-50 border text-white
    top-1 md:top-5 lg:top-8 xl:top-10 
    mx-2 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-16 2xl:mx-28  
    p-1 sm:p-2 md:p-2">
      <div className="w-full max-w-[78rem] px-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NextLink href="#" className="text-xl font-bold w-[90px] sm:w-[128px] lg:w-[138px]" >
              <Image src="/images/logo.png" alt="Logo" width={198} height={78} />
            </NextLink>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline justify-between 
            lg:space-x-5 xl:space-x-10  
            lg:text-lg xl:text-[1.45rem]">
              <div className="relative group">
                <button className="flex items-center gap-2"> Q0 Platform </button>
                <div className="absolute top-full left-0 mt-4 w-48 bg-[#060405] border border-t-0 shadow-lg overflow-hidden
                  invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link smooth={true} {...defaultScrollOptions} to="graph_info_section" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                    QGRAPH</Link>
                  <Link smooth={true} {...defaultScrollOptions} to="qmat_section" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                    QMAT</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-2"> Cognitive Layers </button>
                <div className="absolute top-full left-0 mt-4 w-48 bg-[#060405] border border-t-0 shadow-lg overflow-hidden
                  invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link smooth={true} {...defaultScrollOptions} to="cognitive_layer_1" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                    Layer 1
                  </Link>
                  <Link smooth={true} {...defaultScrollOptions} to="cognitive_layer_2" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                    Layer 2
                  </Link>
                  <Link smooth={true} {...defaultScrollOptions} to="cognitive_layer_3" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                    Layer 3
                  </Link>
                  <Link smooth={true} {...defaultScrollOptions} to="cognitive_layer_4" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                    Layer 4
                  </Link>
                </div>
              </div>
              <Link smooth={true} {...defaultScrollOptions} to="use_cases_section" className="cursor-pointer">Use Cases</Link>
              <Link smooth={true} {...defaultScrollOptions} to="about_section" className="cursor-pointer">About</Link>
              <Link smooth={true} {...defaultScrollOptions} to="contact_section" className="cursor-pointer">Contact</Link>
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
            <button
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleSubMenu_1}>
              Q0 Platform
              {isSubMenuOpen_1 ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {isSubMenuOpen_1 && (
              <div className="pl-6 space-y-1">
                <Link smooth={true} {...defaultScrollOptions2} to="graph_info_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white cursor-pointer"
                  onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen_1(false); }}>QGRAPH</Link>
                <Link smooth={true} {...defaultScrollOptions2} to="qmat_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white cursor-pointer"
                  onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen_1(false); }}>QMAT</Link>
              </div>
            )}
            <button
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleSubMenu_2}>
              Cognitive Layers
              {isSubMenuOpen_2 ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {isSubMenuOpen_2 && (
              <div className="pl-6 space-y-1">
                <Link smooth={true} {...defaultScrollOptions2} to="cognitive_layer_1" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white cursor-pointer"
                  onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen_2(false); }}> Layer 1</Link>
                <Link smooth={true} {...defaultScrollOptions2} to="cognitive_layer_2" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white cursor-pointer"
                  onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen_2(false); }}>Layer 2</Link>
                <Link smooth={true} {...defaultScrollOptions2} to="cognitive_layer_3" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white cursor-pointer"
                  onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen_2(false); }}>Layer 3</Link>
                <Link smooth={true} {...defaultScrollOptions2} to="cognitive_layer_4" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-600 hover:text-white cursor-pointer"
                  onClick={() => { setIsMenuOpen(false); setIsSubMenuOpen_2(false); }}>Layer 4</Link>
              </div>
            )}
            <Link smooth={true} {...defaultScrollOptions2} to="use_cases_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              onClick={toggleMenu}>Use Cases</Link>
            <Link smooth={true} {...defaultScrollOptions2} to="about_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              onClick={toggleMenu}>About</Link>
            <Link smooth={true} {...defaultScrollOptions2} to="contact_section" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;