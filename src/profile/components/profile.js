import styles from "../css/profile.module.scss";
import { getProfileFormSelector } from "../selectors/getProfileFormSelector.js";
import { useStore } from "../../store/hooks/useStore.js";
import { profileFormSubmittedAction } from "../actions/profileFormSubmittedAction.js";
import { ProfileFormField } from "./profileFormField.js";

export const Profile = () => {
  const { dispatch, getState } = useStore()
  const form = getState(getProfileFormSelector);
  const profileFormFieldsArray = Object.values(form?.fields || {});
  
  // read profile

  // show form if no profile is present
  
  // show profile if present
  
  
  return (
    <div className={styles.profile}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ value: e.target });
          dispatch(profileFormSubmittedAction())
        }}
      >
        {profileFormFieldsArray.map((formField) => (
          <ProfileFormField key={formField.fieldId} formField={formField} />
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
