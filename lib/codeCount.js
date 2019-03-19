const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');
let allCount = 0;
let fileCount = 0;
function readFile (filePath, ignoreFileArr, callback) {
    fs.stat(filePath, (error, stats) => {
        if (error) {
            console.log(filePath);
            console.error('获取文件stats失败');
            console.log(error);
        } else {
            const isFile = stats.isFile();
            const isDir = stats.isDirectory();
            if (isDir) {
                readDir(filePath, ignoreFileArr, callback);
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
                    callback(fileCount, allCount);
                });
            }
        }
    });
};

function readDir (filePath, ignoreFileArr, callback) {
    fs.readdir(filePath, (err, files) => {
        if (err) {
            console.error(err);
        } else {
            let count = 0;
            const checkEnd = () => {
                ++count === files.length && callback(fileCount, allCount);
            };
            for (let i = 0; i < files.length; i++) {
                if (ignoreFileArr.includes(files[i])) {
                    checkEnd();
                    continue;
                }
                const fp = path.join(filePath, files[i]);
                readFile(fp, '', checkEnd);
            }
            // 为空时直接回调
            files.length === 0 && callback(fileCount, allCount);
        }
    });
}

exports.codeCount = function (filePath, ignoreFile, callback) {
    // filePath = path.resolve(__dirname, filePath);
    const ignoreFileArr = ignoreFile ? ignoreFile.split(',').filter(item => item) : [];
    readFile(filePath, ignoreFileArr, callback);
};
