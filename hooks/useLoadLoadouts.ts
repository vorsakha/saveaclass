import { useEffect } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { loadLoadouts } from "../Redux/loadout/loadoutThunk";

const useLoadLoadouts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLoadouts());
  }, []);

  return;
};

export default useLoadLoadouts;
