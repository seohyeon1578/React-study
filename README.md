# React-study

## create-react-app
간편하게 프로젝트 작업 환경을 구축해 주는 도구입니다.

```cmd
yarn create react-app '프로젝트 이름'
cd '프로젝트 이름'
yarn start
```

## Babel.js
자바스크립트의 ES6의 코드를 EX5 코드로 변환해주고,<br>
리액트의 JSX 문법, 타입스크립트, 코드 압축, Proposal 까지 처리해줍니다.

### @babel/cli 로 실행하기

```cmd
yarn init -y
yarn add @babel/cli 
@babel/core 
@babel/plugin-transform-arrow-functions 
@babel/plugin-transform-template-literals 
@babel/preset-react
```

**@babel/cli 실행**
```cmd
yarn babel 파일위치.js  
 --presets=@babel/preset-react 
 --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions
```
@babel/cli를 사용하면 너무 장황한 명령어를 사용해야한다는 단점이 있다.

**Babel 설정하기**  
babel.config.js파일로 관리합니다.

* babel.config.js
```js
const presets = ['@babel/preset-react']; 
const plugins = [
  '@babel/plugin-transform-template-literals', 
  '@babel/plugin-transform-arrow-functions',
]

module.exports = { presets, plugins };
```

```cmd
yarn babel 파일위치.js
```

### 웹팩의 babel-loader로 실행하기
웬만한 프로젝트는 웹팩같은 번들러를 사용하여 빌드를 한다.  
웹팩에서는 여러가지 기능을 제공하는 로더를 사용할 수 있는데,  
babel-loader를 추가하여 빌드되었을 때 바벨로 트랜드파일링 되도록 합니다.
```cmd 
yarn add webpack webpack-cli babel-loader
```
* webpack.config.js
```js
const path = require('path');

module.exports = {
  entry: '파일위치.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  optimization: { minimizer: [] },
};
```
```cmd
yarn webpack
```

### @babel/core로 직접 실행하기
@babel/core로 실행하는 것은 자바스크립트 파일을 가져와서  
직접 자바스크립트 모듈을 돌리고 결과를 파일에 쓰는 방식이다.  
매우 직관적이고 자유도가 높다는 장점이 있다.

* runBabel.js
```js
const babel = require('@babel/core');
const fs = require('fs');

const filename = '.js';
const source = fs.readFileSync(filename, 'utf8');
const presets = ['@babel/preset-react'];
const plugins = [
  '@babel/plugin-transform-template-literals',
  '@babel/plugin-transform-arrow-functions',
];

const { code } = babel.transformSync(source, {
  filename,
  presets,
  plugins,
  configFile: false,
});
console.log(code);
```
```cmd
node runBabel.js
```
