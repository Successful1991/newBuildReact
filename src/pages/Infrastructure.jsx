import React from "react";
import Head from 'next/head';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styles from '../styles/Infrastructure.module.scss';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Header } from '../containers/Header/Header';
import { Footer } from '../containers/Footer/Footer';
import { Map } from '../containers/Map/Map';

export default function Infrastructure({ containerRef }) {
  const mainMap = {lat: 50.485010, lng: 30.530143};
  const pointsMap = [
    {
    "name":"Магазин IKEA",
    "cor": { lat: "50.485692", lng: "30.526798"},
    "categorie":"supermarket",
    "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/magazyn.svg"
  },
    {
      "name":"Магазин Novus",
      "cor": { lat: "50.49427218005394", lng: "30.52207065553"},
      "categorie":"supermarket",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/magazyn.svg"
    },
    {
      "name":"Магазин Cільпо",
      "cor": { lat: "50.487787", lng: "30.521255"},
      "categorie":"supermarket",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/magazyn.svg"
    },
    {
      "name":"Магазин METRO",
      "cor": { lat: "50.486774843031036", lng: "30.516941252432275"},
      "categorie":"supermarket",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/magazyn.svg"
    },
    {
      "name":"ТРЦ Блокбастер Молл",
      "cor": { lat: "50.48696176332718", lng: "30.522707854618005"},
      "categorie":"trc",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/trts.svg"
    },
    {
      "name":"ТЦ Plaza Sport",
      "cor": { lat: "50.48807783088275", lng: "30.508149458509266"},
      "categorie":"trc",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/trts.svg"
    },
    {
      "name":"Парк Наталка",
      "cor": { lat: "50.493510", lng: "30.526364"},
      "categorie":"park",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/park.svg"
    },
    {
      "name":"Фітнес-центр Спортлайф",
      "cor": { lat: "50.487340", lng: "30.519437"},
      "categorie":"sport",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/fytnes-tsentr.svg"
    },
    {
      "name":"Фітнес-центр Спортлайф",
      "cor": { lat: "50.488784123201704", lng: "30.508832094774945"},
      "categorie":"sport",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/fytnes-tsentr.svg"
    },
    {
      "name":"Фітнес-центр Geliar Gym",
      "cor": { lat: "50.4895795716274", lng: "30.52974521917972"},
      "categorie":"sport",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/fytnes-tsentr.svg"
    },
    {
      "name":"Фітнес-центр Palestra",
      "cor": { lat: "50.491089308457134", lng: "30.530202582718214"},
      "categorie":"sport",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/fytnes-tsentr.svg"
    },
    {
      "name":"Кінотеатр Планета Кіно",
      "cor": { lat: "50.48648000633133", lng: "30.52010449182618"},
      "categorie":"cinema",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/kyno-1.svg"
    },
    {
      "name":"Коворкінг IC Coworking",
      "cor": { lat: "50.486127946495564", lng: "30.51902718538971"},
      "categorie":"coworking",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/kovorkyng-1.svg"
    },
    {
      "name":"Клініка Оксфорд Медікал",
      "cor": { lat: "50.491307", lng: "30.527469"},
      "categorie":"hospital",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bolnytsa-2.svg"
    },
    {
      "name":"Клініка Добробут",
      "cor": { lat: "50.506879644359785", lng: "30.509862982361977"},
      "categorie":"hospital",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bolnytsa-2.svg"
    },
    {
      "name":"Клініка Добробут",
      "cor": { lat: "50.49303289960493", lng: "30.52271693244203"},
      "categorie":"hospital",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bolnytsa-2.svg"
    },
    {
      "name":"Клініка Медіком",
      "cor": { lat: "50.496698062253316", lng: "30.520054019465046"},
      "categorie":"hospital",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bolnytsa-2.svg"
    },
    {
      "name":"Ветеринарна клініка Зоолюкс",
      "cor": { lat: "50.48956701542134", lng: "30.528979529942625"},
      "categorie":"hospital",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bolnytsa-2.svg"
    },
    {
      "name":"Дошкільний заклад",
      "cor": { lat: "50.484290", lng: "30.529156"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад Active Child",
      "cor": { lat: "50.4905662246962", lng: "30.530517925783897"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад Джерело",
      "cor": { lat: "50.49253199743922", lng: "30.526870121497343"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад №30",
      "cor": { lat: "50.49423555204475", lng: "30.523949232492512"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад Montessori Kyiv",
      "cor": { lat: "50.49251414038936", lng: "30.51956932766611"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад №523",
      "cor": { lat: "50.49459035296671", lng: "30.509529063639526"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад №685",
      "cor": { lat: "50.49256914742148", lng: "30.51876732594852"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад №579",
      "cor": { lat: "50.494443375142914", lng: "30.51350458993029"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад №581",
      "cor": { lat: "50.49836802945229", lng: "30.5145120870411"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад Ля Малюк",
      "cor": { lat: "50.50138156092761", lng: "30.51946305223921"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Дошкільний заклад Clever Kids",
      "cor": { lat: "50.50616384720601", lng: "30.512618839568088"},
      "categorie":"child",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/det-sad.svg"
    },
    {
      "name":"Школа Академія мистецтв",
      "cor": { lat: "50.501212707448786", lng: "30.516185041178"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа DEC life School",
      "cor": { lat: "50.50145084504615", lng: "30.51949302290907"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа №211",
      "cor": { lat: "50.5008218231461", lng: "30.510800154564425"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа №210",
      "cor": { lat: "50.500746945130565", lng: "30.506679947246525"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа №157",
      "cor": { lat: "50.504462949130975", lng: "30.503924072946948"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа Alterra School",
      "cor": { lat: "50.51138273192821", lng: "30.510944735628865"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа Альтернативний Західний Колегіум",
      "cor": { lat: "50.50974150821702", lng: "30.514932502316892"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа №219",
      "cor": { lat: "50.49808927338067", lng: "30.499437235227404"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа №233",
      "cor": { lat: "50.49882633031883", lng: "30.510938547514517"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Школа Dixi School",
      "cor": { lat: "50.497652493409056", lng: "30.52158155296236"},
      "categorie":"school",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/shkola.svg"
    },
    {
      "name":"Ресторан Balcon SeaFood",
      "cor": { lat: "50.486594499671334", lng: "30.518448731878273"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Rebra & Kotlety",
      "cor": { lat: "50.49310832162058", lng: "30.525708267973307"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Генацвале & Хінкалі",
      "cor": { lat: "50.49288990913045", lng: "30.52351958540138"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Pesto cafe",
      "cor": { lat: "50.48648951308204", lng: "30.51944626685858"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Amore Mio",
      "cor": { lat: "50.49567402834064", lng: "30.52045839783914"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Ristorante 8/8",
      "cor": { lat: "50.49707643922033", lng: "30.52122453828531"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Італія",
      "cor": { lat: "50.49839387660839", lng: "30.52082750350437"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Ресторан Євразія",
      "cor": { lat: "50.48870547241288", lng: "30.507707736830927"},
      "categorie":"cafe",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/05/marker-park.svg"
    },
    {
      "name":"Метро Почайна",
      "cor": { lat: "50.48607872399358", lng: "30.496763521770795"},
      "categorie":"metro",
      "image":null
    },
    {
      "name":"Метро Оболонь",
      "cor": { lat: "50.50164565788868", lng: "30.497395008755312"},
      "categorie":"metro",
      "image":null
    },
    {
      "name":"Зупинка громадського траспорту",
      "cor": { lat: "50.48601593984567", lng: "30.53449467759425"},
      "categorie":"transport_stop",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/ostanovka.svg"
    },
    {
      "name":"Зупинка громадського траспорту",
      "cor": { lat: "50.482817776946234", lng: "30.52680777307165"},
      "categorie":"transport_stop",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/ostanovka.svg"
    },
    {
      "name":"Зупинка громадського траспорту",
      "cor": { lat: "50.48847349300761", lng: "30.528835522879042"},
      "categorie":"transport_stop",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/ostanovka.svg"
    },
    {
      "name":"Банк Международный инвестиционный банк",
      "cor": { lat: "50.47844770235963", lng: "30.53399636457532"},
      "categorie":"bank",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bank-1.svg"
    },
    {
      "name":"Банк Приватбанк",
      "cor": { lat: "50.48951671751195", lng: "30.493689644792997"},
      "categorie":"bank",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bank-1.svg"
    },
    {
      "name":"Банк ПУМБ",
      "cor": { lat: "50.497732759253005", lng: "30.522526470636453"},
      "categorie":"bank",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bank-1.svg"
    },
    {
      "name":"Банк Ощадбанк",
      "cor": { lat: "50.493550832044356", lng: "30.521159844665238"},
      "categorie":"bank",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bank-1.svg"
    },
    {
      "name":"Банк Укргазбанк",
      "cor": { lat: "50.49708075742782", lng: "30.518668104371283"},
      "categorie":"bank",
      "image":"http://wp-bereg.smarto.agency/wp-content/uploads/2021/06/bank-1.svg"
    }
    ];
  return (
    <div className={styles.container} data-scroll-container ref={containerRef} id='app'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} data-scroll-section>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque enim excepturi
          ipsam quae? Asperiores atque doloribus earum eum explicabo fugit illum molestias quo
          reiciendis tempore. Debitis fugit harum, illum nobis sunt tempora! Aliquid asperiores
          culpa deserunt dignissimos distinctio dolore doloribus dolorum eos, eum id illo impedit
          in ipsum mollitia nesciunt nobis, non odio, quaerat quasi quisquam quod quos ratione
          recusandae rem repellendus repudiandae rerum sequi suscipit tempora temporibus! Commodi,
          debitis delectus dignissimos explicabo fugit illum inventore, iste laborum nam,
          perferendis placeat quas sunt vero. Cumque, cupiditate modi? Accusamus aperiam
          consequatur dicta, enim, fugiat in mollitia numquam odit quia quisquam sapiente
          voluptatem? Aut commodi doloremque eius eligendi et, fuga impedit magni nemo officia
          omnis quas ratione suscipit vel voluptatem voluptatum.
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
          <Map centerMap={mainMap} points={pointsMap}/>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque enim excepturi
          ipsam quae? Asperiores atque doloribus earum eum explicabo fugit illum molestias quo
          reiciendis tempore. Debitis fugit harum, illum nobis sunt tempora! Aliquid asperiores
          culpa deserunt dignissimos distinctio dolore doloribus dolorum eos, eum id illo impedit
          in ipsum mollitia nesciunt nobis, non odio, quaerat quasi quisquam quod quos ratione
          recusandae rem repellendus repudiandae rerum sequi suscipit tempora temporibus! Commodi,
          debitis delectus dignissimos explicabo fugit illum inventore, iste laborum nam,
          perferendis placeat quas sunt vero. Cumque, cupiditate modi? Accusamus aperiam
          consequatur dicta, enim, fugiat in mollitia numquam odit quia quisquam sapiente
          voluptatem? Aut commodi doloremque eius eligendi et, fuga impedit magni nemo officia
          omnis quas ratione suscipit vel voluptatem voluptatum.
        </div>
      </main>
      <Footer />
    </div>
  );
}
