import styles from "./AppList.module.css";
import Application from "../Application/Application";

function AppList(props) {
  return (
    <div className={styles.appList}>
      {props.vetApps.map((app) => {
        return <Application app={app} key={app.id} />;
      })}
    </div>
  );
}

export default AppList;
