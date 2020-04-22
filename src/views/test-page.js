import React from 'react';
import './test-styles.css';
import Sha256 from '../utils/sha256';

const TestPage = () => {
  const cryptoTest = () => {
    console.log(Sha256)
  }

  return (
    <section>
      <h1>Testing place</h1>
      <button onClick={cryptoTest}>Crypto test</button>
    </section>
  );
};

export { TestPage }
