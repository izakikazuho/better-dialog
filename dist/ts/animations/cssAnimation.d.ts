import type { AnimFunction } from '../types/dialog';
export declare function cssAnimation({ duration, showClass, closeClass, }?: {
    duration?: number | undefined;
    showClass?: string | undefined;
    closeClass?: string | undefined;
}): AnimFunction;
