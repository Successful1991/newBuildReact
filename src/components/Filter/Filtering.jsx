import { has, includes, size, toString } from 'lodash';
import cn from 'classnames';

const checkRangeParam = (flat, key, value) => {
  return (has(flat, key)
    && flat[key] >= value[0]
    && flat[key] <= value[1]);
};

const checkSelectParam = (flat, key, value) => {
  return (includes(value, toString(flat[key])) || size(value) === 0);
};

const getTypeFilterParam = (name) => {
const filterName = { range: ['area', 'floor'], checkbox: ['rooms'] };
  if (filterName.checkbox.includes(name)) {
    return 'checkbox';
  }
  if (filterName.range.includes(name)) {
    return 'range';
  }
  return null;
};

export const Filtering = (flats, params) => {
  return flats.filter((flat) => {
    const paramsEntries = Object.entries(params);
    return paramsEntries.every(([name, value]) => {
      if (!has(flat, [name])) return false;
      if (getTypeFilterParam(name) === 'range') {
        return checkRangeParam(flat, name, value);
      }
      if (getTypeFilterParam(name) === 'checkbox') {
        return checkSelectParam(flat, name, value);
      }
      return false;
    });
  });
};

