import { PiCheckCircleFill } from "react-icons/pi";
import { Element } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="box-container py-20 ">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-[300px] lg:p-6 md:h-auto p">
            <img
              src="https://preview.colorlib.com/theme/healthvest/images/about.jpg.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:px-4">
            <div className="flex flex-col gap-4">
              <span className="block font-semibold text-[#36c940] capitalize">
                About Us
              </span>
              <h2 className="text-black font-normal text-3xl md:text-5xl">
                Better Eat, Better Life
              </h2>
              <h3 className="text-xl lg:text-3xl lg:leading-10">
                If You Get A Better Nutrition, You Can Enjoy A Healthy Age
              </h3>
              <p className="text-base text-[#999999]">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <h4 className="text-2xl">We Can Help You</h4>

              <ul className="grid md:grid-cols-2 space-y-3">
                {[...Array(8)].map((_, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 items-center font-medium text-base"
                  >
                    <PiCheckCircleFill className="text-[#36c940]" />
                    <span>Balance Body & Mind</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
