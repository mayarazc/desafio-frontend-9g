import styles from "./Aplicativo.module.css";

function Aplicativo(props) {
    return(
        <div className={styles.aplicativo}>
            <h1>{props.nome}</h1>
            <p>{props.descricao}</p>
        </div>
    )
}

export default Aplicativo;