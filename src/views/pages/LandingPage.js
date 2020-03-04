/** @jsx createElement */
import { createElement, useEffect, useLayoutEffect, useState } from 'react';
import Booklet from '../components/Booklet';

const mutateDom = (tag) => {
  document.querySelector("#container").className += ` mutated-DOM-${tag}`;
}

const LandingPage = () => {
  const [initL, setInitL] = useState(true);
  const [init, setInit] = useState(true);
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    mutateDom('layout');
    setInitL(false);
  }, [setInitL]);
  useEffect(() => {
    mutateDom('simple')
    setInit(false);
  }, [setInit]);
  console.log('render1')

  useEffect(() => {
    console.log('in', count);
    return () => { console.log('out', count); };
  }, [count]);
  useLayoutEffect(() => {
    console.log('L-in', count);
    return () => { console.log('L-out', count); };
  }, [count]);

  return (
    <div id="container" className={`${initL ? 'initClassLayout' : 'failL'} ${init ? 'initClass' : 'fail'}`}>
      <button type="button" onClick={() => setCount(count + 1)}>
        click
      </button>
      <h1>{count}</h1>
      <Booklet />
    </div>
  );
};
export default LandingPage;
