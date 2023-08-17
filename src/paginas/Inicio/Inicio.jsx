import styles from "./Inicio.module.css";

import { useRef } from "react";

import Logo from "../../componentes/Logo/Logo";
import ListaApps from "../../componentes/ListaApps/ListaApps";

import { BsArrowRightCircle } from "react-icons/bs";

function Inicio(props) {
  const carrossel = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth / 2;
  };

  return (
    <div className={styles.inicio}>
      <div className={styles.container}>
        <Logo />
  
        {props.aplicativos.length <= 3 ? (
          <ListaApps vetApps={props.aplicativos} />
        ) : (
          <div className={styles.carrosselContainer}>
            <div className={styles.carrossel} ref={carrossel}>
              <ListaApps vetApps={props.aplicativos}/>
            </div>
            <button onClick={handleScroll} className={styles.seta}>
              <BsArrowRightCircle />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inicio;
