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
          My name is Jordan Weston Caldwell, and I'm currently 20 years old and
          in my junior year at Utah State University here in Logan, Utah. My
          passion lies firmly in the world of computers, which is why I've
          chosen to major in Technology Systems with a concentration in
          Information and Computer Technology. To further solidify my
          understanding and skills in this area, I'm also pursuing a minor in
          Computer Science.Even before starting my university studies, I was
          eager to gain practical experience, leading me to earn a software
          engineering certificate from Bridgerland Technical College. Looking
          ahead, my academic journey doesn't end with my bachelor's degree. I'm
          planning to continue my education and pursue a Master's degree in
          Computer Science to deepen my knowledge and open up even more
          opportunities in the field I'm so enthusiastic about.
        </p>
      </div>
    </div>
  );
}
