import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import loadoutModel from "../Models/loadoutModel";
import setAuthToken from "../utils/setAuthToken";

const url = process.env.API_URL;

// Types
type LoadTypes = {
  _id: string;
  matchId: string;
  primary: string;
  secondary: string;
  perks: {
    label: string;
    imageMainUi: string;
  }[];
  tactical: string;
  lethal: string;
  kdRatio: number;
  extraPerks: {
    label: string;
    imageMainUi: string;
  }[];
  killstreaks: { label: string }[];
};

// Load Loadouts from api
export const loadLoadouts = createAsyncThunk(
  "loadout/loadLoadouts",
  async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const loadouts = await axios.get(`${url}/loadouts`);

    let data: LoadTypes[] = [];

    loadouts.data.forEach((l: any) =>
      data.push(
        new loadoutModel({
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
      )
    );
    console.log(data);

    return data;
  }
);

// Create loadout
export const createLoadout = createAsyncThunk(
  "loadout/createLoadout",
  async (body: object) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    await axios.post(`${url}/loadouts`, body, config);

    const loadouts = await axios.get(`${url}/loadouts`);

    let data: LoadTypes[] = [];

    loadouts.data.forEach((l: any) =>
      data.push(
        new loadoutModel({
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
      )
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
    }

    const res = await axios.delete(`${url}/loadouts/${id}`);

    let data: LoadTypes[] = [];

    res.data.forEach((l: any) =>
      data.push(
        new loadoutModel({
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
      )
    );

    return data;
  }
);
