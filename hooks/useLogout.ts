import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { signOut } from "../Redux/auth/authSlice";
import { clearCodData } from "../Redux/codData/codDataSlice";
import { useAppDispatch } from "../Redux/hooks";
import { clearLoadouts } from "../Redux/loadout/loadoutSlice";

const useLogout = (setMobileMenu: Dispatch<SetStateAction<boolean>>) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(signOut());
    dispatch(clearCodData());
    dispatch(clearLoadouts());
    localStorage.removeItem("token");

    router.push("/");

    setMobileMenu(false);
  };

  return { handleLogout };
};

export default useLogout;
