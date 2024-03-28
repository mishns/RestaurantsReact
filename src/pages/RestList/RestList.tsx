import { default as React, FC, useState } from "react";
import styles from "./restlist.css";
import {
  RestaurantList,
  UpdateRestRaitingI,
  updateRestaurantRating,
} from "@api/Restaurant";
import { queryClient } from "@api/queryClient";
import { Card } from "@ui/RestCard";
import { useMutation } from "@tanstack/react-query";
import { SearchInput } from "@ui/SearchInput";

interface RestListProps {
  restList: RestaurantList;
}

export const RestList: FC<RestListProps> = ({ restList }) => {
  const [searchInput, setSearchInput] = useState("");

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

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  const filteredRestList = restList.filter(rest =>
    rest.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className={styles.RestListBlock}>
      <SearchInput
        onChange={handleSearchChange}
        placeholder="Search for restaurants"
      />
      <ul className={styles.RestList}>
        {filteredRestList.map(rest => (
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
    </div>
  );
};
