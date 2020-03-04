/** @jsx createElement */
import { createElement } from 'react';
import './test-styles.css';

const template = (
  <article className="description-box">
    <aside>some article goes here</aside>
    <aside>another description</aside>
  </article>
);
const TestPage = () => {
  console.log(template)
  return (
    <section>
      <h1>Testing place</h1>
      {{...template}}
    </section>
  );
};

export { TestPage }
