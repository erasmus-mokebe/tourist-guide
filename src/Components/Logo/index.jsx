import { useSelector } from "react-redux";

const Logo = props => {
  const sideBarOpened = useSelector(state => state.sideBar.opened);

  return (
    <div className={`${props.className} flex justify-center items-center`}>
      { sideBarOpened
        ? <img className="cursor-pointer" src="src/assets/icons/back.svg" alt="go back" />
        : <img src="src/assets/icons/logo.svg" alt="logo" /> }
    </div>
  );
}

export default Logo;