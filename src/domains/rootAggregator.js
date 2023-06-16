import { userAggregateWatcher } from "./auth/aggregate/userAggregateWatcher.js";

export const rootAggregator = ({ message }) => {
  const watchersPromise = [userAggregateWatcher]
    .map((watcher) => watcher({ message })
  );
  
  return Promise.all(watchersPromise)
    .then((domainEvents) => {
      return domainEvents.flat(1);
    })
    .catch((err) => {
      console.error(
        "this is not suppose to happen! better to create error events",
        err
      );
    });
};
