import { hikou_outline } from "@/app/fonts-loader";

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1
        className={
          hikou_outline.className + " text-7xl md:text-9xl lg:text-[200px]"
        }
      >
        S N SAKIB
      </h1>
    </div>
  );
}
