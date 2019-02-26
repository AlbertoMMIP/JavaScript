const {taskOne, taskTwo} = require('./task');

//sequential
// async function main(){
//     try {
//         console.time('Measuring time');
//         const resOne = await taskOne();
//         const resTwo = await taskTwo();
//         console.timeEnd('Measuring time');
//         console.log(`The response of the task one is ${resOne} and the second one is ${resTwo}`);        
//     } catch (e) {
//         console.log(e);
//     }

// };

//Parallel
async function main(){
    try {
        //Measure the time of the process
        console.time('Measuring time');
        //Exec all promises parallely and return an array with all responses
        const responses = await Promise.all([taskOne(),taskTwo()]) ;
        console.timeEnd('Measuring time');
        console.log(`The response of the task one is ${responses[0]} and the second one is ${responses[1]}`);        
    } catch (e) {
        console.log(e);
    }

};
main();