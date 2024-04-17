import { incompleeta } from "@/app/fonts-loader";
import {
  FaLinkedin,
  FaSquareEnvelope,
  FaSquareTwitter,
  FaSquareGithub,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="min-h-svh flex flex-col justify-around items-center">
      <div className="text-center">
        <h1
          className={
            incompleeta.className +
            " text-7xl md:text-9xl lg:text-[200px] animated-gradient"
          }
        >
          SN SAKIB
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-5xl mt-3 lg:mt-5">
          Web & Blockchain Developer
        </h2>
      </div>
      <div className="text-white text-3xl md:text-4xl lg:text-5xl flex justify-around w-full md:w-3/12">
        <FaSquareEnvelope />
        <FaLinkedin />
        <FaSquareTwitter />
        <FaSquareGithub />
      </div>
    </div>
  );
}
