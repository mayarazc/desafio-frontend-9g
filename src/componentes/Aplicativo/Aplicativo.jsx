import styles from "./Aplicativo.module.css";

import { useNavigate } from "react-router-dom";

function Aplicativo(props) {
  const navegacao = useNavigate();

  return (
    <div className={styles.aplicativo}>
      <img
        src={props.app.image}
        alt="Logotipo do App"
        onClick={() => navegacao(`apps/${props.app.id}`)}
      />
      <h1 onClick={() => navegacao(`apps/${props.app.id}`)}>
        {props.app.name}
      </h1>
      <p>{props.app.description}</p>
    </div>
  );
}

export default Aplicativo;
