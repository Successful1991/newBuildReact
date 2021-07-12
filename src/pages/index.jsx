import React, {useEffect, useState} from 'react';
import uniqueId from 'lodash/uniqueId';
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
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
  // const { scroll } = useLocomotiveScroll()
  // useEffect(() => {
  // //   // getServerSideProps(context)
  // //   const jssStyles = document.querySelector('#jss-server-side');
  // //   if (jssStyles) {
  // //     jssStyles.parentElement.removeChild(jssStyles);
  // //   }
  //   if(scroll) {
  //     scroll.update()
  //   }
  // })
  
  return (
    <div className={styles.container} data-scroll-container id='app'>
      <Header />
      <section className={styles.main} data-scroll-section>
        <h1 data-scroll className={styles.title}>Starting template</h1>
        <SelectTab />
        <Filter flats={flats} setFilteredFlats={setFilteredFlats}/>
        <div className={styles.cards} >
          {
            filteredFlats.map(flat => <Card key={uniqueId()} {...flat} />)
          }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await constructionService.getFlats();
  return {
    props: {
      flats: data,
    }, // will be passed to the page component as props
  }
}
