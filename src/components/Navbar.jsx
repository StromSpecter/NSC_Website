import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoNSC from "../assets/NSC_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col px-8 py-5 bg-white shadow-md md:px-20 lg:px-36">
      <nav className="flex flex-row items-center justify-between">
        {/* logo */}
        <div className="w-24 h-10">
          <img
            src={logoNSC}
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-row items-center hidden gap-6 md:flex">
          {/* links */}
          <ul className="flex flex-row gap-6">
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                News
              </a>
            </li>
          </ul>
          {/* button */}
          <button className="px-8 py-2 text-sm bg-yellow-500 rounded-md">
            Contact Us
          </button>
        </div>
        {/* hamburger menu */}
        <div
          className="flex flex-col cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`block w-8 h-1 bg-black mb-1 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            } transition-transform`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black mb-1 ${
              isOpen ? "opacity-0" : ""
            } transition-opacity`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            } transition-transform`}
          ></span>
        </div>
      </nav>
      {/* sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed right-0 flex flex-col w-full bg-white shadow-md top-20 h-fit"
          >
            <ul className="flex flex-col items-center h-full gap-6 p-8">
              <li>
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  News
                </a>
              </li>
              <li className="flex flex-row items-center justify-center w-full pt-10 mt-8 border-t-2 border-gray-300">
                <button className="px-8 py-2 text-sm text-white bg-yellow-500 rounded-md">
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
