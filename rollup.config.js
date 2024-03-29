import transpile from 'rollup-plugin-transpile';
import dts from 'rollup-plugin-dts';

import pkg from './package.json' assert { type: 'json' };

const external = Object.keys(pkg.dependencies);

export default [
  {
    input: 'src/index.ts',
    plugins: [transpile({ transform: 'typescript' })],
    external,
    output: [
      {
        format: 'cjs',
        file: pkg['exports']['.']['require']['default'],
        exports: 'auto'
      },
      { format: 'es', file: pkg['exports']['.']['import']['default'] }
    ]
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: pkg['exports']['.']['import']['types']
    }
  }
];
