#! /usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const path = require('path');
const codeCount = require('./lib/codeCount');

program
    .version('1.0.2')
    .option('-p, --filePath [filePath]', '文件路径')
    .option('-i, --ignoreFile [ignoreFile]', '忽略文件')
    .parse(process.argv);

let filePath = program.filePath || '.';
filePath = path.resolve(__dirname, filePath);
const ignoreFile = program.ignoreFile;

const timeStart = new Date();
codeCount.codeCount(filePath, ignoreFile, function (fileCount, allCount) {
    console.log('\n\n');
    console.log('------------------分割线start------------------');
    console.log('done, 总耗时:', chalk.green(new Date() - timeStart), 'ms');
    console.log('\n');
    console.log('总文件数:' + chalk.green(fileCount) + ', 总代码行数: ' + chalk.green(allCount));
    console.log('------------------分割线end------------------');
    console.log('\n\n');
});
