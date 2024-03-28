import { default as React, FC } from "react";
import styles from "./cardlist.css";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "@api/Restaurant";
import { queryClient } from "@api/queryClient";
import { Loader } from "@ui/Loader";
import { CardList } from "@pages/RestList/RestList";

interface FetchCardListProps {}

export const FetchCardList: FC<FetchCardListProps> = () => {
  const restQuery = useQuery(
    { queryFn: getRestaurants, queryKey: ["restaurants"] },
    queryClient,
  );

  switch (restQuery.status) {
    case "pending": {
      return <Loader />;
    }
    case "error": {
      return <span>{restQuery.error.message}</span>;
    }
    case "success": {
      return <CardList restList={restQuery.data} />;
    }
  }
};
