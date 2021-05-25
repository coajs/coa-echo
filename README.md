# coa-echo

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-echo.svg?style=flat-square)](https://www.npmjs.org/package/coa-echo)
[![npm downloads](https://img.shields.io/npm/dm/coa-echo.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-echo)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-echo/pulls)

Lightweight console color logger for node.js

## Installing

Using npm

```shell script
$ npm install coa-echo
```

Using yarn

```shell script
$ yarn add coa-echo
```

## Example

```typescript
import { echo } from 'coa-echo'

echo.log('log black')
echo.warn('warn yellow')
echo.info('info magenta')
echo.error('error red')
echo.grey('grey')
echo.blue('blue')
echo.green('green')
echo.cyan('cyan')
```

_Note: Typescript is highly recommended_

## API

##### echo.log(message[,params])

##### echo.warn(message[,params])

##### echo.info(message[,params])

##### echo.error(message[,params])

##### echo.grey(message[,params])

##### echo.blue(message[,params])

##### echo.green(message[,params])

##### echo.cyan(message[,params])

## License

[MIT](LICENSE)
