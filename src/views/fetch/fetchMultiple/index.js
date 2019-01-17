import React from 'react';
import * as RxJs from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, concatMap, mergeMap, concatAll } from 'rxjs/operators';
import utils from '../../../utils';

const subscriber = {
  next: utils.responseHandler,
  error: utils.errorHandler,
  complete: () => console.log('done (subscriber)'),
};
const ids = [...Array(300).keys()].filter(e => e % 30 === 0);

export default () => {
  const fetchSingleWithSubscriber = () => {
    // RxJS's ajax function handles the response type (json or text), and when done returns an Observable
    const observable = ajax(utils.api.jsonType);
    observable.subscribe(subscriber);
  };
  const fetchSingleWithPipeMapper = () => {
    const observable = ajax(utils.api.textType).pipe(
      map(utils.responseHandler),
      catchError(utils.errorHandler),
    );
    observable.subscribe();
  };

  const multipleFetchConcatMap = () => {
    const observables = RxJs.from(ids).pipe(concatMap(id => ajax(utils.api.giveGithubUsers(id))));
    observables.subscribe(subscriber);
  };
  const multipleFetchMergeMap = () => {
    const observables = RxJs.from(ids).pipe(mergeMap(id => ajax(utils.api.giveGithubUsers(id))));
    observables.subscribe(subscriber);
  };
  const multipleFetchForkJoin = () => {
    const observables = RxJs.forkJoin(
      ids.map(id => ajax(utils.api.giveGithubUsers(id))),
    ).pipe(concatAll());
    observables.subscribe(subscriber);
  };

  return (
    <div>
      <button type="button" onClick={() => { fetchSingleWithPipeMapper(); fetchSingleWithSubscriber(); }}>
        Single fetch, with RxJS's ajax
      </button>
      <div style={{ display: 'grid' }}>
        <button type="button" onClick={multipleFetchConcatMap}>
         Multiple fetch <b>concatMap()</b>
        </button>
        <button type="button" onClick={multipleFetchMergeMap} style={{ height: 50, marginTop: 20, bottom: 10 }}>
         Multiple fetch <b>mergeMap()</b>&emsp;<b style={{ fontSize: '1rem', color: 'green' }}>Winner!</b>
        </button>
        <p style={{ lineHeight: '1.5rem' }}>
          It executes requests in parallel and it is fault tolerant so we still
          display most of the posts even if some of the requests fail.
        </p>
        <button type="button" onClick={multipleFetchForkJoin}>
         Multiple fetch <b>forkJoin()</b>
        </button>
      </div>
    </div>
  );
};
