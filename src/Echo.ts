import * as util from 'util'
import { write } from './tool'

export class Echo {
  // 正常黑色
  log(message: any = '', ...params: any[]): void {
    write('', util.format(message, ...params))
  }

  // 紫色
  info(message: any = '', ...params: any[]): void {
    write('magenta', util.format(message, ...params))
  }

  // 红色
  error(message: any = '', ...params: any[]): void {
    write('red', util.format(message, ...params))
  }

  // 黄色
  warn(message: any = '', ...params: any[]): void {
    write('yellow', util.format(message, ...params))
  }

  // 灰色
  grey(message: any = '', ...params: any[]): void {
    write('gray', util.format(message, ...params))
  }

  // 绿色
  green(message: any = '', ...params: any[]): void {
    write('green', util.format(message, ...params))
  }

  // 蓝色
  blue(message: any = '', ...params: any[]): void {
    write('blue', util.format(message, ...params))
  }

  // 青色
  cyan(message: any = '', ...params: any[]): void {
    write('cyan', util.format(message, ...params))
  }
}
