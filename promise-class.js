class PromiseA {
  // implement solution
}

// TEST CASES

// Simple sync
const basicPromise = new PromiseA(resolve => resolve('test'));
basicPromise.then(val => console.log('Sync value is', val)); // Sync value is test

// Async
const asyncPromise = new PromiseA(resolve => setTimeout(() => resolve('test')));
asyncPromise.then(val => console.log('Async value is', val)); // Async value is test

// Async, multiple then calls
const multiThenPromise = new PromiseA(resolve =>
  setTimeout(() => resolve('test'))
);
multiThenPromise.then(val => console.log('Value1 is', val)); // Value1 is test
multiThenPromise.then(val => console.log('Value2 is', val)); // Value2 is test

// Promise.all
const promise1 = new PromiseA(resolve => resolve('test1'));
const promise2 = new PromiseA(resolve => resolve('test2'));

PromiseA.all([promise1, promise2]).then(res => console.log(res)); // ['test1', 'test2']
