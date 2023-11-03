import { parallel, series } from 'gulp'
import { run, withTaskName } from './utils'
// 串行 和 并行 方式打包

// gulp 不叫打包 做代码转化 vite
export default series(
  withTaskName('clean', async () => run('rm -rf ./dist')),
  withTaskName('buildPackages', () =>
    run('pnpm run --parallel build --filter ./packages ')
  )
)
