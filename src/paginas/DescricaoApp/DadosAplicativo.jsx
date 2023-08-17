import styles from "./DadosAplicativo.module.css";

import { useNavigate, useParams, Link } from "react-router-dom";
import Logo from "../../componentes/Logo/Logo";

import { BsArrowLeftCircle } from "react-icons/bs";

function DadosAplicativo(props) {

  const voltarNav = useNavigate();
  const appID = useParams();

  const appSelecionado = props.aplicativos.find((item) => item.id === appID.urlID);
  const materialAppSelecionado = props.appMaterial.filter((item) => item.app_id === appSelecionado.id);

  return (
    <div className={styles.dadosAplicativo}>
      <Logo />
      <div className={styles.aplicativoDetalhado}>
        <div className={styles.imgApp}>
          <img src={appSelecionado.image} alt="Logotipo do App" />
        </div>

        <div className={styles.infoApp}>
          <h1>{appSelecionado.name}</h1>
          <p>{appSelecionado.description}</p>
          {materialAppSelecionado.map((item) => {
            return <div className={styles.containerMateriais} key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer">Clique para abrir o link do {item.name}</a>
            </div>
          })}
          
        </div>
      </div>

      <div onClick={() => voltarNav(-1)}>
        <BsArrowLeftCircle className={styles.voltar} />
      </div>
    </div>
  );
}

export default DadosAplicativo;
