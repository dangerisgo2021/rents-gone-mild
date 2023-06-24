import { rootReducer } from "../reducers/rootReducer.js";

export const storeConfig = {
  initialState: {
    session: "987",
    profileForm: {
      fields: {
        username: {
          type: "text",
          fieldId: "username",
          placeholder: "Enter name to be displayed",
          value: "",
          label: "Username"
        },
        numberOfKids: {
          type: "number",
          fieldId: "numberOfKids",
          value: "0",
          label: "Number of Kids"
        }
      },
    },
  },
  rootReducer: rootReducer,
};
