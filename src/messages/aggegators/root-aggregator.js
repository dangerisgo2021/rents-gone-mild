import { profileAggregateWatcher } from "../../profile/aggregates/profile-aggregate-watcher.js";
import { userAggregateWatcher } from "../../user/aggregates/user-aggregate-watcher.js";
import { wdwwAggregateWatcher } from "../../wdww/aggregates/wdww-aggregate-watcher.js";

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
