import { sanityClient } from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRoom() {
  const result = await sanityClient.fetch(
    queries.getFeaturedRoomQuery,
    {},
    { cache: "no-cache" },
  );

  return result;
}
