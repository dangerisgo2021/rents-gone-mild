import { profileFormUpdatedAction } from "../actions/profileFormUpdatedAction.js";
import styles from "../css/profileFormField.module.scss";
import { useStore } from "../../store/hooks/useStore.js";

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
