import { useEffect } from "react";
import { loadLoadouts } from "../Redux/loadout/loadoutThunk";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import LoadingSpinner from "./common/loading";
import MyClassCard from "./common/MyClassCard";

const MyClasses = () => {
  const { loading, loadouts } = useAppSelector((state) => state.loadout);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLoadouts());
  }, []);

  return (
    <div className="min-h-total">
      {loading && <LoadingSpinner />}
      <h1 className="text-start text-2xl my-4">My Classes</h1>
      <div className="mt-4">
        {loadouts.length === 0 ? (
          <p>No classes saved.</p>
        ) : (
          <ul>
            {loadouts.map((item, key) => (
              <MyClassCard key={key}>
                <h2>
                  {item.primary} - KDR {item.kdRatio}
                </h2>
                <p>Secodary: {item.secondary}</p>
                <p>Tactical grenade: {item.tactical}</p>
                <p>Lethal grenade: {item.lethal}</p>
                <p>Perks:</p>
                <ul>
                  {item.perks.map((p, key) => {
                    <li key={key}>{p.label}</li>;
                  })}
                  {item.extraPerks.map((e, key) => {
                    <li key={key}>{e.label}</li>;
                  })}
                </ul>
                <p>Killstreaks:</p>
                <ul>
                  {item.killstreaks.map((k, key) => {
                    <li key={key}>{k.label}</li>;
                  })}
                </ul>
              </MyClassCard>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyClasses;
