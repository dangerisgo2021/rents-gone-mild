import styles from "../css/profile.module.scss";
import { getProfileFormSelector } from "../selectors/get-profile-form-selector.js";
import { useStore } from "../../store/hooks/use-store.js";
import { profileFormSubmittedAction } from "../actions/profile-form-submitted-action.js";
import { ProfileFormField } from "./profile-form-field.js";

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
