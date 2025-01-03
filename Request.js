let requestCountSucess = 0;
let requestCountFailed = 0;

module.exports = {
    increment: (isSucess) => {
        if(isSucess){
            requestCountSucess++;
            return;
        }else{
            requestCountFailed++;
            return;
        }
    },

    getCount: () => requestCountSucess + requestCountFailed,

    getCountSucess: () => requestCountSucess,

    getCountFailed: () => requestCountFailed,
}