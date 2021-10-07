import { useAppDispatch } from "../Redux/hooks";
import { createLoadout } from "../Redux/loadout/loadoutThunk";

interface ClassTypes {
  matchId: string;
  primary: string;
  secondary: string;
  perks: {
    label: string;
    imageMainUi: string;
  }[];
  extraPerks: {
    label: string;
    imageMainUi: string;
  }[];
  killstreaks: { label: string }[];
  tactical: string;
  lethal: string;
  kdRatio: number;
}

const useSaveClass = () => {
  const dispatch = useAppDispatch();

  const handleSaveClass = (loadout: ClassTypes) => {
    dispatch(createLoadout(loadout));
  };

  return { handleSaveClass };
};
export default useSaveClass;
