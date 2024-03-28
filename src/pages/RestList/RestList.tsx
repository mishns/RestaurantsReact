import { default as React, FC } from "react";
import styles from "./restlist.css";
import {
  RestaurantList,
  UpdateRestRaitingI,
  updateRestaurantRating,
} from "@api/Restaurant";
import { queryClient } from "@api/queryClient";
import { Card } from "@ui/RestCard";
import { useMutation } from "@tanstack/react-query";

interface CardListProps {
  restList: RestaurantList;
}

export const CardList: FC<CardListProps> = ({ restList }) => {
  const ratingMutation = useMutation(
    {
      mutationFn: ({ id, raiting }: UpdateRestRaitingI) =>
        updateRestaurantRating({ id, raiting }),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
    },
    queryClient,
  );

  function handleRatingClick(id: string, raiting: number) {
    ratingMutation.mutate({ id, raiting });
  }

  return (
    <ul className={styles.CardList}>
      {restList.map(rest => (
        <Card
          key={rest.id}
          id={rest.id}
          title={rest.name}
          descr={rest.description}
          cardStars={rest.raiting}
          imgPath={rest.url}
          onRatingClick={handleRatingClick}
        />
      ))}
    </ul>
  );
};
