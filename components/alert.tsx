import React, { useEffect } from "react";
import { clearAlert, generateAlert } from "../Redux/alert/alertSlice";
import { clearAuthAlert } from "../Redux/auth/authSlice";
import { clearLoadoutsAlert } from "../Redux/loadout/loadoutSlice";
import { clearUserAlert } from "../Redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";

const Alert: React.FC = () => {
  const dispatch = useAppDispatch();

  const alert = useAppSelector((state) => state.alert);
  const loadouts = useAppSelector((state) => state.loadouts.alert);
  const user = useAppSelector((state) => state.user.alert);
  const auth = useAppSelector((state) => state.auth.alert);

  const type = (): any => {
    if (loadouts.type !== null) {
      return loadouts.type;
    }
    if (user.type !== null) {
      return user.type;
    }
    if (auth.type !== null) {
      return auth.type;
    }
    return "";
  };
  const show = alert.show;
  const msg = () => {
    if (loadouts.msg !== null) {
      return loadouts.msg;
    }
    if (user.msg !== null) {
      return user.msg;
    }
    if (auth.msg !== null) {
      return auth.msg;
    }
    return "";
  };

  useEffect(() => {
    const typeFunc = type();
    const msgFunc = msg();

    msg() !== "" && dispatch(generateAlert({ type: typeFunc, msg: msgFunc }));
  }, [loadouts, user, auth]);

  useEffect(() => {
    setTimeout(() => {
      show && dispatch(clearAlert());
      show && dispatch(clearAuthAlert());
      show && dispatch(clearLoadoutsAlert());
      show && dispatch(clearUserAlert());
    }, 3000);
    // eslint-disable-next-line
  }, [show]);

  return (
    <div className="fixed z-20 top-15 right-5 py-2 px-4">
      {show && (
        <div
          className={`${type() === "danger" ? "bg-red-500" : "bg-green-500"}
           shadow-md py-2 px-4 no-underline rounded text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none`}
        >
          {alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
