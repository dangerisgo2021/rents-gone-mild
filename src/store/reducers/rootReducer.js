import { produce } from "immer";
import { profileFormUpdatedAction } from "../../profile/actions/profileFormUpdatedAction.js";
import { userLoggedInAction } from "../../user/actions/userLoggedInAction.js";
import { profileFormUpdatedReducer } from "../../profile/reducers/profileFormUpdatedReducer.js";
import { updateUserReducer } from "../../user/reducers/updateUserReducer.js";

const actionTypeToReducerMap = {
  [profileFormUpdatedAction.type]: profileFormUpdatedReducer,
  [userLoggedInAction.type]: updateUserReducer,
};

export const rootReducer = (oldState, action) => {
  const reducerForActionType = actionTypeToReducerMap[action.type];
  return produce(oldState, (draftState) => {
    return reducerForActionType
      ? reducerForActionType(draftState, action)
      : draftState;
  });
};
