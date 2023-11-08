import React from "react";

function Features() {
  const features = [
    {
      title: "values",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "goals",
      description:
        "To become a pro website developer with extraodinary skills :)",
    },
    {
      title: "hobbies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="block pb-[50px] pt-10 ">
      <div className="mx-auto flex w-[1170px] justify-between gap-10">
        {features.map((item, index) => {
          return (
            <section key={index} className="flex-1">
              <h2 className="my-5 text-[24px] font-bold uppercase text-[#555]">
                {item.title}
              </h2>
              <p className="my-4 text-[#888888] ">{item.description}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
