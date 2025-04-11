import type { AnimFunction } from '../types/dialog';

export function customAnimation(fn: AnimFunction): AnimFunction {
  return fn;
}
