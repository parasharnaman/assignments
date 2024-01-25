/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const currentdate = new Date();
    let a =currentdate.getTime();
    let b=a+milliseconds;
    while(b>Date.now()){

    }
    return new Promise(function(ondone){
        ondone();
    })
}

module.exports = sleep;

//this also works
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const currentdate = new Date();
    let a =currentdate.getTime();
    let b=a+milliseconds;
    while(b>Date.now()){

    }
    return new Promise(function(ondone){
        ondone();
    })
}

module.exports = sleep;
