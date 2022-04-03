import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const bundle = 'tools';

const prod = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs',
      plugins: [
        prod && terser(),
      ],
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm',
      plugins: [
        prod && terser(),
      ],
    },
    {
      name: 'Tools',
      file: `${dist}/${bundle}.js`,
      format: 'umd',
      plugins: [
        prod && terser(),
      ],
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
