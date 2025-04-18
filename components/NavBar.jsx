"use client";
import { motion } from "framer-motion";
import NavBarButtons from "./NavBarButtons";
import { useState } from "react";
export default function NavBar() {
  const [ActivePageState, setActivePageState] = useState("Home");
  const [buttonCss, setButtonCss] = useState(
    "flex bg-blue-900 h-1/2 rounded-3xl border-2 justify-center px-10 md:px-15 lg:px-20 xl:w-2/12 w-1/12 border-slate-500 bg-slate-400 hover:bg-slate-900 hover:text-slate-400 text-slate-900"
  );
  const [ActivebuttonCss, setActiveButtonCss] = useState(
    "flex justify-center bg-gray-900 w-1/12 self-end h-3/4 pt-1 rounded-t-3xl border-x-2 border-t-2 tabLink relative px-10 md:px-15 lg:px-20 xl:w-2/12 border-slate-500 bg-slate-900"
  );
  return (
    <div className="bg-slate-700 border-slate-500 sticky w-2/16top-0 w-full place-content-around flex items-center justify-items-center justify-around h-20 border-b-2 mb-20">
      <NavBarButtons
        ButtonName={"Home"}
        buttonCss={buttonCss}
        activePage={ActivePageState}
        setActivePageState={setActivePageState}
        ActivebuttonCss={ActivebuttonCss}
      ></NavBarButtons>
      <NavBarButtons
        ButtonName={"Projects"}
        buttonCss={buttonCss}
        activePage={ActivePageState}
        setActivePageState={setActivePageState}
        ActivebuttonCss={ActivebuttonCss}
      ></NavBarButtons>
      <NavBarButtons
        ButtonName={"Resume"}
        buttonCss={buttonCss}
        activePage={ActivePageState}
        setActivePageState={setActivePageState}
        ActivebuttonCss={ActivebuttonCss}
      ></NavBarButtons>
      <NavBarButtons
        ButtonName={"Skills"}
        buttonCss={buttonCss}
        activePage={ActivePageState}
        setActivePageState={setActivePageState}
        ActivebuttonCss={ActivebuttonCss}
      ></NavBarButtons>
    </div>
  );
}
