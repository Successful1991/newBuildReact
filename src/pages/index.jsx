import React, {useEffect, useState} from 'react';
import Head from 'next/head';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRendersCount } from 'react-use';
import { uniqueId } from 'lodash';
import { Card } from "../components/UI/Card";
// import axios from "axios";

import { SelectTab } from '../components/SelectTab/SelectTab';
import { constructionService } from "../services/construction.service";
import { Header } from '../components/UI/Header/Header';
import { Footer } from '../components/UI/Footer/Footer';
// eslint-disable-next-line import/named
import { Filter } from '../components/UI/Filter/Filter';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import styles from '../styles/Home.module.scss';

export default function Home({ containerRef }) {
  // const { scroll } = useLocomotiveScroll();
  const [filteredFlats, setFilteredFlats] = useState([]);
  const flats = [
    {
      "id": "271",
      "build": "1",
      "sec": "3",
      "sec_id": "3",
      "floor": 1,
      "rooms": 2,
      "type": "2c212",
      "number": "271",
      "sale": "1",
      "img": "2c212_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 76.98,
      "life_room": "76.98",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "272",
      "build": "1",
      "sec": "3",
      "sec_id": "3",
      "floor": 1,
      "rooms": 2,
      "type": "2c211",
      "number": "272",
      "sale": "1",
      "img": "2c211_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 64.65,
      "life_room": "64.65",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "273",
      "build": "1",
      "sec": "3",
      "sec_id": "3",
      "floor": 1,
      "rooms": 1,
      "type": "1c210",
      "number": "273",
      "sale": "1",
      "img": "1c210_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 51.16,
      "life_room": "51.16",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "141",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 1,
      "rooms": 1,
      "type": "1c119/2",
      "number": "141",
      "sale": "1",
      "img": "1c119-2_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 153.94,
      "life_room": "53.94",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "142",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 1,
      "rooms": 2,
      "type": "2c118",
      "number": "142",
      "sale": "1",
      "img": "2c118_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 95.47,
      "life_room": "95.47",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "143",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 1,
      "rooms": 1,
      "type": "1c120",
      "number": "143",
      "sale": "1",
      "img": "1c120_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 54.17,
      "life_room": "54.17",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "144",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 1,
      "rooms": 1,
      "type": "1c117",
      "number": "144",
      "sale": "1",
      "img": "1c117_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 64.28,
      "life_room": "64.28",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "145",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 1,
      "rooms": 1,
      "type": "1c119/1",
      "number": "145",
      "sale": "1",
      "img": "1c119-1_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 53.97,
      "life_room": "53.97",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "205",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 1,
      "type": "1\u0441121",
      "number": "205",
      "sale": "1",
      "img": "1c121_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 56.94,
      "life_room": "56.94",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "206",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 2,
      "type": "2c116",
      "number": "206",
      "sale": "1",
      "img": "2c116_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 93.72,
      "life_room": "93.72",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "207",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 2,
      "type": "2\u0441122",
      "number": "207",
      "sale": "1",
      "img": "2c122_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 90.2,
      "life_room": "90.2",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "208",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 2,
      "type": "2c123",
      "number": "208",
      "sale": "1",
      "img": "2c123_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 102.42,
      "life_room": "102.42",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "209",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 2,
      "type": "2c115",
      "number": "209",
      "sale": "1",
      "img": "2c115_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 70.6,
      "life_room": "70.6",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "210",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 1,
      "type": "1c114",
      "number": "210",
      "sale": "1",
      "img": "1c114_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 51.28,
      "life_room": "51.28",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "211",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 1,
      "rooms": 2,
      "type": "2c113",
      "number": "211",
      "sale": "1",
      "img": "2c113_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 89.96,
      "life_room": "89.96",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "274",
      "build": "1",
      "sec": "3",
      "sec_id": "3",
      "floor": 2,
      "rooms": 2,
      "type": "2c212",
      "number": "274",
      "sale": "1",
      "img": "2c212_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 76.98,
      "life_room": "76.98",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "275",
      "build": "1",
      "sec": "3",
      "sec_id": "3",
      "floor": 2,
      "rooms": 2,
      "type": "2c211",
      "number": "275",
      "sale": "1",
      "img": "2c211_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 64.65,
      "life_room": "64.65",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "276",
      "build": "1",
      "sec": "3",
      "sec_id": "3",
      "floor": 2,
      "rooms": 1,
      "type": "1c210",
      "number": "276",
      "sale": "1",
      "img": "1c210_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 51.16,
      "life_room": "51.16",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "368",
      "build": "1",
      "sec": "4",
      "sec_id": "4",
      "floor": 2,
      "rooms": 1,
      "type": "1c29",
      "number": "368",
      "sale": "1",
      "img": "1c29_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 52.97,
      "life_room": "52.97",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "369",
      "build": "1",
      "sec": "4",
      "sec_id": "4",
      "floor": 2,
      "rooms": 1,
      "type": "1c28",
      "number": "369",
      "sale": "1",
      "img": "1c28_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 44.13,
      "life_room": "44.13",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "370",
      "build": "1",
      "sec": "4",
      "sec_id": "4",
      "floor": 2,
      "rooms": 2,
      "type": "3c27",
      "number": "370",
      "sale": "1",
      "img": "3c27_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 79.26,
      "life_room": "79.26",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "146",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 2,
      "rooms": 1,
      "type": "1c119/2",
      "number": "146",
      "sale": "1",
      "img": "1c119-2_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 53.94,
      "life_room": "53.94",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "147",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 2,
      "rooms": 2,
      "type": "2c118",
      "number": "147",
      "sale": "1",
      "img": "2c118_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 95.47,
      "life_room": "95.47",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "148",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 2,
      "rooms": 1,
      "type": "1c120",
      "number": "148",
      "sale": "1",
      "img": "1c120_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 54.17,
      "life_room": "54.17",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "149",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 2,
      "rooms": 1,
      "type": "1c117",
      "number": "149",
      "sale": "1",
      "img": "1c117_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 64.28,
      "life_room": "64.28",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "150",
      "build": "1",
      "sec": "1",
      "sec_id": "1",
      "floor": 2,
      "rooms": 1,
      "type": "1c119/1",
      "number": "150",
      "sale": "1",
      "img": "1c119-1_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 53.97,
      "life_room": "53.97",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "212",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 2,
      "rooms": 1,
      "type": "1\u0441121",
      "number": "212",
      "sale": "1",
      "img": "1c121_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 56.94,
      "life_room": "56.94",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "213",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 2,
      "rooms": 2,
      "type": "2c116",
      "number": "213",
      "sale": "1",
      "img": "2c116_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 93.72,
      "life_room": "93.72",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "214",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 2,
      "rooms": 2,
      "type": "2\u0441122",
      "number": "214",
      "sale": "1",
      "img": "2c122_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 90.2,
      "life_room": "90.2",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    },
    {
      "id": "215",
      "build": "1",
      "sec": "2",
      "sec_id": "2",
      "floor": 2,
      "rooms": 2,
      "type": "2c123",
      "number": "215",
      "sale": "1",
      "img": "2c123_c.png",
      "compas": "0",
      "action_price": "0",
      "visible": "1",
      "area": 102.42,
      "life_room": "102.42",
      "price": "0",
      "type_object": "1",
      "price_m2": 0,
      "img_big": "/public/image/flat/no-image.png",
      "img_small": "/public/image/flat/no-image.png",
      "images": {
        "without": {
          "2d": "/public/image/flat/template-2d.png"
        },
        "with": {
          "3d": "/public/image/flat/template-3d.png"
        }
      }
    }
  ];
  const rendersCount = useRendersCount();
  return (
    <div className={styles.container} data-scroll-container ref={containerRef} id='app'>
      <Head>
        <title>Construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.main} data-scroll-section>
        <h1 data-scroll className={styles.title}>Starting template {rendersCount}</h1>
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
