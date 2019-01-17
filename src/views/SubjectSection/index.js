import React from 'react';
import { Subject, from, interval, Observable } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';

const styles = {
  text: {
    border: 'solid black 2px',
    padding: 3,
  },
};
const breakLine = (
  <div style={{
    borderTop: 'solid grey 1px',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  }}
  />
);

const Container = ({ style }) => {
  const handleClickEx1 = () => {
    const subject = new Subject();
    subject.subscribe({
      next: v => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: v => console.log(`observerB: ${v}`),
    });
    subject.next(1);
    subject.next(2);
  };

  const handleClickEx2 = () => {
    const subject = new Subject();
    subject.subscribe({
      next: v => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: v => console.log(`observerB: ${v}`),
    });
    const observable = from([1, 2, 3]);
    observable.subscribe(subject);
  };

  const multicastedObservablesExample = () => {
    const source = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));

    multicasted.subscribe({
      next: v => console.log(`observerA: ${v}`),
    });
    multicasted.subscribe({
      next: v => console.log(`observerB: ${v}`),
    });

    multicasted.connect();
  };

  const referenceCounting = () => {
    const source = interval(500);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));
    let subscription1,
      subscription2,
      subscriptionConnect;

    subscription1 = multicasted.subscribe({
      next: v => console.log(`observerA: ${v}`),
    });
    subscriptionConnect = multicasted.connect();

    setTimeout(() => {
      subscription2 = multicasted.subscribe({
        next: v => console.log(`observerB: ${v}`),
      });
    }, 600);
    setTimeout(() => {
      subscription1.unsubscribe();
    }, 1200);
    setTimeout(() => {
      subscription2.unsubscribe();
      subscriptionConnect.unsubscribe(); // for the shared Observable execution
    }, 2000);
  };

  const referenceCountingWithRefCount = () => {
    const source = interval(500);
    const subject = new Subject();
    const refCounted = source.pipe(multicast(subject), refCount());
    let subscription1, subscription2;

    console.log('observerA subscribed');
    subscription1 = refCounted.subscribe({
      next: v => console.log(`observerA: ${v}`),
    });

    setTimeout(() => {
      console.log('observerB subscribed');
      subscription2 = refCounted.subscribe({
        next: v => console.log(`observerB: ${v}`),
      });
    }, 600);

    setTimeout(() => {
      console.log('observerA unsubscribed');
      subscription1.unsubscribe();
    }, 1200);

    setTimeout(() => {
      console.log('observerB unsubscribed');
      subscription2.unsubscribe();
    }, 2000);
  };

  return (
    <div style={style}>
      <h2><a href="https://rxjs-dev.firebaseapp.com/guide/subject">Subject</a></h2>
      <p style={styles.text}>
        In the example below, we have two Observers attached to a Subject, and we feed some values to the Subject:
      </p>
      <button type="button" style={{ color: 'green' }} onClick={handleClickEx1}>
        execute
      </button>
      {breakLine}
      <p style={styles.text}>
        Since a Subject is an Observer, this also means you may
        provide a Subject as the argument to the subscribe of
        any Observable, like the example below shows:
      </p>
      <button type="button" style={{ color: 'green' }} onClick={handleClickEx2}>
        execute
      </button>
      {breakLine}
      <div><b>Multicasted Observables</b></div>
      <button type="button" style={{ color: 'green' }} onClick={multicastedObservablesExample}>
        execute
      </button>
      {breakLine}
      <div><b>Reference counting</b></div>
      <button type="button" style={{ color: 'green' }} onClick={referenceCounting}>
        execute
      </button>
      {breakLine}
      <p style={styles.text}>
        refCount makes the multicasted Observable automatically start executing when the first subscriber arrives, and
        stop executing when the last subscriber leaves.<br />
        Below is an example:
      </p>
      <button type="button" style={{ color: 'green' }} onClick={referenceCountingWithRefCount}>
        execute
      </button>
    </div>
  );
};

export default Container;
