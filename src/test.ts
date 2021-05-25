import { echo } from '.'

function run() {
  echo.log('log black')
  echo.warn('warn yellow')
  echo.info('info magenta')
  echo.error('error red')
  echo.grey('grey')
  echo.blue('blue')
  echo.green('green')
  echo.cyan('cyan')
}

run()
