import { FaXTwitter, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import { PiCaretRightBold } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { MdMyLocation, MdSettingsPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="box-container py-20 px-6  ">
        <div className="flex flex-col md:flex-row flex-wrap gap-y-8  gap-4 justify-start">
          <div className=" flex flex-col gap-y-8 max-w-[330px]">
            <a href="#" className="uppercase lg:text-2xl font-bold">
              <span className="text-[#36c940]">Health</span>
              <span className="text-white">Vest</span>
            </a>

            <div className="flex flex-col gap-3">
              <p className="text-base text-[#999999]  font-normal leading-7">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="flex gap-2">
                <span className=" h-10 w-10 rounded-xs flex items-center justify-center bg-[#ffffff0d] text-[#36c940] cursor-pointer">
                  <FaXTwitter />
                </span>
                <span className=" h-10 w-10 rounded-xs flex items-center justify-center bg-[#ffffff0d] text-[#36c940] cursor-pointer">
                  <FaFacebookF />
                </span>
                <span className=" h-10 w-10 rounded-xs flex items-center justify-center bg-[#ffffff0d] text-[#36c940] cursor-pointer">
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-y-8 max-w-[400px]">
            <h4 className="font-semibold text-white text-lg">Services</h4>
            <ul className="flex flex-col lg:flex-row flex-wrap gap-4">
              {[...Array(8)].map((_, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-base text-wrap text-[#999999]  font-normal"
                  >
                    <PiCaretRightBold />
                    <span>Weight Loss Program</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col gap-y-8 ">
            <h4 className="font-semibold text-white text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-[#999999]  font-normal"
                >
                  <PiCaretRightBold />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-[#999999]  font-normal"
                >
                  <PiCaretRightBold />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-[#999999]  font-normal"
                >
                  <PiCaretRightBold />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-[#999999]  font-normal"
                >
                  <PiCaretRightBold />
                  <span>Gallery & Bar</span>
                </a>
              </li>
            </ul>
          </div>

          <div className=" flex flex-col gap-y-8 max-w-[330px]">
            <h4 className="font-semibold text-white text-lg">
              Have Questions?
            </h4>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <span className="text-[#36c940] text-xl">
                  <MdMyLocation />
                </span>
                <span className="text-base text-[#999999]  font-normal">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-[#36c940] text-xl">
                  <MdSettingsPhone />
                </span>
                <span className="text-base text-[#999999]  font-normal">
                  +2 392 3929 210
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-[#36c940] text-xl">
                  <IoMail />
                </span>
                <span className="text-base text-[#999999]  font-normal">
                  info@yourdomain.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#151515] py-12">
        <div className="box-container text-center text-white px-6">
          <p className="text-xs font-normal">
            Copyright &copy;2025 All rights reserved | This template is made by{" "}
            <span>DaveCodeSolution</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
