import GrideTile from "@/components/GrideTile";
import jsImg from "../../app/images/javascript-logo.svg";
import reactImg from "../../app/images/1174949_js_react js_logo_react_react native_icon.png";
import nextimg from "../../app/images/1657707878-nextjs_logo.png";
import tailwindimg from "../../app/images/4db62a7c-7d70-419c-96d2-6c3a4dc77ea5-logo.webp";
import htmlimg from "../../app/images/317755_badge_html_html5_achievement_award_icon.png";
import cssimg from "../../app/images/4202020_css3_html_logo_social_social media_icon.png";
import pythonimg from "../../app/images/4518857_python_icon.png";
import Cppimg from "../../app/images/7564189_c_logo_plus plus_plus_+ +_icon.png";
import javaimg from "../../app/images/java.png";
import { motion } from "framer-motion";

export default function page1() {
  return (
    <div className=" grid h-screen items-center justify-items-center grid-flow-row grid-cols-3 place-content-center justify-center my-4 sm:my-6 md:my-12 lg:my-32 xl:my-80 gap-20 mx-24 sm:mx-32 md:mx-48 lg:mx-64 xl:mx-80 2xl:mx-96 ">
      <GrideTile img={jsImg}></GrideTile>
      <GrideTile img={pythonimg}></GrideTile>
      <GrideTile img={Cppimg}></GrideTile>
      <GrideTile img={reactImg}></GrideTile>
      <GrideTile img={htmlimg}></GrideTile>
      <GrideTile img={cssimg}></GrideTile>
      <GrideTile img={tailwindimg}></GrideTile>
      <GrideTile img={nextimg}></GrideTile>
      <GrideTile img={javaimg}></GrideTile>
    </div>
  );
}
