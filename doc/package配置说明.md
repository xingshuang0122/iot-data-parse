单文件配置(main,typings,module)

```
{
  "name": "@oscura/iot-data-parse",
  "version": "1.0.4",
  "description": "设备数据解析",
  "author": "Oscura",
  "license": "MIT",
  "main": "out/index.js",
  "typings": "out/index.d.ts",
  "repository": {
    "type": "git",
    "directory": "https://github.com/xingshuang0122/iot-data-parse.git"
  },
  "files": [
    "dist",
    "*.d.ts",
    "src",
    "out"
  ],
  "keywords": [
    "iot-data-parse",
    "iot",
    "parse"
  ],
  "bugs": {
    "email": "xingshuang_cool@163.com",
    "url": "https://github.com/xingshuang0122/iot-data-parse/issues"
  },
  "scripts": {
    "dev": "ts-node ./src/index.ts",
    "rollup": "rollup --config ./config/rollup.config.js",
    "test": "jest",
    "test-c": "jest --coverage"
  },
  "engines": {
    "node": ">=12.16.3"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.8",
    "@babel/core": "^7.12.9",
    "@babel/preset-env": "^7.12.7",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^16.0.0",
    "@rollup/plugin-node-resolve": "^10.0.0",
    "@rollup/plugin-typescript": "^6.1.0",
    "@types/jest": "^26.0.15",
    "jest": "^26.6.3",
    "rollup": "^2.33.3",
    "rollup-plugin-terser": "^7.0.2",
    "ts-jest": "^26.4.4",
    "ts-node": "^9.0.0",
    "tslib": "^2.0.3",
    "tslint": "^6.1.3",
    "typescript": "^4.1.2"
  },
  "dependencies": {}
}

```

多文件配置(main,typings,module)

```
{
  "name": "@oscura/iot-data-parse",
  "version": "1.0.4",
  "description": "设备数据解析",
  "author": "Oscura",
  "license": "MIT",
  "main": "dist/lib/index.js",
  "module": "dist/index.es.js",
  "typings": "dist/types/index.d.ts",
  "repository": {
    "type": "git",
    "directory": "https://github.com/xingshuang0122/iot-data-parse.git"
  },
  "files": [
    "dist",
    "*.d.ts",
    "src",
    "out"
  ],
  "keywords": [
    "iot-data-parse",
    "iot",
    "parse"
  ],
  "bugs": {
    "email": "xingshuang_cool@163.com",
    "url": "https://github.com/xingshuang0122/iot-data-parse/issues"
  },
  "scripts": {
    "dev": "ts-node ./src/index.ts",
    "rollup": "rollup --config ./config/rollup.config.js",
    "test": "jest",
    "test-c": "jest --coverage"
  },
  "engines": {
    "node": ">=12.16.3"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.8",
    "@babel/core": "^7.12.9",
    "@babel/preset-env": "^7.12.7",
    "@rollup/plugin-babel": "^5.2.1",
    "@rollup/plugin-commonjs": "^16.0.0",
    "@rollup/plugin-node-resolve": "^10.0.0",
    "@rollup/plugin-typescript": "^6.1.0",
    "@types/jest": "^26.0.15",
    "jest": "^26.6.3",
    "rollup": "^2.33.3",
    "rollup-plugin-terser": "^7.0.2",
    "ts-jest": "^26.4.4",
    "ts-node": "^9.0.0",
    "tslib": "^2.0.3",
    "tslint": "^6.1.3",
    "typescript": "^4.1.2"
  },
  "dependencies": {}
}

```
