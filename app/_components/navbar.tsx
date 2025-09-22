import { Noto_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const noto = Noto_Sans({ 
  weight: "300",
  subsets: ["latin"]
});

const Navbar = () => {
  return (
    <nav className="bg-none shadow fixed top-10 left-0 right-0 z-50 border mx-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#" className="text-xl font-bold ">
              <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>
          <div className={`hidden md:block ${noto.className} text-2xl`}>
            <div className=" flex items-baseline justify-between space-x-10">
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
