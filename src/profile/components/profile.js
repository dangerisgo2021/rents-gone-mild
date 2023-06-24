import styles from "../css/profile.module.scss";
import { getProfileFormSelector } from "../selectors/getProfileFormSelector.js";
import { useStore } from "../../store/hooks/useStore.js";
import { ProfileFormField } from "./profileFormField.js";

export const Profile = () => {
  const form = useStore().getState(getProfileFormSelector);
  const profileFormFieldsArray = Object.values(form?.fields || {});
  return (
    <div className={styles.profile}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ value: e.target });
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
