import { useState } from "react";
import { logUser } from "../Redux/auth/authThunk";
import { useAppDispatch } from "../Redux/hooks";

// Types //
type LoginTypes = {
  email: string;
  password: string;
};

const useLogin = () => {
  const [formInput, setFormInput] = useState<LoginTypes>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formInput.email !== "" || formInput.password !== "") {
      dispatch(logUser(formInput));
    }
  };

  return { handleSubmit, handleInputChange, formInput };
};

export default useLogin;
