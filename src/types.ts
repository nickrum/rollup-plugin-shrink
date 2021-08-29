import { JsMinifyOptions } from '@swc/core';

export type ShrinkOptions = Omit<JsMinifyOptions, 'sourceMap'>;
