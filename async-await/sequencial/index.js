const {taskOne, taskTwo} = require('./task');

async function main(){
    try {
        console.time('Measuring time');
        const resOne = await taskOne();
        const resTwo = await taskTwo();
        console.timeEnd('Measuring time');
        console.log(`The response of the task one is ${resOne} and the second one is ${resTwo}`);        
    } catch (e) {
        console.log(e);
    }

};

main();