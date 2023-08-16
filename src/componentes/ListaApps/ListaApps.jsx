import Aplicativo from "../Aplicativo/Aplicativo";
import styles from "./ListaApps.module.css";

import { vetApps } from "../../API";

function ListaApps() {
  return (
    <div className={styles.listaApps}>
      {vetApps.map((app) => {
         return <Aplicativo app={app}
            key={app.id}
          />
      })}
    </div>
  );
}

export default ListaApps;
