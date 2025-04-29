import { Element } from "react-scroll";

const Services = () => {
  return (
    <section id="services">
      <div className="box-container py-20">
        <div>
          <div className="text-center">
            <span className="block font-semibold text-[#36c940] capitalize">
              What we do
            </span>
            <h2 className="text-4xl">Services</h2>
          </div>
          <div className="py-15">
            {/* temporary styling */}
            <div className="services-row  grid md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="col shadow-[0px_5px_25px_-2px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    <img
                      src="https://media.istockphoto.com/id/2178146294/photo/health-engineer-bioprinting-models-at-a-3d-laboratory.webp?a=1&b=1&s=612x612&w=0&k=20&c=0q5ooPcY5hx1UVZwPQnHsF2WuvHF5z7IfcB9EulVCOk="
                      alt=""
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-y-5">
                    <h2 className="text-2xl">Weight Loss Program</h2>

                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                    </p>

                    <button>Learn More</button>
                  </div>
                </div>
              ))}
            </div>

            {/* indicator */}
            <div className="mt-12 flex justify-center gap-x-2">
              {[...Array(3)].map((_, idx) => (
                <span
                  key={idx}
                  className={`w-4 h-4 rounded-full block  ${
                    idx === 0 ? "bg-black/40 scale-100" : "bg-gray-200"
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

export default Services;
