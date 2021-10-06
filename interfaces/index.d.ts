interface UserStateTypes {
  loading: boolean;
  alert: {
    type: string | null;
    msg: string | null;
  };
}

interface CodStateTypes {
  data: null | CodDataTypes;
  loading: boolean;
  alert: {
    type: string | null;
    msg: string | null;
  };
}

interface AuthStateTypes {
  loggedIn?: boolean;
  alert: {
    type: string | null;
    msg: string | null;
  };
  loading: boolean;
  admin: boolean;
  token: string | null;
  user: string | null;
  gamertag: string | null;
  platform: string | null;
}

interface AlertStateTypes {
  show: boolean;
  type: string | null;
  msg: string | null;
}

interface LoadoutsTypes {
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
  matches?: {
    result: string;
    mode: string;
    playerStats: {
      kills: number;
      kdRatio: number;
    };
    matchID: string;
    player: {
      loadout: {
        primaryWeapon: {
          label: string;
        };
        secondaryWeapon: {
          label: string;
        };
        lethal: {
          label: string;
        };
        tactical: {
          label: string;
        };
        killstreaks: {
          label: string;
        }[];
        perks: {
          label: string;
          imageMainUi: string;
        }[];
        extraPerks: {
          label: string;
          imageMainUi: string;
        }[];
      }[];
    };
  }[];
}

interface LoadoutStateTypes {
  loadouts: LoadoutTypes | [];
  loading: boolean;
  alert: {
    type: string | null;
    msg: string | null;
  };
}
