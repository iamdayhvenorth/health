import React, { useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import About from "../../components/about/About";
import Procedure from "../../components/procedure/Procedure";
import Nutrition from "../../components/nutrition/Nutrition";
import Testimonial from "../../components/testimonial/Testimonial";
import Appointment from "../../components/appointment/Appointment";
import { Events, scrollSpy } from "react-scroll";
import Footer from "../../components/footer/Footer";
import { motion } from "motion/react";

const Home = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <main className="bg-[#f8f8f8]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <section className="w-full bg-[url(https://preview.colorlib.com/theme/healthvest/images/bg_6.jpg.webp)] bg-cover bg-no-repeat bg-center">
        <div className="bg-black/60 py-10 lg:p-12">
          <div className="box-container flex justify-center py-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col md:flex-row md:items-center gap-8 overflow-hidden"
            >
              <div className="px-6">
                <span className="text-[#36c940] font-bold tracking-widest text-sm  uppercase">
                  Finding Balance in Food, Health and Wellness
                </span>
                <h3 className="text-3xl md:text-[2.5rem] font-normal md:leading-12 text-white w-full lg:max-w-xl mt-2">
                  Get Health and Instruction Coach
                </h3>
              </div>

              <div className="px-6">
                <span className="block w-fit text-nowrap uppercase text-sm font-bold py-4 px-6 lg:py-6 lg:px-12 bg-[#36c940] text-white">
                  Make an Appointment
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Procedure />
      <Nutrition />
      <Testimonial />
      <Appointment />
      <Footer />
    </main>
  );
};

export default Home;

{
  /* <button
className={`fixed bottom-5 right-5 bg-[#36c940] rounded-full h-10 w-10 flex items-center justify-center text-xl cursor-pointer text-white z-[999] transition-all duration-300 ease-linear hover:-translate-y-2 shadow-[0px_0px_19px_1px_rgba(0,0,0,0.10)] `}
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
<BsArrowUp />
</button> */
}
