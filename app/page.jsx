"use client";
import myImg from "./images/1891C0A5-9256-4CDB-8D62-B153B721B9C4.JPG";
import NavBar from "@/components/NavBar";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="absolute inset-0 mx-auto my-auto bg-transparent lg:w-2/6 lg:h-2/6 sm:w-4/6 sm:h-4/6 w-5/6 h-5/6 md:w-3/6 md:h-3/6 text-center ">
      <div>
        {/* <h1 className="py-5">Jordan Weston Caldwell</h1> */}
        <Image
          src={myImg}
          alt="Jordan Weston Caldwell"
          width={1000}
          height={1500}
          className="border-2 border-slate-500"
        />
        <p className="bg-transparent py-20">
          I'm Jordan, an 18-year-old with a passion for wrestling and a deep
          love for the world of computers. My high school days were marked by
          the physical challenges and camaraderie on the wrestling mat at
          Ridgeline High. Now, I'm navigating the exciting terrain of Computer
          Information Technology at USU, delving into the intricacies of the
          digital realm. Having graduated from B Tech's web and mobile
          development program, I've not only acquired theoretical knowledge but
          also gained invaluable hands-on experience that fuels my enthusiasm
          for technology. Computers have become my canvas, and whether I'm
          coding, designing, or troubleshooting, I find fulfillment in every
          aspect of the tech landscape. passions will take me in the dynamic
          field of Information Technology
        </p>
      </div>
    </div>
  );
}
