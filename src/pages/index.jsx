import React, {useState, useRef, useEffect} from 'react';
import uniqueId from 'lodash/uniqueId';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIntersection } from 'react-use';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
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
  gsap.registerPlugin(ScrollTrigger);
  const [filteredFlats, setFilteredFlats] = useState([]);
  const refFilter = useRef(null);
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {

    if (scroll !== null) {
      scroll.on('scroll', ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        }
      });
      ScrollTrigger.refresh();
      gsap.timeline({ 
        scrollTrigger: {
          trigger: refFilter.current,
          scrub: 0.6,
          start: '0% 90%',
          end: '100% 70%'
        }
      })
      .to(refFilter.current, { backgroundColor: 'green' })
    }
    // console.log();
  }, [scroll])
  // console.log(scroll);
  useEffect(() => {
    
  }, []);

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
