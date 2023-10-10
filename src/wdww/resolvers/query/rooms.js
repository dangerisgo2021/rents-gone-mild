import { roomsSearchService } from "../../services/rooms-search-service.js";

export const rooms = async (_, { search }) => {
  const results = await roomsSearchService({ search });
  return { nodes: results, nodeCount: results.length }
};
