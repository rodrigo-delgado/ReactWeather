function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('a and b need to be numbers')
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success!!!!', sum);
}), function (err) {
  console.log(err, 'error');
}
addPromise('lala', 10).then(function (sum) {
  console.log('this should not show up');
}, function (err) {
  console.log('this should appers', err);
})
