import React from 'react';
import { from, Observable } from 'rxjs';
import utils from '../../../utils';

export default () => {
  const resolvingES6Way = async () => {
    try {
      const response = await fetch(utils.api.jsonType);
      const data = await utils.responseHandlerOldFashioned(response);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const observerES6Like = async (observer) => {
    try {
      const response = await fetch(utils.api.jsonType);
      const data = await utils.responseHandlerOldFashioned(response);
      observer.next(data);
      observer.complete();
    } catch (e) {
      observer.error(e);
    }
  };

  const subscriber = {
    next: data => console.log(data),
    error: utils.errorHandler,
    complete: () => console.log('done (subscriber)'),
  };

  const rxJsResolvingES6Like = () => {
    const observable = Observable.create(observerES6Like);
    observable.subscribe(subscriber);
  };

  const observerMoreReactive = {
    next: response => from(utils.responseHandlerOldFashioned(response))
      .subscribe(subscriber),
    error: utils.errorHandler,
    complete: () => console.log('done (fetch response)'),
  };

  const rxJsResolvingMoreReactive = () => {
    const observable = from(fetch(utils.api.jsonType));
    observable.subscribe(observerMoreReactive);
  };

  return (
    <div>
      <button type="button" onClick={resolvingES6Way}>
        classic async/await promise handling
      </button>
      <button type="button" onClick={rxJsResolvingES6Like}>
        RxJs promise handling, combined with async/await
      </button>
      <button type="button" onClick={rxJsResolvingMoreReactive}>
        RxJs promise handling, with observables
      </button>
    </div>
  );
};
