import { validateResponse } from "@api/validateResponse";
import { API_URL } from "@constants";
import { z } from "zod";

const restaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  raiting: z.number(),
  url: z.string(),
});
export type Restaurant = z.infer<typeof restaurantSchema>;

const restaurantListSchema = z.array(restaurantSchema);
export type RestaurantList = z.infer<typeof restaurantListSchema>;

export function getRestaurants(): Promise<RestaurantList> {
  return fetch(`${API_URL}/restaurants`)
    .then(validateResponse)
    .then(res => res.json())
    .then(data => restaurantListSchema.parse(data));
}

export interface UpdateRestRaitingI {
  id: Restaurant["id"];
  raiting: Restaurant["raiting"];
}

export function updateRestaurantRating({
  id,
  raiting,
}: UpdateRestRaitingI): Promise<Restaurant> {
  return fetch(`${API_URL}/restaurants/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ raiting }),
  })
    .then(validateResponse)
    .then(res => res.json())
    .then(data => restaurantSchema.parse(data));
}
