import { profileFormUpdatedAction } from "../actions/profile-form-updated-action.js";
import styles from "../css/profile-form-field.module.scss";
import { useStore } from "../../store/hooks/use-store.js";

export const ProfileFormField = ({ formField }) => {
  const { dispatch } = useStore();

  return (
    <div className={styles.profileFormField}>
      <label htmlFor={formField.fieldId}>{formField.label}</label>
      <input
        type={formField.type}
        id={formField.fieldId}
        name={formField.fieldId}
        value={formField.value}
        placeholder={formField.placeholder}
        onChange={(e) => {
          dispatch(
            profileFormUpdatedAction({
              fieldId: formField.fieldId,
              value: e.target.value,
            })
          );
        }}
      />
    </div>
  );
};
