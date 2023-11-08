import React from "react";

function Contact() {
  return (
    <section
      className="mr-60px bg-[#252F31] pb-[70px] pt-[50px] font-sans-serif"
      id="contact"
    >
      <div className="mx-auto flex w-[1170px]">
        <section className="text-contact-color ml-5 w-1/2 text-[16px] leading-[1.7] ">
          <h2 className="my-5 text-2xl font-bold text-white">Contact me</h2>
          <p className="my-4 leading-[1.7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem
            ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="my-4">
            123 33rd Street <br /> East Saskatoon, Sk <br />
            S7K 1R9.
          </p>
          <p>
            <strong className="text-[#D1D6DA]">Email:</strong>{" "}
            hhoangle2323@gmail.com
            <br />
            <strong className="text-[#D1D6DA]">Phone:</strong> 01234567899
          </p>
        </section>
        <section className="ml-[30px] w-[45%]">
          <form action="" className="flex flex-col text-white">
            <label htmlFor="name" className="my-[10px] text-[#D1D6DA]">
              Name *
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="bg-input mb-[10px] w-4/5 p-[10px]"
            />

            <label htmlFor="email" className="my-[10px] text-[#D1D6DA]">
              Email Address *
            </label>

            <input
              type="text"
              name="email"
              placeholder="youremail@gmail.com"
              className="bg-input mb-[10px] w-4/5 p-[10px] "
            />

            <label htmlFor="message" className="my-[10px] text-[#D1D6DA]">
              Message *
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="bg-input mb-[10px] w-4/5 p-[10px]"
            ></textarea>
            <input
              type="button"
              value="Contact me"
              className="bg-dark mt-[10px] cursor-pointer self-start px-5 py-[10px] text-[14px] uppercase leading-none"
            />
          </form>
        </section>
      </div>
    </section>
  );
}

export default Contact;
