import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBarSlice";

import LogoIcon from "../../assets/icons/logo.svg";
import back from "../../assets/icons/back.svg";

export const Logo = (props) => {
  const sideBarOpened = useSelector((state) => state.sideBar.opened);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeSideBar());
  };

  return (
    <div className={`${props.className} flex justify-center items-center`}>
      {sideBarOpened ? (
        <img
          className="cursor-pointer"
          src={back}
          alt="go back"
          onClick={close}
        />
      ) : (
        <img src={LogoIcon} alt="logo" />
      )}
    </div>
  );
};
