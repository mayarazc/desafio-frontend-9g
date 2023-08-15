import Aplicativo from "../Aplicativo/Aplicativo";
import styles from "./ListaApps.module.css";

function ListaApps(props) {
  return (
    <div className={styles.listaApps}>
      {props.vetApps.map((app) => {
        return app.map((item) => {
         return <Aplicativo
            nome={item.name}
            descricao={item.description}
            key={item.id}
          />
        })
      })}
    </div>
  );
}

export default ListaApps;
