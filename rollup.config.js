import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      bundleSize(),
    ],
  },
  {
    input: './dist/types/index.d.ts',
    output: [
      {
        file: packageJson.types,
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
];
