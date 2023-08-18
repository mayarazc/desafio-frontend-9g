import styles from "./Home.module.css";
import Logo from "../../components/Logo/Logo";
import AppList from "../../components/AppList/AppList";
import { useRef } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

function Home(props) {
  const carousel = useRef(null);

  const handleClickLeft = (e) => {
    e.preventDefault();
    /* Calcula que componente ListaApps (ref carousel) deve 
    mover para esquerda metade do seu comprimento */
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };

  const handleClickRight = (e) => {
    e.preventDefault();
    /* Calcula o quanto o componente ListaApps (ref carousel) deve 
    mover para a direita*/
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Logo />
    
        { /* Caso o vetor de apps seja > 3 renderiza o componente 
        porém com o diferencial do carousel e seta para scroll  */

        props.apps.length <= 3 ? (<AppList vetApps={props.apps} />) : 
        (
          <div className={styles.carouselContainer}>

            <button onClick={handleClickRight} className={styles.arrow}>
              <BsArrowLeftCircle />
            </button>

            <div className={styles.carousel} ref={carousel}>
              <AppList vetApps={props.apps}/>
            </div>

            <button onClick={handleClickLeft} className={styles.arrow}>
              <BsArrowRightCircle />
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
