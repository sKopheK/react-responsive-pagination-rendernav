export declare function createWidthCalculator(baseMetrics: WidthCalculatorBaseMetrics | null): ((items: import("../compositionItem").CompositionItem[]) => number) | {
    requiredBaseMetrics: {
        normalPageSingleDigit: {
            type: "page";
            page: number;
        };
        normalPageDoubleDigit: {
            type: "page";
            page: number;
        };
        activePageSingleDigit: {
            type: "active";
            page: number;
        };
        activePageDoubleDigit: {
            type: "active";
            page: number;
        };
        navPreviousEnabled: {
            type: "<";
            page: number | undefined;
        };
        navPreviousDisabled: {
            type: "<";
            page: number | undefined;
        };
        navNextEnabled: {
            type: ">";
            page: number | undefined;
        };
        navNextDisabled: {
            type: ">";
            page: number | undefined;
        };
        ellipsis: {
            type: "…L" | "…R";
            page: undefined;
        };
    };
};
declare function createGraph(baseMetrics: WidthCalculatorBaseMetrics): (items: import("../compositionItem").CompositionItem[]) => number;
export type WidthCalculatorBaseMetrics = {
    outerFrameWidth: number;
    itemWidths: {
        normalPageSingleDigit: number;
        normalPageDoubleDigit: number;
        activePageSingleDigit: number;
        activePageDoubleDigit: number;
        navPreviousEnabled: number;
        navPreviousDisabled: number;
        navNextEnabled: number;
        navNextDisabled: number;
        ellipsis: number;
    };
};
export type WidthCalculator = ReturnType<typeof createGraph>;
export {};
