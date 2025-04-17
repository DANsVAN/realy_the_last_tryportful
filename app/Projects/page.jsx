import Projects from "@/components/Projects_Tile";
import cardGame from "../images/Screenshot 2024-02-02 174501.png";
import maths from "../images/Screenshot 2024-02-02 190925.png";
export default function page1() {
  return (
    <div className=" grid h-screen items-center justify-items-center grid-flow-row grid-cols-3 place-content-center justify-center my-4 sm:my-6 md:my-12 lg:my-32 xl:my-80 gap-20 mx-24 sm:mx-32 md:mx-48 lg:mx-64 xl:mx-80 2xl:mx-96">
      <Projects
        img={cardGame}
        url="https://no-mercy-card-game.vercel.app/"
      ></Projects>
      <Projects
        img={maths}
        url="https://quickmath-real-4fl1.vercel.app/"
      ></Projects>
      <Projects img={""} url=""></Projects>
      <Projects img={""} url=""></Projects>
      <Projects img={""} url=""></Projects>
      <Projects img={""} url=""></Projects>
      <Projects img={""} url=""></Projects>
      <Projects img={""} url=""></Projects>
      <Projects img={""} url=""></Projects>
    </div>
  );
}
