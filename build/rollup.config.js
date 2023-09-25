import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'packages/cc-ui/index.ts',
  output: {
    format: 'es',
    file: 'packages/cc-ui/lib/index.js',
  },
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    vuePlugin({
      include: /\.vue$/,
      css: true,
    }),
    esbuild({
      include: /\.[jt]sx?$/,
      sourceMap: process.env.NODE_ENV === 'production',
      minify: process.env.NODE_ENV === 'production',
      target: 'es2018',
      loaders: {
        '.vue': 'ts',
      },
    }),
    postcss({
      extract: true,
    }),
    commonjs(),
  ],
  external: ['vue'],
}
