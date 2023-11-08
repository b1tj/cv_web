import React from "react";

function Education() {
  return (
    <section className="font-sans-serif">
      <div className="mx-auto flex w-[1170px] flex-col py-[30px]">
        <div className="flex">
          <div className="ml-[40px] w-1/2 text-[16px] text-description">
            <h2 className="my-5 text-[24px] font-bold text-heading">
              My Education
            </h2>
            <p className="mb-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="ml-[60px] w-1/2">
            <h3 className="text-cef-heading mb-[10px] mt-[74px] text-[20px] font-semibold capitalize">
              engineering degree in information technology
            </h3>
            <p className="mb-[10px] text-[#999999]">
              <strong>HaNoi University of Mining and Geology</strong> / Octorber
              2020 / Current
            </p>
            <span className=" bg-green px-[10px] py-1 text-white">3.6 GPA</span>
            <hr className="my-5 h-[1px] border-none bg-[#333333]" />
            <p className="py-4 text-[#777777]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus praesentium aliquid, eos unde nemo ducimus non, sit
              fugiat, odio perferendis qui eius. Corporis, pariatur. Quidem
              molestiae eaque officia ex nobis.
            </p>
          </div>
        </div>
        <hr className=" my-3 h-[1px] border-none bg-[#999999]" />
        <div className="flex">
          <div className="ml-[40px] w-1/2 text-[16px] text-description">
            <h2 className="my-5 text-[24px] font-bold text-heading">
              Work Experience
            </h2>
            <p className="mb-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="ml-[60px] w-1/2">
            <h3 className="text-cef-heading mb-[10px] mt-[74px] text-[20px] font-semibold capitalize">
              Fresher Web Developer
            </h3>
            <p className="mb-[10px] text-[#999999]">
              <strong>HaNoi University of Mining and Geology</strong> / Octorber
              2022 / Current
            </p>
            <span className=" bg-green px-[10px] py-1 text-white">
              6 Months
            </span>
            <hr className="my-5 h-[1px] border-none bg-[#333333]" />
            <p className="py-4 text-[#777777]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus praesentium aliquid, eos unde nemo ducimus non, sit
              fugiat, odio perferendis qui eius. Corporis, pariatur. Quidem
              molestiae eaque officia ex nobis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
