const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try{
            throw new Error('Problem problem')
            await sleep(4000);
            return 'ONE VALUE';
        }catch(e){

        }
    },

    async taskTwo(){
        try{
            await sleep(2000);
            return 'SECOND VALUE';  
        }catch(e){

        }
    }
};