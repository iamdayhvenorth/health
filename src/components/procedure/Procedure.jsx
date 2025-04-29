import { motion } from "motion/react";

const Procedure = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section>
      <div className="box-container py-20">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span className="block font-semibold text-[#36c940] capitalize">
            Procedure
          </span>
          <h2 className="text-4xl">How if Works?</h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.2 },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-10 grid md:grid-cols-2 lg:grid-cols-4"
        >
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="p-10 flex flex-col items-center gap-y-5 ">
              <div className="relative w-[140px] h-[140px] rounded-full border-[6px] border-white">
                <span className=" absolute h-8 w-8 text-white flex items-center justify-center bg-[#36c940] rounded-full font-bold text-lg">
                  1
                </span>
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://preview.colorlib.com/theme/healthvest/images/services-2.jpg.webp"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-medium text-black">
                  Trusted Services
                </h2>

                <p className="my-5 text-[#999999] text-base font-normal">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>

                <button className="w-fit border border-[#36c940] py-[5px] px-[10px] text-[#36c940] uppercase font-semibold text-sm cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Procedure;
