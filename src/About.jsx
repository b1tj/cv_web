import React from "react";
import {
  BsFillPencilFill,
  BsFillPinFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { RiEarthFill } from "react-icons/ri";
function About() {
  const hobbies = [
    {
      icon: <RiEarthFill />,
      title: "Web design",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    },
    {
      icon: <BsFillPinFill />,
      title: "SEO",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    },
    {
      icon: <BsFillPencilFill />,
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    },
    {
      icon: <BsFillPeopleFill />,
      title: "Online Marketing",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    },
  ];

  return (
    <section id="about" className="bg-section-grey font-sans-serif">
      <div className="mx-auto flex w-[1170px]">
        <section className="w-[40%]">
          <img
            src="https://i.imgflip.com/dbf2g.jpg"
            className="h-[500px] w-full object-cover"
            alt="My Image"
          />
        </section>
        <div className="ml-10 w-[60%]">
          <h2 className="pb-6 pt-5 text-[24px] font-semibold text-[#555555]">
            About me
          </h2>
          <p className="text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua,, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem
            ipsum dolor sit amet.
          </p>
          <p className="text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <section className="grid grid-flow-col grid-rows-2 gap-x-8">
            {hobbies.map((item, index) => {
              return (
                <div key={index} className="flex items-start">
                  <div className="mt-6 text-[40px]">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="my-5 text-[20px] font-semibold text-[#555555]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-[#666666]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
