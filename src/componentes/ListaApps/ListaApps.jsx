import Aplicativo from "../Aplicativo/Aplicativo";
import styles from "./ListaApps.module.css";

function ListaApps(props) {
  return (
    <div className={styles.listaApps}>
      {props.vetApps.map((app) => {
        return <Aplicativo app={app} key={app.id} />;
      })}
    </div>
  );
}

export default ListaApps;
