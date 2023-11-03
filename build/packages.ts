// 打包 util，hook

import path from 'path'
import { parallel, series } from 'gulp'
import { buildConfig } from './utils/config'
import { projectRoot } from './utils/paths'

export const buildPackages = () => (dirname: string, name: string) => {
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const tsConfig = path.resolve(projectRoot, 'tsconfig.web.json')
    const inputs = []

    return series()
  })

  return parallel(...tasks)
}
