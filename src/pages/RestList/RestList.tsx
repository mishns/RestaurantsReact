import { default as React, FC } from "react";
import styles from "./restlist.css";
import { RestaurantList } from "@api/Restaurant";
import { queryClient } from "@api/queryClient";
import { Card } from "@ui/RestCard";

interface CardListProps {
  restList: RestaurantList;
}

export const CardList: FC<CardListProps> = ({ restList }) => {
  return (
    <ul className={styles.CardList}>
      {restList.map(rest => (
        <Card
          key={rest.id}
          title={rest.name}
          descr={rest.description}
          cardStars={rest.raiting}
          imgPath={rest.url}
        />
      ))}
    </ul>
  );
};
