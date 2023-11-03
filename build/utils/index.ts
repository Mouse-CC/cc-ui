/**
 * 子进程
 * child_process.spawn(command[, args][, options])
 * command <string> 要运行的命令。
 * args <string[]> 字符串参数列表。
 * options <Object>
 *  - cwd <string> | <URL> 子进程的当前工作目录
 *  - stdio <Array> | <string> 子进程的标准输入输出配置。'inherit'：通过相应的标准输入输出流传入/传出父进程
 * - shell <boolean> | <string> 如果是 true，则在 shell 内运行 command。 在 Unix 上使用 '/bin/sh'，在 Windows 上使用    process.env.ComSpec。 可以将不同的 shell 指定为字符串。 请参阅 shell 的要求和默认的 Windows shell。 默认值: false （没有 shell）x
 */

import { spawn } from 'child_process'
import { projectRoot } from './paths'

export const withTaskName = <T extends object>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

// 在 node 中使用子进程 执行脚本
// 传入命令
export const run = async (command: string) => {
  return new Promise((resolve) => {
    // 分割命令， 例： rm -rf 分割为 ['rm', '-rf']
    const [cmd, ...args] = command.split(' ')
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit', // 将子进程的输出共享给父进程
      shell: true,
    })
    // 在进程结束并且子进程的标准输入输出流关闭后，触发 'close' 事件
    app.on('close', resolve)
  })
}
