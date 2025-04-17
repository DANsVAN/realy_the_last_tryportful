import Image from "next/image";
import Link from "next/link";
export default function Projects({ img, url }) {
  console.log("hi", img, "jsImg", "hi");
  if (img == "") {
    return (
      <div className="rounded-lg border-slate-500 border h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:w-48 lg:h-48 xl:h-64 xl:w-64 2xl:h-80 2xl:w-80 justify-self-auto ">
        <h1 className="text-center">Coming Soon</h1>
      </div>
    );
  } else {
    return (
      <div className="">
        <Link
          className="h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:w-48 lg:h-48 xl:h-64 xl:w-64 2xl:h-80 2xl:w-80 justify-self-auto "
          href={url}
        >
          <Image
            src={img}
            alt="icon"
            width={1536}
            height={1536}
            className="rounded-lg border-slate-500 border"
          />
        </Link>
      </div>
    );
  }
}
