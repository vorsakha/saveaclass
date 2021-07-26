import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.API_URL;

// Get multiplayer data from api
export const getMpData = createAsyncThunk(
  "codData/getMpData",
  async (body: object) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const mpData = await axios.post(`${url}/cod`, body, config);

      return mpData.data;
    } catch (error) {
      console.error("Error fetching COD data");
      throw error;
    }
  }
);
