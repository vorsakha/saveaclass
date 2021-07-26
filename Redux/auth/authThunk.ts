import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const url = process.env.API_URL;

export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    setAuthToken();
  }

  const res = await axios.get(`${url}/users/load`);

  return res.data;
});

export const logUser = createAsyncThunk(
  "auth/logUser",
  async (body: object) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.post(`${url}/auth`, body, config);

    return res.data;
  }
);
