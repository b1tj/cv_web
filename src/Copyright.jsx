import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoPinterestAlt,
} from "react-icons/bi";

function Copyright() {
  const socials = [
    { icon: <BiLogoFacebook />, link: "facebook.com" },
    { icon: <BiLogoTwitter />, link: "twitter.com" },
    { icon: <BiLogoLinkedin />, link: "linkedin.com" },
    { icon: <BiLogoInstagramAlt />, link: "instagram.com" },
    { icon: <BiLogoPinterestAlt />, link: "pinterest.com" },
  ];
  return (
    <section className="bg-dark py-5">
      <div className="mx-auto flex w-[1170px] flex-col items-center justify-center text-center">
        <p className="text-[16px] text-[#6A6E71]">
          Copyright © 2023 R1o-built with passion
        </p>
        <ul className="mt-[10px] flex gap-1 text-white">
          {socials.map((item, index) => {
            return (
              <li
                key={index}
                className="block rounded-full bg-[#333333] p-[6px] text-[20px]"
              >
                <a href={`https://${item.link}`} className="" target="_blank">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Copyright;
