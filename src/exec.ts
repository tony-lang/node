import { AbsolutePath } from 'tony-lang/src/types/path'
import childProcess from 'child_process'

export const exec = async (
  file: AbsolutePath,
  args: string[] = [],
): Promise<void> => {
  return new Promise((resolve) => {
    childProcess
      .spawn('node', [file.path, ...args], { stdio: 'inherit' })
      .on('close', resolve)
  })
}
