import { roomsSearchService } from "../../services/roomsSearchService";

export const rooms = async (_, { search }) => {
  const results = await roomsSearchService({ search });
  return { nodes: results, nodeCount: results.length }
};
