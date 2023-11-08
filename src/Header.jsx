import React from "react";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(0);

  const navItems = [
    { to: "#about", title: "About" },
    { to: "#skills", title: "Skills" },
    { to: "#experience", title: "Experience" },
    { to: "#portofolio", title: "Portofolio" },
    { to: "#contact", title: "Contact" },
  ];

  const handleOnClick = (index) => {
    setActive(index);
  };

  return (
    <section
      className={`flex flex-col items-center justify-center font-serif `}
    >
      <div className="mx-auto block h-[600px] w-full bg-hero-image bg-cover bg-no-repeat text-white ">
        <div className="flex flex-col items-center justify-center pt-[200px]">
          <h2 className=" w-[600px] border-y-4 border-solid py-4 text-center text-[50px] font-bold leading-10 ">
            Web & Graphic Designer
          </h2>
          <button className="mt-8 rounded-none border-2 px-5 py-2 text-[20px] font-semibold ">
            Learn more
          </button>
        </div>
      </div>
      <nav className="block w-full bg-[#252F31]">
        <div className="mx-auto my-3 flex w-[1170px] items-center justify-between font-sans text-[16px] text-white ">
          <h2 className="text-[28px] font-semibold uppercase ">
            Hoag<span className="text-green">Le</span>
          </h2>
          <ul className="flex justify-between gap-4">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    active === index ? "text-green" : ""
                  } cursor-pointer`}
                  onClick={() => handleOnClick(index)}
                >
                  <a href={`${item.to}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
}
