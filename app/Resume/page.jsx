import ResumeImg from "../images/JORDAN_CALDWELL_Resume (4)-1.png";
// import JS from "../images/javascript-logo.svg";
import Image from "next/image";
export default function page1() {
  return (
    <div className="py-28 inset-0 mx-auto my-auto lg:w-3/6 lg:h-3/6 sm:w-4/6 sm:h-4/6 w-5/6 h-5/6 text-center -z-50 relative">
      <Image
        src={ResumeImg}
        alt="Resume"
        width={2000}
        height={3000}
        className=" pb-10"
      />
    </div>
  );
}
