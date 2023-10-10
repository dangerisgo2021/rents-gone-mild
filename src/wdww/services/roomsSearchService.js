import { connectToDatabase } from "../../database/database.js";

export const roomsSearchService = async ({ search }) => {
  const { database } = await connectToDatabase();
  const roomCollection = database.collection("room");
  
  let query = {};
  
  if ({ ...search }.hasOwnProperty("started")) {
    query.started = search.started || { $ne: true };
  }
  
  console.log(JSON.stringify(query));
  const docs = await roomCollection
    .find(query)
    .sort({ created: -1 })
    .toArray()
    .catch(console.error);
  
  console.log({ docs });
  const results = docs.map((doc) => ({ ...doc, id: doc._id }));
  console.log({ results });
  
  return results
};
