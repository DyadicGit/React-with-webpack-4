import React from 'react';
import FetchSingle from './views/fetch/fetchSingle';
import FetchMultiple from './views/fetch/fetchMultiple';
import SubscriptionSection from './views/SubscriptionSection';
import SubjectSection from './views/SubjectSection';
import FetchMultiplePromises from './views/fetch/fetchMultiplePromises';

const styles = {
  getBorder: (color = 'pink', thikness = 3) => ({ border: `solid ${color} ${thikness}px`, padding: 10, marginBottom: 10, marginTop: 10 }),
  bold: { fontWeight: 'bold' },
};

const App = () => (
  <div>
    <h1><a href="https://rxjs-dev.firebaseapp.com/guide/overview">OVERVIEW</a></h1>

    <SubscriptionSection style={styles.getBorder('pink')} />

    <SubjectSection style={styles.getBorder('purple')} />

    <div style={styles.getBorder('blue')}>
      <h3>Section for testing</h3>
      <div style={styles.getBorder('black', 1)}>
        <p style={styles.bold}>FetchSingle</p>
        <FetchSingle />
      </div>

      <div style={styles.getBorder('black', 1)}>
        <p style={styles.bold}>Fetch multiple with RxJS</p>
        <FetchMultiple />
      </div>

      <div style={styles.getBorder('black', 1)}>
        <p style={styles.bold}>Fetch multiple without RxJS</p>
        <FetchMultiplePromises />
      </div>
    </div>
  </div>
);

export default App;
