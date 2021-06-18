import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { has, toNumber } from 'lodash';
import {
  Slider,
  Checkbox,
} from '@material-ui/core';
import cn from 'classnames';
import { Filtering } from '../../Filter/Filtering';
import css from './Filter.module.scss';

const CreateFilter = ({ filter, param, handlerForm }) => {
  const MyInput = ({ field, form, ...props }) => {
    return <Checkbox {...field} {...props} />;
  };
  return <Formik
    initialValues={{...filter, rooms: []}}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2));
    }}
    validate={(values) => {
      handlerForm(values);
      return {};
    }}
  >
    {({ handleChange, setFieldValue }) => <form className={css.form}>
      <Slider
        valueLabelDisplay='on'
        name='area'
        id='area'
        value={filter.area}
        step={1}
        min={param.area.min}
        max={param.area.max}
        marks={[{ value: param.area.min, label: param.area.min }, { value: param.area.max, label: param.area.max }]}
        onChange={(event, val) => setFieldValue('area', val)}
      />
      <Slider
        name='floor'
        id='floor'
        value={filter.floor}
        step={1}
        min={param.floor.min}
        max={param.floor.max}
        marks={[{ value: param.floor.min, label: param.floor.min }, { value: param.floor.max, label: param.floor.max }]}
        onChange={(event, val) => setFieldValue('floor', val)}
      />
      <div role="group" aria-labelledby="checkbox-group">
        <Field type="checkbox" name='rooms' value='1' onChange={handleChange} component={MyInput}/>
        <Field type="checkbox" name='rooms' value='2' onChange={handleChange} component={MyInput}/>
      </div>
    </form>}
  </Formik>
};

const createFilterParam = (flats) => {
  const borderParams = {
    area: {
      min: null,
      max: null,
    },
    floor: {
      min: null,
      max: null,
    },
    rooms: new Set(),
  };
  flats.forEach((flat) => {
    const entries = Object.entries(flat);
    entries.forEach(([key, value]) => {
      if(has(borderParams, [key, 'min'])) {
        const { min, max } = borderParams[key];
        borderParams[key].min = min ? Math.min(borderParams[key].min, toNumber(value)) : toNumber(value);
        borderParams[key].max = max ? Math.max(borderParams[key].max, toNumber(value)) : toNumber(value);
      } else if(has(borderParams, [key])) {
        borderParams[key].add(value);
      }
    })
  });
  return borderParams;
};

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.params = createFilterParam(props.flats);
    this.state = {
      area: [this.params.area.min, this.params.area.max],
      floor: [this.params.floor.min, this.params.floor.max],
      rooms: [...this.params.rooms],
    };
    this.flats = props.flats;
    this.setFilteredFlats = props.setFilteredFlats;
    this.setFilteredFlats(Filtering(this.flats, this.state));
  }
  
  handleChange = (name)  => {
    this.setState({...name});
    const filteredFlats = Filtering(this.flats, name);
    this.setFilteredFlats(filteredFlats)
  };

  render() {
    return <CreateFilter filter={this.state} param={this.params} handlerForm={this.handleChange} />
  }
}

Filter.propTypes = {
  flats: PropTypes.array,
};