import ResumeImg from "../images/resume1_page-0001.jpg";
// import JS from "../images/javascript-logo.svg";
import Image from "next/image";
export default function page1() {
  return (
    <div className="absolute inset-0 mx-auto my-auto bg-transparent lg:w-3/6 lg:h-3/6 sm:w-4/6 sm:h-4/6 w-5/6 h-5/6 text-center py-10">
      <Image
        src={ResumeImg}
        alt="Resume"
        width={2000}
        height={3000}
        className=""
      />
    </div>
  );
}
