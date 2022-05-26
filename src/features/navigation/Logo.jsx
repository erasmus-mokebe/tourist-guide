import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { closeSideBar } from "../../store/slices/sideBarSlice";

import LogoIcon from "../../assets/icons/logo.svg";

export const Logo = (props) => {
  const sideBarOpened = useSelector((state) => state.sideBar.opened);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { locationId } = useParams();

  const close = () => {
    dispatch(closeSideBar());
  };

  const goToLocationList = () => {
    navigate(`/`);
  };

  console.log(locationId);

  return (
    <div className={`${props.className} flex justify-center items-center`}>
      {sideBarOpened ? (
        <img
          className="cursor-pointer"
          src="src/assets/icons/back.svg"
          alt="go back"
          onClick={locationId ? goToLocationList : close}
        />
      ) : (
        <img src={LogoIcon} alt="logo" />
      )}
    </div>
  );
};
