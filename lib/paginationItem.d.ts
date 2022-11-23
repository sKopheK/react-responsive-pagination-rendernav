import { CompositionItem } from './compositionItem';
type BaseItem = {
    type: string;
    key: string;
    label: string;
    a11yLabel?: string;
};
type ClickableItem = BaseItem & {
    gotoPage: number;
    active?: boolean;
};
type NonClickableItem = BaseItem & {
    gotoPage: undefined;
    a11yHidden?: boolean;
};
type PageItem = ClickableItem & {
    type: 'page';
};
type NavItem = ClickableItem & {
    type: NavType;
};
type NavDisabledItem = NonClickableItem & {
    type: NavType;
};
type EllipsisItem = NonClickableItem & {
    type: 'ellipsis';
};
export type PaginationItem = NavItem | NavDisabledItem | EllipsisItem | PageItem;
export type NavType = 'next' | 'previous';
export declare function compositionToPaginationItems(compositionItems: CompositionItem[], options?: {
    nextLabel?: string;
    previousLabel?: string;
    renderNav?: boolean;
    a11yActiveLabel: string;
}): PaginationItem[];
export {};
