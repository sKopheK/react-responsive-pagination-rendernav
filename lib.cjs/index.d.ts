import React from 'react';
import PropTypes from 'prop-types';
import { NarrowStrategy } from './compositions';
export declare const bootstrap4PaginationPreset: {};
export declare const bootstrap5PaginationPreset: {
    ariaCurrentAttr: boolean;
    a11yActiveLabel: string;
    srOnlyClassName: string;
};
declare const _default: React.MemoExoticComponent<typeof BootstrapPagination>;
export default _default;
declare function BootstrapPagination({ current, total, onPageChange: handlePageChange, maxWidth, narrowStrategy, className, extraClassName, pageItemClassName, pageLinkClassName, activeItemClassName, disabledItemClassName, srOnlyClassName, previousLabel, nextLabel, renderNav, a11yActiveLabel, ariaCurrentAttr, }: BootstrapPaginationProps): JSX.Element | null;
declare namespace BootstrapPagination {
    var propTypes: {
        current: PropTypes.Validator<number>;
        total: PropTypes.Validator<number>;
        onPageChange: PropTypes.Validator<(...args: any[]) => any>;
        maxWidth: PropTypes.Requireable<number>;
        narrowStrategy: PropTypes.Requireable<NonNullable<string | string[] | null | undefined>>;
        className: PropTypes.Requireable<string>;
        extraClassName: PropTypes.Requireable<string>;
        pageItemClassName: PropTypes.Requireable<string>;
        pageLinkClassName: PropTypes.Requireable<string>;
        activeItemClassName: PropTypes.Requireable<string>;
        disabledItemClassName: PropTypes.Requireable<string>;
        disabledLinkClassName: PropTypes.Requireable<string>;
        srOnlyClassName: PropTypes.Requireable<string>;
        previousLabel: PropTypes.Requireable<string>;
        nextLabel: PropTypes.Requireable<string>;
        renderNav: PropTypes.Requireable<boolean>;
        a11yActiveLabel: PropTypes.Requireable<string>;
        ariaCurrentAttr: PropTypes.Requireable<boolean>;
    };
}
type BootstrapPaginationProps = {
    current: number;
    total: number;
    onPageChange: (page: number) => void;
    maxWidth?: number;
    narrowStrategy?: NarrowStrategy | NarrowStrategy[];
    className?: string;
    extraClassName?: string;
    pageItemClassName?: string;
    pageLinkClassName?: string;
    activeItemClassName?: string;
    disabledItemClassName?: string;
    disabledLinkClassName?: string;
    srOnlyClassName?: string;
    previousLabel?: string;
    nextLabel?: string;
    renderNav?: boolean;
    a11yActiveLabel?: string;
    ariaCurrentAttr?: boolean;
};
