import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function GrideTile({ img }) {
  console.log("hi", img, "jsImg", "hi");
  return (
    <div className="h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:w-48 lg:h-48 xl:h-64 xl:w-64 2xl:h-80 2xl:w-80 justify-self-auto p-4">
      <Image src={img} alt="icon" width={1536} height={1536} className="" />
    </div>
  );
}
