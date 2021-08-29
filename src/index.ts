import { Plugin } from 'rollup';
import { minify } from '@swc/core';

import { DEFAULT_OPTIONS } from './constants';
import { ShrinkOptions } from './types';

export default function shrink(
  options: ShrinkOptions = DEFAULT_OPTIONS
): Plugin {
  return {
    name: 'shrink',

    async renderChunk(code, _chunk, outputOptions) {
      const result = await minify(code, {
        ...options,
        sourceMap:
          outputOptions.sourcemap === true ||
          typeof outputOptions.sourcemap === 'string'
      });

      return {
        code: result.code,
        map: result.map
      };
    }
  };
}
