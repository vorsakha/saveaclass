import { useAppSelector } from "../Redux/hooks";
import Button from "./common/button";
import LoadingSpinner from "./common/loading";
import MyClassCard from "./common/myClassCard";
import useLoadLoadouts from "../hooks/useLoadLoadouts";
import useDeleteLoadout from "../hooks/useDeleteLoadout";
import usePagination from "../hooks/usePagination";

const MyClasses = () => {
  const { loadout } = useAppSelector((state) => state);
  const loadouts: LoadoutsTypes[] = loadout.loadouts;
  const loading = loadout.loading;

  useLoadLoadouts();

  const { handleDelete } = useDeleteLoadout();

  const { items, setPagination } = usePagination();

  return (
    <div className="min-h-total">
      {loading && <LoadingSpinner />}
      <h1 className="text-start text-2xl my-4">My Classes</h1>
      <div className="my-4">
        {loadouts.length === 0 ? (
          <p>No classes saved.</p>
        ) : (
          <ul className="grid md:grid-cols-3 gap-4 justify-center w-full">
            {loadouts.map(
              (loadout, key) =>
                key < items && (
                  <MyClassCard key={key}>
                    <h2 className="font-blops text-xl text-center text-green-500 mb-4 border-b border-green-600">
                      {loadout.primary} - KDR {loadout.kdRatio.toFixed(2)}
                    </h2>
                    <p>
                      Secodary:{" "}
                      <span className="font-bold">{loadout.secondary}</span>
                    </p>
                    <p>
                      Tactical:{" "}
                      <span className="font-bold">{loadout.tactical}</span>
                    </p>
                    <p>
                      Lethal:{" "}
                      <span className="font-bold">{loadout.lethal}</span>
                    </p>
                    <p>Perks:</p>
                    <ul className="pl-8">
                      {loadout.perks.map((perk, key) => (
                        <li className="list-disc" key={key}>
                          <span className="font-bold">{perk.label}</span>
                        </li>
                      ))}
                      {loadout.extraPerks.map((extraPerk, key) => (
                        <li className="list-disc" key={key}>
                          <span className="font-bold">{extraPerk.label}</span>
                        </li>
                      ))}
                    </ul>
                    <p>Killstreaks:</p>
                    <ul className="pl-8">
                      {loadout.killstreaks.map((killStreak, key) => (
                        <li className="list-disc" key={key}>
                          <span className="font-bold">{killStreak.label}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-4"
                      danger
                      disabled={loading}
                      click={() => handleDelete(loadout._id)}
                    >
                      Delete
                    </Button>
                  </MyClassCard>
                )
            )}
          </ul>
        )}
        {items < 20
          ? loadouts.length > 6 && (
              <div className="flex flex-row justify-center mt-8">
                <Button
                  className="ml-4"
                  click={() => setPagination("more")}
                  transparent
                >
                  Load More
                </Button>
              </div>
            )
          : loadouts.length !== 0 && (
              <div className="flex flex-row justify-center mt-8">
                <Button
                  className="ml-4"
                  click={() => setPagination("less")}
                  transparent
                >
                  Load less
                </Button>
              </div>
            )}
      </div>
    </div>
  );
};

export default MyClasses;
