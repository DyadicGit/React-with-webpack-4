import React from 'react';
import { interval } from 'rxjs';

const styles = {
  text: { border: 'solid black 2px', padding: 3 }
};

const Container = ({ style }) => {
  let subscription = null;

  const handleClick = () => {
    const observable = interval(500);
    subscription = observable.subscribe(x => console.log(x));
  };

  const cancelSubscription = () => {
    subscription.unsubscribe();
  };

  return (
    <div style={style}>
      <h2><a href="https://rxjs-dev.firebaseapp.com/guide/subscription">Subscription</a></h2>
      <p style={styles.text}>
          const observable = interval(1000);<br />
          const subscription = observable.subscribe(x => console.log(x));<br />
      </p>
      <button type="button" style={{ color: 'green' }} onClick={handleClick}>
          execute Observable
      </button>
      <p style={styles.text}>
          // Later:<br />
          // This cancels the ongoing Observable execution which<br />
          // was started by calling subscribe with an Observer.<br />
      </p>
      <button type="button" style={{ color: 'red' }} onClick={cancelSubscription}>
          cancel Observable execution
      </button>
    </div>
  );
};

export default Container;
