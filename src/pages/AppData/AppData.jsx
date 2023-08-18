import styles from "./AppData.module.css";
import Logo from "../../components/Logo/Logo";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

function AppData(props) {
  const backArrow = useNavigate();
  const appID = useParams();

  /* Busca o app selecionado através do seu ID comparando com o que é passado na URL*/
  const selectedApp = props.app.find((item) => item.id === appID.urlID);

  /* Seleciona os materiais do selectedApp comparando pelo ID*/
  const materialSelectedApp = props.appMaterial.filter(
    (item) => item.app_id === selectedApp.id
  );

  return (
    <div className={styles.appData}>
      <Logo />
      
      <div className={styles.detailedApp}>
        <div className={styles.imgApp}>
          <img src={selectedApp.image} alt="Logotipo do App" />
        </div>

        <div className={styles.infoApp}>
          <h1>{selectedApp.name}</h1>
          <p>{selectedApp.description}</p>

          {materialSelectedApp.map((item) => {
            return (
              <div className={styles.materials} key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  Clique para abrir o link do {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div onClick={() => backArrow(-1)}>
        <BsArrowLeftCircle className={styles.backArrow} />
      </div>
    </div>
  );
}

export default AppData;
