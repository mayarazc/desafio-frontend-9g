import styles from "./Inicio.module.css";

import Logo from "../../componentes/Logo/Logo";
import ListaApps from "../../componentes/ListaApps/ListaApps";

function Inicio(props) {
    return(
        <div className={styles.inicio}>
            <div className={styles.container}>
                <Logo/>
                <ListaApps vetApps={props.dadosAPI}/>
            </div>
        </div>
    )
}

export default Inicio;