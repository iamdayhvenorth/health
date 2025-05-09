import React from "react";

const Appointment = () => {
  return (
    <section
      id="appointment"
      className="bg-[url(https://preview.colorlib.com/theme/healthvest/images/bg_3.jpg.webp)] bg-cover bg-no-repeat bg-center bg-fixed"
    >
      <div className="bg-[#36c940]/90 py-20 px-3">
        <div className="box-container">
          <div className="flex flex-col-reverse md:flex-row items-center gap-4">
            {/* appointment form */}
            <div className="w-full md:w-1/2 bg-white p-8">
              <div>
                <span className="block uppercase font-medium text-[#36c940] mb-2">
                  Drop a message
                </span>
                <h2 className="text-2xl font-normal">Make An Appointment</h2>
              </div>

              <form className="py-8 flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row w-full gap-5">
                  <div className="w-full lg:w-1/2 bg-[#f8f8f8] p-5 flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="uppercase text-sm font-semibold text-[#222222] tracking-[1px]"
                    >
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Your Full Name"
                      className="bg-transparent focus:outline-none text-[rgba(0,0,0,0.4)]"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 bg-[#f8f8f8] p-5 flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="uppercase text-sm font-semibold text-[#222222] tracking-[1px]"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="bg-transparent focus:outline-none text-[rgba(0,0,0,0.4)]"
                    />
                  </div>
                </div>

                <div className="bg-[#f8f8f8] flex flex-col gap-2 p-5">
                  <label
                    htmlFor="Subject"
                    className="uppercase text-sm font-semibold text-[#222222] tracking-[1px]"
                  >
                    Subject
                  </label>

                  <input
                    required
                    name="Subject"
                    id="Subject"
                    placeholder="Subject"
                    className="focus:outline-none "
                  />
                </div>

                <div className="bg-[#f8f8f8] flex flex-col gap-2 p-5">
                  <label
                    htmlFor="message"
                    className="uppercase text-sm font-semibold text-[#222222] tracking-[1px]"
                  >
                    Message
                  </label>

                  <textarea
                    required
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="focus:outline-none min-h-[140px]"
                  />
                </div>

                <div className="w-full">
                  <button className="px-6 py-4 text-white text-sm font-bold rounded-sm bg-[#36c940] uppercase cursor-pointer w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* right */}
            <div className="w-full md:w-1/2 p-6">
              <div className="w-full flex flex-col gap-5">
                <div>
                  <span className="text-base font-semibold block leading-[28px] text-white">
                    Who we are
                  </span>
                  <h2 className="text-4xl lg:text-[3.375rem] text-white md:leading-[75px]">
                    We Best Nutrition
                  </h2>

                  <p className="text-base text-white font-normal mt-3">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>

                <ul className="space-y-7">
                  {[...Array(3)].map((_, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="min-w-15 h-15 lg:min-w-20 lg:h-20 rounded-full flex items-center justify-center bg-white"></span>
                      <div>
                        <h3 className="text-2xl font-normal text-white">
                          Natural & Healthy Foods
                        </h3>
                        <p className="text-base font-normal text-white mt-2">
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia. It is a
                          paradisematic country.
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
