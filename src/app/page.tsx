

import Header from "@/components/Header";
import About from "@/components/About";
export default function Home() {
  return (
    <div>
      <Header/>
      <div className="flex items-center justify-center bg-[#ccf4dc] clip-diagonal pt-20 pl-3 flex-wrap">
        <div className="">
          <p className="text-5xl max-w-[650px] font-medium md:text-6xl 2xl:text-7xl">Um app, milhares de patinhas mais felizes.</p>
         
              <button className="flex mt-10 bg-white justify-center items-center gap-3 rounded-2xl w-[50%] py-2 cursor-pointer hover:opacity-85 min-w-[250px]">
                <img
                className="w-[20%]"
                src="/google-play.png" alt="" />
                <div>
                  <p>Download android</p>
                  <p className="text-2xl  ">Google Play</p>
                </div>
              </button>
    
       
        </div>
        <img
          className="w-[550px] mb-16"
          src="/cell.png" alt="" />
      </div>
      <About/>
    </div>
  );
}
