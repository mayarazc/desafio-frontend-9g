import styles from "./Inicio.module.css";

import Logo from "../../componentes/Logo/Logo";
import ListaApps from "../../componentes/ListaApps/ListaApps";

function Inicio() {
    return(
        <div className={styles.inicio}>
            <div className={styles.container}>
                <Logo/>
                <ListaApps/>
            </div>
        </div>
    )
}

export default Inicio;