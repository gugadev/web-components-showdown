import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
// import sass from 'rollup-plugin-sass'
import postcss from 'rollup-plugin-postcss'
// import { terser } from 'rollup-plugin-terser'

const ELEMENTS_PATH = path.resolve(__dirname, 'components')
const DIST_PATH = path.resolve(__dirname, 'dist')

const extensions = [
  '.ts', '.js'
]

const plugins = [
  resolve({
    extensions,
    mainFields: ['module']
  }),
  commonjs(),
  babel({ extensions }),
  postcss({
    modules: false,
    inject: false
  }),
  // terser()
]

const buildConfig = (name) => ({
  input: path.resolve(ELEMENTS_PATH, name, `${name}.component.ts`),
  output: {
    file: path.resolve(DIST_PATH, `${name}.mjs`),
    format: 'esm'
  },
  plugins
})

module.exports = [
  buildConfig('button'),
  buildConfig('checkbox'),
  buildConfig('input'),
  buildConfig('select')
]
