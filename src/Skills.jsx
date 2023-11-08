import React, { useState, useLayoutEffect, useRef } from "react";
import { BsDot } from "react-icons/bs";

function Skills() {
  const ref = useRef(null);
  const [isInViewPort, setIsInViewPort] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const distance =
      window.innerHeight - ref.current.getBoundingClientRect().top;
    if (distance > -10) {
      setIsInViewPort(true);
    } else {
      setIsInViewPort(false);
    }
  };

  const skills = [
    "HTML5/CSS3",
    "Javascript",
    "React",
    "Tailwind CSS",
    "NodeJS",
    "ExpressJS",
    "MongoDB, MySQL",
  ];
  const delays = [
    "animation-delay-[100]",
    "animation-delay-[150]",
    "animation-delay-[200]",
    "animation-delay-[250]",
    "animation-delay-[300]",
    "animation-delay-[350]",
    "animation-delay-[400]",
  ];
  return (
    <section id="skills" className="pb-[50px] pt-[30px] font-sans-serif">
      <div className="mx-auto flex w-[1170px] gap-5 ">
        <div className="ml-10 w-1/2">
          <h2 className="mb-5 mt-6 text-2xl text-heading ">My skills</h2>
          <p className="text-description">
            I have over 6 months of experience as a web developer, and I have a
            proven track record of success in delivering high-quality websites
            and web applications. I am also skilled in database management,
            cloud computing, and software development methodologies. I am a
            quick learner and I am always eager to take on new challenges.
          </p>
          <button className="mt-5 border-[3px] border-green px-[30px] py-[10px] text-[14px] font-bold leading-[15px] text-green">
            Contact me
          </button>
        </div>
        <section className="w-1/2">
          {skills.map((item, index) => {
            return (
              <div key={index} className="flex items-center" ref={ref}>
                <span className=" text-5xl">
                  <BsDot />
                </span>
                <p
                  className={`translate-x-[100px] text-2xl italic tracking-wider opacity-0 ${
                    isInViewPort ? "animate-slide-tl" : ""
                  } ${delays[index]} `}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Skills;
