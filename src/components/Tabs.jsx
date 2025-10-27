import { useState } from "react";
import SideBar from "./SideBar.jsx";

export default function Tabs() {
  const tabs = [
    { key: "about", label: "About Me" },
    { key: "exp", label: "Experiences" },
    { key: "rec", label: "Recommended" },
  ];
  const [active, setActive] = useState("about");

  const activeIndex = tabs.findIndex((t) => t.key === active);

  return (
    <>
      <section className="h-full  relative  min-h-0 min-w-0 w-auto rounded-xl bg-[#363C43] shadow-[5.67px_5.67px_3.7px_0px_rgba(0,0,0,0.4)]  p-3 md:p-4 mx-[35px] my-0 flex  flex-col justify-center">
        <SideBar />

        <div className="relative flex rounded-[12px] bg-[#171717]  top-[-6px] p-[4px] h-[64px] gap-2 mx-[14px] overflow-visible">
          <span
            aria-hidden
            className="absolute top-[4px] left-[4px] bottom-[4px] rounded-[10px] bg-[#28292F]  shadow-[8.49px_8.87px_50.47px_20.43px_#0A0A0A,-2.43px_-10.1px_40.1px_5.1px_#485B71] transition-transform duration-600 will-change-transform"
            style={{
              width: "calc((100% - 8px) / 3)",
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={
                " overflow-hidden relative z-[1] flex-1 h-full  flex items-center justify-center px-[14px] py-[2px] text-sm md:text-base rounded-[10px] transition outline-none" +
                (active === t.key
                  ? " text-[#fff]"
                  : " text-[#a3adb2] before:z-[0] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[rgba(39,39,40,0.4)] before:to-[rgba(150,190,231,0.1)] before:transition-transform before:duration-500 before:origin-left before:scale-x-0 hover:before:scale-x-100")
              }
            >
              <span className="relative z-[1] font-poppins font-medium text-[13px]">
                {t.label}
              </span>
            </button>
          ))}
        </div>

        <div
          className="mt-1 rounded-xl p-4 text-sm leading-6 text-slate-300 max-h-48 overflow-y-auto
[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:max-h-1
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-transparent
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-[#888989] [&::-webkit-scrollbar-thumb]:to-[#4A4E54]
dark:[&::-webkit-scrollbar-track]:bg-transparent
dark:[&::-webkit-scrollbar-thumb]:bg-gradient-to-b dark:[&::-webkit-scrollbar-thumb]:from-[#888989] dark:[&::-webkit-scrollbar-thumb]:to-[#4A4E54]"
        >
          <p className="font-plusJak text-[14.5px] text-[#969696] font-regular leading-[18px]">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>

          <p className="font-plusJak text-[14.5px] text-[#969696] font-regular leading-[18px] mt-5">
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </section>
    </>
  );
}
