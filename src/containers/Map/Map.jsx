import React, {useEffect, useState} from 'react';
import { uniqueId, size } from 'lodash';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Map.module.scss';
import { Styles } from './Styles-map'

const PointComponent = ({ point }) => <div>
      <img src={point.image} alt={point.name} className={css.icon} />
    </div>;

export const Map = ({ points = [], centerMap }) => {
  const allCategory = ['supermarket', 'trc', 'sport', 'park', 'hospital'];
  const [seesCategory, setSeesCategory ] = useState([]);
  const [seesPoints, setSeesPoints ] = useState([]);

  const selectCategoryHandler = (e) => {
    const { category } = e.target.dataset;
    const index = seesCategory.indexOf(category);
    if (index < 0) {
      setSeesCategory([...seesCategory, category]);
    } else {
      const updateCategory = seesCategory.filter((cat) => cat !== category);
      setSeesCategory(updateCategory);
    }
  };

  const createPoints = () => points.map((point) => (
    (seesCategory.includes(point.categorie) || size(seesCategory) === 0) &&
    <PointComponent lat={point.cor.lat}
      lng={point.cor.lng} point={point} key={uniqueId()}/>
  ));
  useEffect(() => {
    setSeesPoints(createPoints());
  }, [seesCategory]);
  
  return <>
    <div id="map">
    {
      allCategory.map((category) => (
      <button onClick={selectCategoryHandler} data-category={category}
        key={uniqueId()}>{category}</button>
      ))
    }
    </div>
    <GoogleMap
      bootstrapURLKeys={{ key: 'AIzaSyD9nfM9ITx5m84p5GxlRoXa24A6jBOFe3U' }}
      defaultCenter={centerMap}
      defaultZoom={14}
      styles={Styles}
    >
      {seesPoints}
    </GoogleMap>
  </>;
};

Map.propTypes = {
  points: PropTypes.array,
  centerMap: PropTypes.object
};
