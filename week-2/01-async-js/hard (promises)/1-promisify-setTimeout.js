/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (ondone) {
    setTimeout(function (){
       ondone("i am doing good");
    }, n);
  });
}

wait(10000).then(okay);

function okay(result) {
  console.log(result);
}

module.exports = wait;
