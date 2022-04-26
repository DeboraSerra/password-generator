import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GeneratedPassword = ({ password }) => {
  useEffect(() => {
  });
  return (
    <input
      className="password"
      type="text"
      value={ password }
      readOnly
    />
  );
};

GeneratedPassword.propTypes = {
  password: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  password: state.reducer.password,
});

export default connect(mapStateToProps)(GeneratedPassword);
