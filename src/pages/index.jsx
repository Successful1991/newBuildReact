import React, {useState, useRef, useEffect} from 'react';
import uniqueId from 'lodash/uniqueId';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { Card } from "../components/UI/Card";
// import axios from "axios";
import { SelectTab } from '../components/SelectTab/SelectTab';
import { constructionService } from "../services/construction.service";
import { Header } from '../containers/Header/Header';
import { Footer } from '../containers/Footer/Footer';
// eslint-disable-next-line import/named
import { Filter } from '../components/UI/Filter/Filter';

// import 'locomotive-scroll/dist/locomotive-scroll.css';
import styles from '../styles/Home.module.scss';


export default function Home({ flats }) {
  const [filteredFlats, setFilteredFlats] = useState([]);
  const refFilter = useRef(null);
  /* Начало логики анимации при попадании в область видимости */
  const [triggerOnce, setTriggerOnce] = useState(false);
  const ref1 = useRef(null);
  const intersection = useIntersection(ref1, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
    triggerOnce: false,
  });
  useEffect(() => {
    if (intersection && triggerOnce === true) return false;
    if (    intersection 
        && intersection.isIntersecting 
        && ref1.current !== null
      ) {
      setTriggerOnce(true);
      gsap.from(ref1.current, { y: -500 });
    }
  }, [intersection, triggerOnce]);
  /* Конец логики анимации при попадании в область видимости */
  return (
    <div className={styles.container} data-scroll-container id='app'>
      <Header />
      <section className={styles.main}>
        <h1 data-scroll className={styles.title}>Starting template</h1>
        <SelectTab />
        <Filter flats={flats} setFilteredFlats={setFilteredFlats}/>
        <div ref={refFilter} className={styles.cards} >
          {
            filteredFlats.map(flat => <Card key={uniqueId()} {...flat} />)
          }
        </div>
      </section>
      <Footer ref={ref1}/>
    </div>
  );
}

export async function getStaticProps(/* context */) {
  const { data } = await constructionService.getFlats();
  return {
    props: {
      flats: data,
    }, // will be passed to the page component as props
  }
}
