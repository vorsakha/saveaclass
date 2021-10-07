import { useAppDispatch } from "../Redux/hooks";
import { deleteLoadout } from "../Redux/loadout/loadoutThunk";

const useDeleteLoadout = () => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteLoadout(id));
  };

  return { handleDelete };
};

export default useDeleteLoadout;
