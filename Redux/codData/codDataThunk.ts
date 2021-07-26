import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const url = process.env.API_URL || "";

// Get multiplayer data from api
export const getMpData = createAsyncThunk(
  "codData/getMpData",
  async (body: object) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      setAuthToken();
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const mpData = await axios.post(`${url}api/cod`, body, config);

      return mpData.data;
    } catch (error) {
      console.error("Error fetching COD data");
      throw error;
    }
  }
);
