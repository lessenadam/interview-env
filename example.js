// write a promise that resolves in 5 seconds
const TIMEOUT = 1000;

const fiveSecondPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, TIMEOUT);
  });

// fiveSecondPromise.then(() => {
//     console.warn('done');
// });

// const doWork = async () => {
// 	await fiveSecondPromise();
// 	console.warn('done')
// }

const f = async () => {
  await fiveSecondPromise();
  console.warn('done');
};

const doWork = () => {
  // fiveSecondPromise().then(() => {
  //     console.warn('done');
  // });
  f();
};

doWork();
