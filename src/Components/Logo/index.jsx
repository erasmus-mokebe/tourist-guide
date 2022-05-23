import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBarSlice";

const Logo = (props) => {
  const sideBarOpened = useSelector((state) => state.sideBar.opened);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeSideBar());
  };

  return (
    <div className={`${props.className} flex justify-center items-center pl-2`}>
      {sideBarOpened ? (
        <img
          className="cursor-pointer"
          src="src/assets/icons/back.svg"
          alt="go back"
          onClick={close}
        />
      ) : (
        <img src="src/assets/icons/logo.svg" alt="logo" />
      )}
    </div>
  );
};

export default Logo;
