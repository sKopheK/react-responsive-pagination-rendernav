import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePaginationItems } from './hooks/usePaginationItems';
import { preventDefault } from './helpers/dom';
export var bootstrap4PaginationPreset = {};
export var bootstrap5PaginationPreset = {
    ariaCurrentAttr: true,
    a11yActiveLabel: '',
    srOnlyClassName: '',
};
export default memo(BootstrapPagination);
/* eslint-disable jsx-a11y/anchor-is-valid */
function BootstrapPagination(_a) {
    var current = _a.current, total = _a.total, handlePageChange = _a.onPageChange, maxWidth = _a.maxWidth, narrowStrategy = _a.narrowStrategy, className = _a.className, _b = _a.extraClassName, extraClassName = _b === void 0 ? 'justify-content-center' : _b, _c = _a.pageItemClassName, pageItemClassName = _c === void 0 ? 'page-item' : _c, _d = _a.pageLinkClassName, pageLinkClassName = _d === void 0 ? 'page-link' : _d, _e = _a.activeItemClassName, activeItemClassName = _e === void 0 ? 'active' : _e, _f = _a.disabledItemClassName, disabledItemClassName = _f === void 0 ? 'disabled' : _f, _g = _a.srOnlyClassName, srOnlyClassName = _g === void 0 ? 'sr-only' : _g, previousLabel = _a.previousLabel, nextLabel = _a.nextLabel, _h = _a.renderNav, renderNav = _h === void 0 ? true : _h, _j = _a.a11yActiveLabel, a11yActiveLabel = _j === void 0 ? '(current)' : _j, ariaCurrentAttr = _a.ariaCurrentAttr;
    var _k = usePaginationItems(current, total, maxWidth, {
        narrowStrategy: narrowStrategy,
        previousLabel: previousLabel,
        renderNav: renderNav,
        nextLabel: nextLabel,
        a11yActiveLabel: a11yActiveLabel,
    }), items = _k.items, ref = _k.ref, clearCache = _k.clearCache;
    useEffect(function () {
        return function () { return clearCache(); };
    }, [
        clearCache,
        className,
        pageItemClassName,
        pageLinkClassName,
        activeItemClassName,
        disabledItemClassName,
        srOnlyClassName,
    ]);
    if (items.length === 0)
        return null;
    function getContainerClassName() {
        if (className !== undefined) {
            return className;
        }
        else if (extraClassName) {
            return "pagination ".concat(extraClassName);
        }
        else {
            return 'pagination';
        }
    }
    function getLabel(label, a11yLabel) {
        return a11yLabel ? (React.createElement(React.Fragment, null,
            React.createElement("span", { "aria-hidden": "true" }, label),
            srOnlyClassName && React.createElement("span", { className: srOnlyClassName }, a11yLabel))) : (label);
    }
    return (React.createElement("ul", { className: getContainerClassName(), ref: ref }, items.map(function (item) {
        return item.gotoPage !== undefined ? (
        // item = ClickableItem
        React.createElement("li", { key: item.key, className: "".concat(pageItemClassName).concat(item.active && activeItemClassName ? ' ' + activeItemClassName : ''), "aria-current": item.active && ariaCurrentAttr ? 'page' : undefined },
            React.createElement("a", { className: pageLinkClassName, href: "#", onClick: preventDefault(function () { return handlePageChange(item.gotoPage); }), "aria-label": item.a11yLabel }, getLabel(item.label, item.a11yLabel)))) : (
        // item = NonClickableItem
        React.createElement("li", { key: item.key, className: "".concat(pageItemClassName, " ").concat(disabledItemClassName), "aria-hidden": item.a11yHidden },
            React.createElement("span", { className: pageLinkClassName, "aria-label": item.a11yLabel }, getLabel(item.label, item.a11yLabel))));
    })));
}
BootstrapPagination.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    maxWidth: PropTypes.number,
    narrowStrategy: PropTypes.oneOfType([
        PropTypes.oneOf(['dropEllipsis', 'dropNav']),
        PropTypes.arrayOf(PropTypes.oneOf(['dropEllipsis', 'dropNav']).isRequired),
    ]),
    className: PropTypes.string,
    extraClassName: PropTypes.string,
    pageItemClassName: PropTypes.string,
    pageLinkClassName: PropTypes.string,
    activeItemClassName: PropTypes.string,
    disabledItemClassName: PropTypes.string,
    disabledLinkClassName: PropTypes.string,
    srOnlyClassName: PropTypes.string,
    previousLabel: PropTypes.string,
    nextLabel: PropTypes.string,
    renderNav: PropTypes.bool,
    a11yActiveLabel: PropTypes.string,
    ariaCurrentAttr: PropTypes.bool,
};
