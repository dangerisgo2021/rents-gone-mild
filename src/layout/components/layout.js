import styles from "../css/layout.module.scss"

export const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
