import { produce } from "immer";
import { profileFormUpdatedAction } from "../../profile/actions/profile-form-updated-action.js";
import { userLoggedInAction } from "../../user/actions/user-logged-in-action.js";
import { profileFormUpdatedReducer } from "../../profile/reducers/profile-form-updated-reducer.js";
import { updateUserReducer } from "../../user/reducers/update-user-reducer.js";

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
