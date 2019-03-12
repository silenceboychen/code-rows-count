const fs = require('fs');
const _ = require('lodash');
let arr;
fs.readFile('README.md', function (res, data) {
    arr = data.toString().split('\n');
    console.log(arr);
    _.remove(arr, (item) => {
        if (item === '') {
            return true;
        }
    });
    console.log(arr.length);
});
