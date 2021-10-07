import { useEffect } from "react";
import { getMpData } from "../Redux/codData/codDataThunk";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const useGetMpData = () => {
  const { codData } = useAppSelector((state) => state);
  const { gamertag, platform } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (codData === null || codData.data === null) {
      dispatch(getMpData({ gamertag, platform }));
    }
  }, [gamertag]);

  const handleGetMpData = () => {
    dispatch(getMpData({ gamertag, platform }));
  };

  return { handleGetMpData };
};

export default useGetMpData;
