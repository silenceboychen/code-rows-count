## codeLineCount


一个用来统计项目内代码行数的工具.

## Installation

```
$ npm install -g code-rows-count
```

or

```
$ yarn global add code-rows-count
```

## Usage

```
$ codeLineCount -h

Usage: codeLineCount [options]

Options:
  -V, --version                  output the version number
  -p, --filePath [filePath]      文件路径
  -i, --ignoreFile [ignoreFile]  忽略文件
  -h, --help                     output usage information
```

> -p: 需要统计代码行数项目的绝对路径

> -i: 不需要参与统计的项目内的文件名, 多个文件名使用逗号分割


example:

```
$ codeLineCount -p /home/silence/nodejs/test -i node_modules,yarn.lock,.git,package.json.lock

文件路径:/home/silence/nodejs/test/color.js, 文件行数:19
文件路径:/home/silence/nodejs/test/commander.js, 文件行数:14
文件路径:/home/silence/nodejs/test/http.js, 文件行数:6
文件路径:/home/silence/nodejs/test/package.json, 文件行数:6
文件路径:/home/silence/nodejs/test/aaa/color.js, 文件行数:19



------------------分割线start------------------
done, 总耗时: 5 ms


总文件数:5, 总代码行数: 64
------------------分割线end------------------
```

## License

[MIT](LICENSE)




<!-- ## 代码提交规范 -->
<!--  -->
<!-- 1.  安装 [Commitizen](https://github.com/commitizen/cz-cli) 工具 -->
<!--  -->
<!--     ``` -->
<!--     $ npm install -g commitizen -->
<!--     ``` -->
<!--  -->
<!-- 2.  替换 `git commit` 命令 -->
<!--  -->
<!--     ``` -->
<!--     $ git cz -->
<!--     ``` -->
<!-- 3.  git cz以后会出现选项框用于选择本次提交的内容类型 -->
<!-- ``` -->
<!--     feat：新功能（feature） -->
<!--     fix：修补bug -->
<!--     docs：文档（documentation） -->
<!--     style： 格式（不影响代码运行的变动） -->
<!--     refactor：重构（即不是新增功能，也不是修改bug的代码变动） -->
<!--     perf: 提高性能的代码 -->
<!--     test：增加测试 -->
<!--     build: 影响构建系统或外部依赖项的更改 -->
<!--     ci: 修改ci配置文件或者脚本 -->
<!--     chore：构建过程或辅助工具的变动 -->
<!--     revert: 恢复之前的提交 -->
<!-- ``` -->
<!-- 4.  选择以后会出现Denote the scope of this change ($location, $browser, $compile, etc.) 用于输入本次提交改变的功能范围 -->
<!-- 5.  然后出现Write a short, imperative tense description of the change 用于输入本次提交内容的概要 -->
<!-- 6.  Provide a longer description of the change，用于输入本次提交内容的详细    描述 -->
<!-- 7.  List any breaking changes，用于输入本次提交的重要变更内容 -->
<!-- 8.  List any issues closed by this change 用于输入本次提交解决的问题 -->
