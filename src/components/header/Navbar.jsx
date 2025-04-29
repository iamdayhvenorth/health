import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <header
      className={`w-full p-8 navbar fixed top-0 z-50 transition-colors duration-300 ease-linear ${
        background ? "bg-black/65" : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="uppercase lg:text-2xl font-bold">
            <span className="text-[#36c940]">Health</span>
            <span className="text-white">Vest</span>
          </a>
        </div>

        <ul className="md:flex gap-6 hidden">
          <li>
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              spy
              offset={0}
              duration={500}
              className="p-4 text-white cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              spy
              offset={0}
              duration={500}
              className="p-4 text-white cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy
              offset={0}
              duration={500}
              className="p-4 text-white cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <a href="#" className="p-4 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="p-4 text-white">
              Home
            </a>
          </li>
        </ul>

        <span className="block text-3xl cursor-pointer md:hidden menubar">
          <HiOutlineMenuAlt3 />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
