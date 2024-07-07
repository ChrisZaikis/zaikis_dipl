import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent /> <Outlet />
    </>
  );
};

export default RoutesWithUserChatComponent;
