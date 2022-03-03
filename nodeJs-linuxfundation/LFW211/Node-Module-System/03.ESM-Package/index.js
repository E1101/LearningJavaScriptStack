// We can opt-in in ESM by default by adding "type": "module" in package.json
// `format.mjs` can be renamed back to `format.js`
import { realpath } from 'fs/promises'
import url from 'url'
// ESM does not support loading modules without the full extension.
// Load all named export into an object named `format`
import * as format from './format.js'

// `realpath` to normalize path for scenarios where symlinks are used
const isMain = process.argv[1] && // Absolute path to file
  await realpath(process.argv[1]) === await realpath(url.fileURLToPath(import.meta.url))

if (isMain) {
  const { default: pino } = await import('pino')
  const logger = pino()
  logger.info(format.upper('my-package started'))
  process.stdin.resume()
}

// Can be imported within another ESM module
// > echo "import uprev from './index.js'; console.log(uprev('hello'))" | node --input-type=module
export default (str) => {
  return format.upper(str).split('').reverse().join('')
}
