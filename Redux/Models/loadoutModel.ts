const loadoutModel = class LoadoutTypes {
  primary: string;
  secondary: string;
  perks: string[];
  tactical: string;
  lethal: string;
  kdRatio: number;

  constructor(loadout: LoadoutTypes) {
    this.primary = loadout.primary;
    this.secondary = loadout.secondary;
    this.perks = loadout.perks;
    this.tactical = loadout.tactical;
    this.lethal = loadout.lethal;
    this.kdRatio = loadout.kdRatio;
  }
};

export default loadoutModel;
