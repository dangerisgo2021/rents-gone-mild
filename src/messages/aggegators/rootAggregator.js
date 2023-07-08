import { profileAggregateWatcher } from "../../profile/aggregates/profileAggregateWatcher.js";
import { userAggregateWatcher } from "../../user/aggregates/userAggregateWatcher.js";

export const rootAggregator = ({ message }) => {
  const watchersPromise = [userAggregateWatcher, profileAggregateWatcher].map(
    (watcher) => watcher({ message })
  );

  return Promise.all(watchersPromise).catch((err) => {
    console.error(
      "this is not suppose to happen! better to create error events",
      err
    );
  });
};
