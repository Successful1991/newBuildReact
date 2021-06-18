import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import cn from 'classnames';
import css from './Select.module.scss';

export const Select = ({ children, selectId, handleChange }) => {
  return (
    <FormControl>
      <InputLabel>LIVE камери</InputLabel>
      <NativeSelect
        value={selectId}
        onChange={handleChange}
        name="camers"
      >
        {children}
      </NativeSelect>
    </FormControl>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  selectId: PropTypes.string,
  handleChange: PropTypes.func
};
