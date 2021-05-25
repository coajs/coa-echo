import * as util from 'util'
import bin from './bin'

export default new (class {
  // 正常黑色
  log(message: any = '', ...params: any[]) {
    bin.stdoutWrite('black', util.format(message, ...params))
  }

  // 紫色
  info(message: any = '', ...params: any[]) {
    bin.stdoutWrite('magenta', util.format(message, ...params))
  }

  // 红色
  error(message: any = '', ...params: any[]) {
    bin.stdoutWrite('red', util.format(message, ...params))
  }

  // 黄色
  warn(message: any = '', ...params: any[]) {
    bin.stdoutWrite('yellow', util.format(message, ...params))
  }

  // 灰色
  grey(message: any = '', ...params: any[]) {
    bin.stdoutWrite('gray', util.format(message, ...params))
  }

  // 绿色
  green(message: any = '', ...params: any[]) {
    bin.stdoutWrite('green', util.format(message, ...params))
  }

  // 蓝色
  blue(message: any = '', ...params: any[]) {
    bin.stdoutWrite('blue', util.format(message, ...params))
  }

  // 青色
  cyan(message: any = '', ...params: any[]) {
    bin.stdoutWrite('cyan', util.format(message, ...params))
  }
})()
