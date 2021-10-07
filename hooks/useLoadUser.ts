import { useEffect } from "react";
import { loadUser } from "../Redux/auth/authThunk";
import { useAppDispatch } from "../Redux/hooks";

const useLoadUser = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return;
};

export default useLoadUser;
