import Link from "next/link";
import ActiveButton from "./ActiveButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavBarButtons({
  ButtonName,
  buttonCss,
  activePage,
  setActivePageState,
  ActivebuttonCss,
}) {
  let css = "";
  const pathName = usePathname();
  // console.log(pathName);
  //   if (activePage == ButtonName) {
  //     setButtonCss("bg-red-900 w-1/12");
  //   }
  function onClickHandler() {
    buttonCss = "bg-blue-900 w-1/6 ";
    setActivePageState(ButtonName);
  }

  if (pathName == "/" + ButtonName) {
    css = ActivebuttonCss;
  } else if (pathName + ButtonName == "/" + "Home") {
    css = ActivebuttonCss;
  } else {
    css = buttonCss;
  }

  return (
    <Link
      href={ButtonName == "Home" ? "/" : ButtonName}
      // className={
      //   pathName + "Home" == pathName + ButtonName
      //     ? ActivebuttonCss
      //     : pathName == "/" + ButtonName
      //     ? ActivebuttonCss
      //     : buttonCss
      // }
      className={css}
    >
      <div>{ButtonName}</div>
    </Link>
  );
}
