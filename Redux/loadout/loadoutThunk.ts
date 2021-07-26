import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const url = process.env.API_URL;

// Types
type LoadTypes = {
  _id: string;
  matchId: string;
  primary: string;
  secondary: string;
  perks: {
    image: string | null;
    imageProgression: string;
    name: string;
    label: string;
    imageMainUi: string;
  }[];
  tactical: string;
  lethal: string;
  kdRatio: number;
  extraPerks: {
    image: string | null;
    imageProgression: string;
    name: string;
    label: string;
    imageMainUi: string;
  }[];
  killstreaks: {
    label: string;
    name: string;
  }[];
};

// Load Loadouts from api
export const loadLoadouts = createAsyncThunk(
  "loadout/loadLoadouts",
  async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      setAuthToken();
    }

    const loadouts = await axios.get(`${url}/api/loadouts`);

    let data: LoadTypes[] = [];

    loadouts.data.forEach((l: any) =>
      data.push({
        _id: l._id,
        matchId: l.matchId,
        primary: l.primary,
        secondary: l.secondary,
        perks: l.perks,
        tactical: l.tactical,
        lethal: l.lethal,
        kdRatio: l.kdRatio,
        extraPerks: l.extraPerks,
        killstreaks: l.killstreaks,
      })
    );

    return data;
  }
);

// Create loadout
export const createLoadout = createAsyncThunk(
  "loadout/createLoadout",
  async (body: object) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      setAuthToken();
    }

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    await axios.post(`${url}/api/loadouts`, body, config);

    const loadouts = await axios.get(`${url}/api/loadouts`);

    let data: LoadTypes[] = [];

    loadouts.data.forEach((l: any) =>
      data.push({
        _id: l._id,
        matchId: l.matchId,
        primary: l.primary,
        secondary: l.secondary,
        perks: l.perks,
        tactical: l.tactical,
        lethal: l.lethal,
        kdRatio: l.kdRatio,
        extraPerks: l.extraPerks,
        killstreaks: l.killstreaks,
      })
    );

    return data;
  }
);

// Delete loadout permanently
export const deleteLoadout = createAsyncThunk(
  "loadout/deleteLoadout",
  async (id: string) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      setAuthToken();
    }

    const res = await axios.delete(`${url}/api/loadouts/${id}`);

    let data: LoadTypes[] = [];

    res.data.forEach((l: any) =>
      data.push({
        _id: l._id,
        matchId: l.matchId,
        primary: l.primary,
        secondary: l.secondary,
        perks: l.perks,
        tactical: l.tactical,
        lethal: l.lethal,
        kdRatio: l.kdRatio,
        extraPerks: l.extraPerks,
        killstreaks: l.killstreaks,
      })
    );

    return data;
  }
);
