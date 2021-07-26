import { useEffect, useState } from "react";
import { deleteLoadout, loadLoadouts } from "../Redux/loadout/loadoutThunk";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import Button from "./common/button";
import LoadingSpinner from "./common/loading";
import MyClassCard from "./common/myClassCard";

const MyClasses = () => {
  const [items, setItems] = useState(6);

  const { loading, loadouts } = useAppSelector((state) => state.loadout);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLoadouts());
  }, []);

  const handleDelete = (id: string) => {
    dispatch(deleteLoadout(id));
  };

  const handlePaginationMore = () => {
    setItems(items + 5);
  };
  const handlePaginationLess = () => {
    setItems(5);
  };

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
              (item, key) =>
                key < items && (
                  <MyClassCard key={key}>
                    <h2 className="font-blops text-xl text-center text-green-500 mb-4 border-b border-green-600">
                      {item.primary} - KDR {item.kdRatio.toFixed(2)}
                    </h2>
                    <p>
                      Secodary:{" "}
                      <span className="font-bold">{item.secondary}</span>
                    </p>
                    <p>
                      Tactical:{" "}
                      <span className="font-bold">{item.tactical}</span>
                    </p>
                    <p>
                      Lethal: <span className="font-bold">{item.lethal}</span>
                    </p>
                    <p>Perks:</p>
                    <ul className="pl-8">
                      {item.perks.map((p, key) => (
                        <li className="list-disc" key={key}>
                          <span className="font-bold">{p.label}</span>
                        </li>
                      ))}
                      {item.extraPerks.map((e, key) => (
                        <li className="list-disc" key={key}>
                          <span className="font-bold">{e.label}</span>
                        </li>
                      ))}
                    </ul>
                    <p>Killstreaks:</p>
                    <ul className="pl-8">
                      {item.killstreaks.map((k, key) => (
                        <li className="list-disc" key={key}>
                          <span className="font-bold">{k.label}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-4"
                      danger
                      disabled={loading}
                      click={() => handleDelete(item._id)}
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
                  click={handlePaginationMore}
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
                  click={handlePaginationLess}
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
