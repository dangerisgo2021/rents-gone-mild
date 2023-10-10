import styles from "../css/layout.module.scss"

export const Layout = ({ children }) => {
  console.log("Layout")
  
  return <div className={styles.layout}>{children}</div>;
};
