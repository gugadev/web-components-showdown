import { resolve } from 'path'
import node from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

const ELEMENTS_PATH = resolve(__dirname, '..', 'src', 'components')
const DIST_PATH = resolve(paths.dist, `${name}.mjs`)

const plugins = [
  node({ module: true }),
  babel(),
  postcss({
    modules: false,
    inject: false
  }),
  terser()
]

const buildConfig = (name) => ({
  input: resolve(ELEMENTS_PATH, name, `${name}.module.ts`),
  output: {
    file: resolve(DIST_PATH, name, `${name}.mjs`),
    format: 'esm'
  },
  plugins
})

module.exports = [
  buildConfig('button')
]
