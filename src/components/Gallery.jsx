import { useRef, useState } from "react";
import ImageCard from "./ImageCard.jsx";
import SideBar from "./SideBar.jsx";

export default function Gallery() {
  const [images, setImages] = useState(["/img.png", "/img.png", "/img.png"]);
  const stripRef = useRef(null);

  const onAdd = () => {
    setImages((prev) => [...prev, "/img.png"]);
  };

  const scrollBy = (dir) => {
    const el = stripRef.current;
    if (!el) return;
    const delta = dir === "left" ? -300 : 300;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <>
      <section className="min-h-0 min-w-0  w-auto relative rounded-xl bg-[#363C43] shadow-[5.67px_5.67px_3.7px_0px_rgba(0,0,0,0.4)]  md:py-[11px] md:px-4 mx-[34px] ">
        <SideBar />
        <div className="flex items-center justify-between px-4">
          <div className="text-[#fff] font-poppins text-center font-medium text-[14px] rounded-[12px] bg-[#171717] py-[9px] px-[21px] shadow-[inset_0_4px_10px_2px_#00000040]">
            Gallery
          </div>
          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={onAdd}
              className="mr-[4px] px-2 py-[7px] bg-white/5 rounded-full font-plusJak text-[10px] text-[#fff] text-center font-[700] uppercase backdrop-blur-[10.56px] shadow-[inset_0_3.26px_3.26px_0_#ffffff26,inset_0_0_1px_0_#ffffff0d,5px_5px_5px_0_#00000066,-0.5px_-0.5px_6px_0_#ffffff40]"
            >
              + Add Image
            </button>
            <button
              onClick={() => scrollBy("left")}
              className="h-8 w-8 rounded-full shadow-[4px_5px_30px_5px_#101213,_-3px_-2px_20px_-2px_#96BEE7] grid place-items-center text-slate-100 bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] hover:bg-[#161718] hover:bg-none transition duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 32 24"
                fill="none"
                stroke="#6F787C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18L3 12L9 6" />
                <line x1="3" y1="12" x2="29" y2="12" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy("right")}
              className="h-8 w-8 rounded-full  shadow-[4px_5px_30px_5px_#101213,_-3px_-2px_20px_-2px_#96BEE7] grid place-items-center text-slate-100 bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)]  hover:bg-[#161718] hover:bg-none transition duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 32 24"
                fill="none"
                stroke="#6F787C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 6L29 12L23 18" />
                <line x1="3" y1="12" x2="29" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={stripRef}
          className="py-6 flex gap-[15px] px-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <ImageCard key={src + i} src={src} />
          ))}
        </div>
      </section>
    </>
  );
}
