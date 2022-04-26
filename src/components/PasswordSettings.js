import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPassword } from '../redux/actions';

const PasswordSettings = ({ dispatch, passLength }) => {
  const [state, setState] = useState({
    upper: false,
    lower: true,
    number: false,
    symbols: false,
  });
  useEffect(() => {
    const password = localStorage.getItem('password');
    if (password) dispatch(addPassword(password));
  }, []);
  const handleChange = ({ target: { name, checked } }) => {
    setState((prevSt) => ({
      ...prevSt,
      [name]: checked,
    }));
  };
  const handleClick = () => {
    const { upper, lower, symbols, number } = state;
    const symbol = '!@#$%¨&*()';
    const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let characters = '';
    if (upper) characters += upperLetter;
    if (lower) characters += lowerLetter;
    if (symbols) characters += symbol;
    if (number) characters += numbers;
    const charsLength = characters.length;
    let password = '';
    for (let i = 0; i < passLength; i += 1) {
      const randomNumber = Math.floor(Math.random() * charsLength);
      password += characters[randomNumber];
    }
    dispatch(addPassword(password));
    localStorage.setItem('password', password);
  };
  return (
    <section className="settings-sect">
      <legend>SETTINGS</legend>
      <section className="form-check form-switch switch-sect">
        <label htmlFor="upperCase" className="label form-check-label">
          Include Uppercase
          <input
            className="form-check-input"
            role="switch"
            type="checkbox"
            name="upper"
            id="upperCase"
            checked={ state.upper }
            onChange={ handleChange }
          />
        </label>
      </section>
      <section className="form-check form-switch switch-sect">
        <label htmlFor="lowerCase" className="label form-check-label">
          Include Lowercase
          <input
            className="form-check-input"
            role="switch"
            type="checkbox"
            name="lower"
            id="lowerCase"
            checked={ state.lower }
            onChange={ handleChange }
          />
        </label>
      </section>
      <section className="form-check form-switch switch-sect">
        <label htmlFor="number" className="label form-check-label">
          Include Numbers
          <input
            className="form-check-input"
            role="switch"
            type="checkbox"
            name="number"
            id="number"
            checked={ state.number }
            onChange={ handleChange }
          />
        </label>
      </section>
      <section className="form-check form-switch switch-sect">
        <label htmlFor="symbol" className="label form-check-label">
          Include Symbols
          <input
            className="form-check-input"
            role="switch"
            type="checkbox"
            name="symbols"
            id="symbol"
            checked={ state.symbols }
            onChange={ handleChange }
          />
        </label>
      </section>
      <button className="send-btn" type="button" onClick={ handleClick }>
        Generate Password
      </button>
    </section>
  );
};

PasswordSettings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  passLength: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  passLength: state.reducer.passLength,
});

export default connect(mapStateToProps)(PasswordSettings);
