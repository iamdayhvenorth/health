import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home">
      <section className="w-full relative min-h-[750px]  h-screen  bg-[url(https://preview.colorlib.com/theme/healthvest/images/bg_1.jpg.webp)] bg-cover  bg-no-repeat bg-top-right">
        {/* overlay */}
        <div className="overlay" />

        {/* hero content */}
        <div className="box-container p-6 xl:p-0 hero h-full flex items-center relative z-10">
          <div className="w-full lg:max-w-[630px]">
            <div>
              <span className="uppercase font-medium text-white text-base tracking-widest">
                Finding Balance In Food, Health and Wellness
              </span>
              <h1 className="text-4xl md:text-6xl text-white mb-6 leading-11 md:leading-16">
                Eat Mindfully, <br /> Sweat Often & Self Love Always
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <span className="btn bg-[#36c940] text-white font-bold">
                Contact us
              </span>
              <span className="btn text-black bg-white font-bold">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
