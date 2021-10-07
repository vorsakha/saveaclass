import { useState } from "react";
import { generateAlert } from "../Redux/alert/alertSlice";
import { useAppDispatch } from "../Redux/hooks";
import { signUp } from "../Redux/user/userThunk";

// Types
type SignUpTypes = {
  email: string;
  password: string;
  password2: string;
  gamertag: string;
  platform: string;
};

const useSignUp = () => {
  const [formInput, setFormInput] = useState<SignUpTypes>({
    email: "",
    password: "",
    password2: "",
    gamertag: "",
    platform: "",
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formInput.email !== "" || formInput.password !== "") {
      if (formInput.password === formInput.password2) {
        dispatch(signUp(formInput));
      } else {
        dispatch(
          generateAlert({ type: "danger", msg: "Passwords don't match" })
        );
      }
    }
  };

  return { formInput, handleInputChange, handleSubmit };
};

export default useSignUp;
