import Image from "next/image";
import Link from "next/link";
//---
const Navbar = () => {
  return (
    <nav className="bg-[#060405] shadow fixed top-10 left-0 right-0 z-50 border mx-4 sm:mx-8 md:mx-12 lg:mx-24 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#" className="text-xl font-bold ">
              <Image src="/images/logo.png" alt="Logo" width={150} height={50}  />
            </Link>
          </div>
          <div className="hidden md:block text-lg md:text-xl lg:text-2xl">
            <div className=" flex items-baseline justify-between space-x-4 md:space-x-6 lg:space-x-10">
              <Link href="#">Q0 Platform</Link>
              <Link href="#">Cognative Layers</Link>
              <Link href="#">Use Cases</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
