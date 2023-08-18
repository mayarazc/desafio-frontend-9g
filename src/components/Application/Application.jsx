import styles from "./Application.module.css";
import { useNavigate } from "react-router-dom";

function Application(props) {
  const navigation = useNavigate();

  return (
    <div className={styles.application}>
      <img
        src={props.app.image}
        alt="Logotipo do App"
        onClick={() => navigation(`apps/${props.app.id}`)}
      />
      <h1 onClick={() => navigation(`apps/${props.app.id}`)}>
        {props.app.name}
      </h1>
      <p>{props.app.description}</p>
    </div>
  );
}

export default Application;
