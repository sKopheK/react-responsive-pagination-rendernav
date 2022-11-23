declare function narrowToWidePaginationItemRanges(start: number, end: number, collapsePos: 'L' | 'R'): Generator<({
    type: "page";
    page: number;
} | {
    type: "…L" | "…R";
    page: undefined;
})[], void, unknown>;
export { narrowToWidePaginationItemRanges as narrowToWideRanges };
