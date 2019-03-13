const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');
let allCount = 0;
let fileCount = 0;
const filePath = path.resolve(__dirname, '../../chenhao/test');
function readFile (filePath, callback) {
    fs.stat(filePath, (error, stats) => {
        if (error) {
            console.log(filePath);
            console.error('获取文件stats失败');
            console.log(error);
        } else {
            const isFile = stats.isFile();
            const isDir = stats.isDirectory();
            if (isDir) {
                readDir(filePath, callback);
            }
            if (isFile) {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    const arr = data.toString().split('\n');
                    _.remove(arr, (item) => {
                        if (item === '') {
                            return true;
                        }
                    });
                    console.log('文件路径:' + chalk.blue.underline.bold(filePath) + ', 文件行数:' + chalk.green(arr.length));
                    allCount += arr.length;
                    fileCount++;
                    callback();
                });
            }
        }
    });
}

function readDir (filePath, callback) {
    fs.readdir(filePath, (err, files) => {
        if (err) {
            console.error(err);
        } else {
            let count = 0;
            const checkEnd = () => {
                ++count === files.length && callback();
            };
            for (let i = 0; i < files.length; i++) {
                if (files[i] === 'node_modules') {
                    checkEnd();
                    continue;
                }
                const fp = path.join(filePath, files[i]);
                readFile(fp, checkEnd);
            }
            // 为空时直接回调
            files.length === 0 && callback();
        }
    });
}
const timeStart = new Date();
readFile(filePath, function () {
    console.log('\n\n');
    console.log('------------------分割线start------------------');
    console.log('done, 总耗时:', chalk.green(new Date() - timeStart), 'ms');
    console.log('\n');
    console.log('总文件数:' + chalk.green(fileCount) + ', 总代码行数: ' + chalk.green(allCount));
    console.log('------------------分割线end------------------');
    console.log('\n\n');
});
