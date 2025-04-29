import { FaQuoteLeft } from "react-icons/fa6";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";
import { motion } from "motion/react";
import { testimonials } from "../../data";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [splideInstance, setSplideInstance] = useState(null);

  const goToSlide = (index) => {
    if (splideInstance) {
      splideInstance.go(index);
    }
  };

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
        <div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <span className="block font-semibold text-[#36c940] capitalize">
              Testimonial
            </span>
            <h2 className="text-3xl md:text-4xl">Successful Stories</h2>
          </motion.div>

          <div className="py-10 px-6">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                pagination: false,
                arrows: false,
                autoplay: true,
                rewind: false,
                interval: 3000,
                speed: 2000,
              }}
              onMounted={(splide) => setSplideInstance(splide)}
              onMove={(splide) => setCurrentSlide(splide.index)}
              className="flex w-full md:w-5xl md:h-[500px] mx-auto overflow-hidden shadow-md"
            >
              {testimonials.map(({ id, image }) => (
                <SplideSlide
                  key={id}
                  className="flex flex-col md:flex-row min-w-full h-full"
                >
                  <div className="w-full md:w-1/2 h-full ">
                    <img
                      src={image}
                      alt=""
                      className="object-cover w-full h-[300px] md:h-full"
                    />
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center p-6 gap-5 bg-white">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-full">
                        <img
                          src="https://preview.colorlib.com/theme/healthvest/images/person_1.jpg"
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                        <span className="absolute h-[30px] w-[30px] text-white flex items-center justify-center bg-[#36c940] rounded-full bottom-0 right-0 text-lg">
                          <FaQuoteLeft />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-[#222222] text-xl md:text-2xl font-bold">
                          Nicole Scott
                        </h4>
                        <span className="block uppercase text-sm font-semibold text-[#36c940] mt-2">
                          Marketing Manager
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-[#999999] leading-[28px] mt-3">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics.
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>

            {/* indicator */}
            <div className="mt-12 flex justify-center gap-x-2">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-4 h-4 rounded-full block  ${
                    idx === currentSlide
                      ? "bg-[#36c940] scale-100"
                      : "bg-gray-200"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
