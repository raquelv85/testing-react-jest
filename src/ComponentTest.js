import React from 'react';
import PropTypes from 'prop-types';

const ComponentTest = ({ saludo, subtitulo }) => {

  return(
    <>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </>
  )
}

ComponentTest.prototype = {
  saludo: PropTypes.string.isRequired
}

ComponentTest.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default ComponentTest;