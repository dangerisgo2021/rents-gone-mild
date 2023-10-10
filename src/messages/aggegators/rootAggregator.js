import { profileAggregateWatcher } from "../../profile/aggregates/profileAggregateWatcher.js";
import { userAggregateWatcher } from "../../user/aggregates/userAggregateWatcher.js";
import { wdwwAggregateWatcher } from "../../wdww/aggregates/wdwwAggregateWatcher.js";

export const rootAggregator = ({ message }) => {
  const watchersPromise = [userAggregateWatcher, profileAggregateWatcher, wdwwAggregateWatcher].map(
    (watcher) => watcher({ message })
  );

  return Promise.all(watchersPromise).catch((err) => {
    console.error(
      "this is not suppose to happen! better to create error events",
      err
    );
  });
};
