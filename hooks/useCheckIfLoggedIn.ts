import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../Redux/hooks";

const useCheckIfLoggedIn = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) router.push("/");
  }, []);

  return;
};

export default useCheckIfLoggedIn;
