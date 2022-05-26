import { Button } from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { LoginStatus } from "../auth/LoginStatus";

import RightArrowIcon from "../../assets/icons/right-arrow.svg";
import tripleDots from "../../assets/icons/triple-dots.svg";

export const PathsNavigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-end items-center w-full h-20 px-12 py-4">
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="flex-1 text-lg whitespace-nowrap">Go back</span>
      </Button>
    </nav>
  );
};
