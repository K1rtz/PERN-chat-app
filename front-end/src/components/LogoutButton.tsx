import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {

  const { logout} = useLogout();

  return (
    <div className="mt-auto">
        <RiLogoutBoxLine className="w-6 h-6 text-black cursor-pointer" onClick={logout}/>
    </div>
  )
}

export default LogoutButton