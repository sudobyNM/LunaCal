import { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  const [_, set_] = useState(null);

  return (
    <div className="min-h-screen bg-[#000]  flex items-center justify-center px-2 ">
      <div className="w-full max-w-[69rem] min-h-0 h-[calc(100vh-7.5rem)] px-4 md:py-16 gap-2 overflow-hidden rounded-[16px] text-slate-200 bg-[linear-gradient(180deg,_#373E44_-100%,_#191B1F_100%)] md:grid md:grid-cols-2 ">
        <div className="hidden md:block min-w-0 rounded-[16px] w-full h-full bg-[rgba(97,97,97,0.82)] border-[.2px] border-[#96bee7]" />

        <div className="grid relative grid-rows-2-[1fr_1fr] w-full min-h-0 min-w-0 gap-3">
          <Tabs />
          <div className="h-[3px] rounded-[16px] mx-[66px] backdrop-blur-[9.84px] shadow-[0_4px_4px_0_#00000054] bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]"></div>

          <Gallery />
          <div className="h-[3px] absolute bottom-[-16px] left-[66px] right-[66px]  rounded-[16px] backdrop-blur-[9.84px] shadow-[0_4px_4px_0_#00000054] bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
