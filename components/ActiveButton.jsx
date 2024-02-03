export default function ActiveButton() {
  return (
    <Link
      href={ButtonName == "Home" ? "/" : ButtonName}
      className={activePage == ButtonName ? ActivebuttonCss : buttonCss}
      // onClick={() => {
      //   onClickHandler(ButtonName);
      // }}
    ></Link>
  );
}
