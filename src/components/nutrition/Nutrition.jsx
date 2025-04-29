import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react";

const Nutrition = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };
  return (
    <section className="bg-[url(https://preview.colorlib.com/theme/healthvest/images/bg_5.jpg.webp)] bg-cover bg-no-repeat bg-center">
      <div className="bg-black/40 py-20 ">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="box-container px-6"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#36c940] text-white flex items-center justify-center text-3xl">
              <FaPlay />
            </div>

            <div className="text-white space-y-5 text-center">
              <span className="block font-bold text-sm uppercase tracking-widest">
                Finding Balance In Food, Health And Wellness
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-7xl w-full max-w-5xl mb-5">
                Start Your Body Changing With Healthy Nutrition
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <span className="btn bg-[#36c940] text-white font-bold ">
                Get Started
              </span>
              <span className="btn text-black bg-white font-bold">
                Contact Us
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nutrition;
