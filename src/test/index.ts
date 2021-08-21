import { echo } from '..'

function run(): void {
  echo.log('log default')
  echo.warn('warn yellow')
  echo.info('info magenta')
  echo.error('error red')
  echo.grey('grey')
  echo.blue('blue')
  echo.green('green')
  echo.cyan('cyan')
}

run()
