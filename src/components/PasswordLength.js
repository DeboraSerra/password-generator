import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLength } from '../redux/actions';

const PasswordLength = ({ dispatch }) => {
  const [state, setState] = useState({ passLength: 8 });
  useEffect(() => {
    dispatch(addLength(parseFloat(state.passLength)));
  }, [state]);
  const handleChange = ({ target: { value } }) => {
    setState({ passLength: value });
  };
  return (
    <section className="range-label">
      <legend>
        LENGTH:
        {' '}
        {state.passLength}
      </legend>
      <label htmlFor="range" className="length-sect">
        <input
          className="range"
          type="range"
          min="4"
          max="32"
          value={ state.passLength }
          id="range"
          onChange={ handleChange }
        />
      </label>
    </section>
  );
};

PasswordLength.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PasswordLength);
