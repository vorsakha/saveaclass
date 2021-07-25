const loadoutModel = class LoadoutTypes {
  matchId: string;
  primary: string;
  secondary: string;
  perks: {
    label: string;
    imageMainUi: string;
  }[];
  extraPerks: {
    label: string;
    imageMainUi: string;
  }[];
  tactical: string;
  lethal: string;
  kdRatio: number;
  killstreaks: { label: string }[];

  constructor(loadout: LoadoutTypes) {
    this.matchId = loadout.matchId;
    this.primary = loadout.primary;
    this.secondary = loadout.secondary;
    this.perks = loadout.perks;
    this.extraPerks = loadout.extraPerks;
    this.tactical = loadout.tactical;
    this.lethal = loadout.lethal;
    this.kdRatio = loadout.kdRatio;
    this.killstreaks = loadout.killstreaks;
  }
};

export default loadoutModel;
