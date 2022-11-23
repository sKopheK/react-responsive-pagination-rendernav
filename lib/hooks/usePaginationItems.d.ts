import { NarrowStrategy } from '../compositions';
export declare function usePaginationItems(inputCurrent: number, inputTotal: number, maxWidth: number | undefined, options?: {
    nextLabel?: string;
    previousLabel?: string;
    renderNav?: boolean;
    a11yActiveLabel: string;
    narrowStrategy?: NarrowStrategy | NarrowStrategy[];
}): {
    items: import("../paginationItem").PaginationItem[];
    ref: (element: HTMLElement | null) => void;
    clearCache: () => void;
};
