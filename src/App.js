import React from 'react';
import FetchSingle from './views/fetch/fetchSingle';
import FetchMultiple from './views/fetch/fetchMultiple';
import SubscriptionSection from './views/SubscriptionSection';
import SubjectSection from './views/SubjectSection';

const App = () => (
  <div>
    <h1><a href="https://rxjs-dev.firebaseapp.com/guide/overview">OVERVIEW</a></h1>
    <SubscriptionSection style={{ border: 'solid pink 2px', padding: 10, marginBottom: 15 }} />
    <SubjectSection style={{ border: 'solid purple 2px', padding: 10, marginBottom: 15 }} />
    <h3>Miscellaneous</h3>
    <p>FetchSingle</p>
    <FetchSingle />
    <p>Fetch multiple</p>
    <FetchMultiple />
  </div>
);

export default App;
