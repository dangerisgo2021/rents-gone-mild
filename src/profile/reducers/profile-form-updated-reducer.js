import { setValue } from "../../store/utils/set-value.js";

export const profileFormUpdatedReducer = (state, action) => {
  if (action?.payload?.fieldId) {
    const { fieldId, value } = action.payload;
    setValue({
      state,
      path: `profileForm.fields.${fieldId}.value`,
      value,
    });
  }
};
