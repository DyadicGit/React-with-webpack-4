import React from 'react';
import utils from '../../../utils';

const ids = [...Array(300).keys()].filter(e => e % 30 === 0);
const jsonResponseHandler = (response) => {
  response.json()
    .then(data => console.log(data))
    .catch(e => console.log('error in json:', e));
};

export default () => {
  const fetchMultipleCascadedPromise = () => {
    ids.forEach((id) => {
      fetch(utils.api.giveGithubUsers(id))
        .then(jsonResponseHandler)
        .catch(e => console.log('error in fetch', e));
    });
  };
  const fetchMultiplePromiseAll = () => {
    const fetchPromises = ids.map(id => fetch(utils.api.giveGithubUsers(id)));
    Promise.all(fetchPromises)
      .then((responses) => {
        const jsonPromises = responses.flatMap(response => response.json());
        Promise.all(jsonPromises)
          .then(datas => datas
            .forEach(
              data => console.log(data),
            ))
          .catch(e => console.log('error in json:', e));
      })
      .catch(e => console.log('error: promise.all fetch', e))
      .finally(() => console.log('done (Promise.all fetches)'));
  };
  const fetchMultipleAsyncAwait = async () => {
    ids.forEach(async (id) => {
      try {
        const response = await fetch(utils.api.giveGithubUsers(id));
        const data = await utils.responseHandlerOldFashioned(response);
        console.log(data);
      } catch (e) {
        console.log('error async', e);
      }
    });
  };
  return (
    <div>
      <button type="button" onClick={fetchMultipleCascadedPromise}>
        Promise cascaded
      </button>
      <button type="button" onClick={fetchMultiplePromiseAll}>
        Promise All
      </button>
      <button type="button" onClick={fetchMultipleAsyncAwait}>
        Async/await
      </button>
    </div>
  );
};
