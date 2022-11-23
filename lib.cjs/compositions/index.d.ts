import { CompositionItem } from '../compositionItem';
export type NarrowStrategy = 'dropEllipsis' | 'dropNav';
export declare function narrowToWideCompositions(current: number | null, total: number, narrowStrategies: NarrowStrategy[], renderNav?: boolean): Generator<CompositionItem[], void, unknown>;
export declare function narrowToWideCompositionsUnfiltered(current: number, total: number, renderNav?: boolean): Generator<CompositionItem[]>;
