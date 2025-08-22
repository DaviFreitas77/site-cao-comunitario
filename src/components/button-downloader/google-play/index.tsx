import { SiGoogleplay } from "react-icons/si";
import Image from "next/image";
export default function ButtonGoogle() {
  return (
    <button className="flex  bg-white justify-center items-center gap-3 rounded-2xl py-2 cursor-pointer hover:opacity-85 h-[50px] w-full sm:w-[300px] sm:h-[80px] shadow-lg shadow-black">
      <Image width={80} height={80} alt="google-play" src="/google-play.png" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />

      <div>
        <p className="hidden sm:block">Download android</p>
        <p className="font-medium">Google Play</p>
      </div>
    </button>
  );
}
