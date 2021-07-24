import { useEffect, useState } from "react";
import { getMpData } from "../Redux/codData/codDataThunk";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import Button from "./common/button";
import LoadingSpinner from "./common/loading";

const Dashboard: React.FC = () => {
  const [items, setItems] = useState(5);
  const dispatch = useAppDispatch();

  const { loading, codData } = useAppSelector((state) => state.codData);

  useEffect(() => {
    if (codData !== null) {
      dispatch(getMpData());
    }
  }, []);

  const handleGetMpData = () => {
    dispatch(getMpData());
  };

  const handlePaginationNext = () => {
    setItems(items - 5);
  };
  const handlePaginationPrevious = () => {
    setItems(items + 5);
  };

  const handleSaveClass = (loadout: object) => {
    console.log(loadout);
  };

  return (
    <div className="min-h-total">
      {loading && <LoadingSpinner />}
      <h1 className="text-start text-2xl my-4">Dashboard</h1>
      <Button disabled={loading} click={handleGetMpData}>
        Update Data
      </Button>
      <div className="mt-4">
        <h2 className="text-start text-xl w-full">My last games</h2>
        <ul>
          {codData !== null &&
            codData.matches.map(
              (item, key) =>
                key <= items && (
                  <li key={key}>
                    <h3>{item.result}</h3>
                    <p>{item.mode}</p>
                    <p>{item.player.playerStats.kills} Kills</p>
                    <Button click={handleSaveClass(item.player.playerStats)}>
                      Save class
                    </Button>
                  </li>
                )
            )}
          <Button disabled={items > 5} click={handlePaginationPrevious}>
            Previous page
          </Button>
          <Button
            disabled={codData !== null && codData.matches.length - 5 < items}
            click={handlePaginationNext}
          >
            Next page
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
