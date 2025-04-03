import type { AnimFunction } from '../types/dialog';

export function custom(fn: AnimFunction): AnimFunction {
  return fn;
}
