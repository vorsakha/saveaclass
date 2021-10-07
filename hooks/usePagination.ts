import { useState } from "react";

const usePagination = () => {
  const [items, setItems] = useState<number>(5);

  const setPagination = (direction: string) => {
    switch (direction) {
      case "more":
        setItems(items + 5);
        break;
      case "less":
        setItems(5);
        break;
      default:
        setItems(5);
        break;
    }

    return;
  };

  return { items, setPagination };
};

export default usePagination;
