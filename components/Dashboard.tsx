import { useEffect, useState } from "react";
import { getMpData } from "../Redux/codData/codDataThunk";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import Button from "./common/button";
import LoadingSpinner from "./common/loading";
import Card from "./common/card";
import { createLoadout } from "../Redux/loadout/loadoutThunk";

// Types
interface ClassTypes {
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
  killstreaks: { label: string }[];
  tactical: string;
  lethal: string;
  kdRatio: number;
}

interface MatchesTypes {
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
}

const Dashboard: React.FC = () => {
  const [items, setItems] = useState(5);

  const dispatch = useAppDispatch();

  const { codData } = useAppSelector((state) => state);
  const data: MatchesTypes[] =
    codData.data !== null ? codData.data.matches : null;
  const loading = codData.loading;

  const { gamertag, platform } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (data === null) {
      dispatch(getMpData({ gamertag, platform }));
    }
  }, [gamertag]);

  const handleGetMpData = () => {
    dispatch(getMpData({ gamertag, platform }));
  };

  const handlePaginationMore = () => {
    setItems(items + 5);
  };
  const handlePaginationLess = () => {
    setItems(5);
  };

  const handleSaveClass = (loadout: ClassTypes): any => {
    dispatch(createLoadout(loadout));
  };

  return (
    <div className="min-h-total">
      {loading && <LoadingSpinner />}
      <h1 className="text-start text-2xl my-4"> {gamertag}'s Dashboard</h1>
      {data === null && (
        <Button disabled={loading} click={() => handleGetMpData()}>
          Get Data
        </Button>
      )}
      <div className="mt-4">
        <h2 className="text-start text-xl w-full mb-4">My last games</h2>
        <ul className="mb-8 grid sm:block">
          {data !== null ? (
            data.map(
              (item, key) =>
                key < items && (
                  <Card key={key}>
                    <h3
                      className={
                        item.result === "loss"
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {item.result}
                    </h3>
                    <p>{item.mode}</p>
                    <p>{item.playerStats.kills} Kills</p>
                    <p>
                      KDR{" "}
                      <span
                        className={
                          item.playerStats.kdRatio >= 2.0
                            ? "text-green-500"
                            : ""
                        }
                      >
                        {item.playerStats.kdRatio.toFixed(2)}
                      </span>
                    </p>
                    <Button
                      click={() =>
                        handleSaveClass({
                          matchId: item.matchID,
                          primary: item.player.loadout[0].primaryWeapon.label,
                          secondary:
                            item.player.loadout[0].secondaryWeapon.label,
                          lethal: item.player.loadout[0].lethal.label,
                          tactical: item.player.loadout[0].tactical.label,
                          killstreaks: item.player.loadout[0].killstreaks,
                          perks: item.player.loadout[0].perks,
                          extraPerks: item.player.loadout[0].extraPerks,
                          kdRatio: item.playerStats.kdRatio,
                        })
                      }
                    >
                      Save class
                    </Button>
                  </Card>
                )
            )
          ) : (
            <p>No data yet.</p>
          )}
          {items < 20
            ? data !== null && (
                <div className="flex flex-row justify-center mt-8">
                  <Button click={handlePaginationMore} transparent>
                    Load More
                  </Button>
                </div>
              )
            : data !== null && (
                <div className="flex flex-row justify-center mt-8">
                  <Button click={handlePaginationLess} transparent>
                    Load less
                  </Button>
                </div>
              )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
