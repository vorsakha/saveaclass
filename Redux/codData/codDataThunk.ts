import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.API_URL;

// Get multiplayer data from api
export const getMpData = createAsyncThunk("codData/loadMpData", async () => {
  try {
    const mpData = await axios.get(`${url}/cod`);

    return mpData.data;
  } catch (error) {
    console.error("Error fetching COD data");
  }
});
