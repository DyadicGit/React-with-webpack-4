import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './test-page';

const FunctionBasic = (cnt) => {
  console.log('render FunctionBasic', cnt);
  return (
    <article className="description-box">FunctionBasic</article>
  );
};
const FunctionComponent = ({ cnt, order = 0 }) => {
  console.log('render FunctionComponent order:' + order, cnt);
  return (
    <article className="description-box">FunctionComponent</article>
  )
};
const FunctionCreateElement = (_ref) => {
  const cnt = _ref.cnt;
  console.log('render FunctionCreateElement ', cnt);
  return React.createElement("article", { className: "description-box" }, "FunctionCreateElement");
};


const TestJsxSyntaxSugar = () => {
  const [cnt, setCnt] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const timerNr = setInterval(() => setCnt((cnt) => (cnt || 0) + 1), 1000);
    const timeoutNr = setTimeout(clear, 3000);

    function clear() {
      clearInterval(timerNr);
      clearTimeout(timeoutNr);
    }

    return clear;
  }, []);

  const functionComponent = <FunctionComponent cnt={cnt} order='first' />;
  const functionCreateElement = React.createElement(FunctionCreateElement, { cnt: cnt });

  return (
    <section className={theme || 'no-theme'}>
      <h1>Testing place {cnt}</h1>
      {functionComponent}
      {functionCreateElement}
      {FunctionComponent({
        cnt,
        order: 'second'
      })}
      {FunctionBasic(cnt)}
    </section>
  );
};

export { TestJsxSyntaxSugar }
