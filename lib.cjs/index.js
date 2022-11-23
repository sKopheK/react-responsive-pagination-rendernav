"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap5PaginationPreset = exports.bootstrap4PaginationPreset = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var usePaginationItems_1 = require("./hooks/usePaginationItems");
var dom_1 = require("./helpers/dom");
exports.bootstrap4PaginationPreset = {};
exports.bootstrap5PaginationPreset = {
    ariaCurrentAttr: true,
    a11yActiveLabel: '',
    srOnlyClassName: '',
};
exports.default = (0, react_1.memo)(BootstrapPagination);
/* eslint-disable jsx-a11y/anchor-is-valid */
function BootstrapPagination(_a) {
    var current = _a.current, total = _a.total, handlePageChange = _a.onPageChange, maxWidth = _a.maxWidth, narrowStrategy = _a.narrowStrategy, className = _a.className, _b = _a.extraClassName, extraClassName = _b === void 0 ? 'justify-content-center' : _b, _c = _a.pageItemClassName, pageItemClassName = _c === void 0 ? 'page-item' : _c, _d = _a.pageLinkClassName, pageLinkClassName = _d === void 0 ? 'page-link' : _d, _e = _a.activeItemClassName, activeItemClassName = _e === void 0 ? 'active' : _e, _f = _a.disabledItemClassName, disabledItemClassName = _f === void 0 ? 'disabled' : _f, _g = _a.srOnlyClassName, srOnlyClassName = _g === void 0 ? 'sr-only' : _g, previousLabel = _a.previousLabel, nextLabel = _a.nextLabel, _h = _a.renderNav, renderNav = _h === void 0 ? true : _h, _j = _a.a11yActiveLabel, a11yActiveLabel = _j === void 0 ? '(current)' : _j, ariaCurrentAttr = _a.ariaCurrentAttr;
    var _k = (0, usePaginationItems_1.usePaginationItems)(current, total, maxWidth, {
        narrowStrategy: narrowStrategy,
        previousLabel: previousLabel,
        renderNav: renderNav,
        nextLabel: nextLabel,
        a11yActiveLabel: a11yActiveLabel,
    }), items = _k.items, ref = _k.ref, clearCache = _k.clearCache;
    (0, react_1.useEffect)(function () {
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
        return a11yLabel ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("span", { "aria-hidden": "true" }, label),
            srOnlyClassName && react_1.default.createElement("span", { className: srOnlyClassName }, a11yLabel))) : (label);
    }
    return (react_1.default.createElement("ul", { className: getContainerClassName(), ref: ref }, items.map(function (item) {
        return item.gotoPage !== undefined ? (
        // item = ClickableItem
        react_1.default.createElement("li", { key: item.key, className: "".concat(pageItemClassName).concat(item.active && activeItemClassName ? ' ' + activeItemClassName : ''), "aria-current": item.active && ariaCurrentAttr ? 'page' : undefined },
            react_1.default.createElement("a", { className: pageLinkClassName, href: "#", onClick: (0, dom_1.preventDefault)(function () { return handlePageChange(item.gotoPage); }), "aria-label": item.a11yLabel }, getLabel(item.label, item.a11yLabel)))) : (
        // item = NonClickableItem
        react_1.default.createElement("li", { key: item.key, className: "".concat(pageItemClassName, " ").concat(disabledItemClassName), "aria-hidden": item.a11yHidden },
            react_1.default.createElement("span", { className: pageLinkClassName, "aria-label": item.a11yLabel }, getLabel(item.label, item.a11yLabel))));
    })));
}
BootstrapPagination.propTypes = {
    current: prop_types_1.default.number.isRequired,
    total: prop_types_1.default.number.isRequired,
    onPageChange: prop_types_1.default.func.isRequired,
    maxWidth: prop_types_1.default.number,
    narrowStrategy: prop_types_1.default.oneOfType([
        prop_types_1.default.oneOf(['dropEllipsis', 'dropNav']),
        prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['dropEllipsis', 'dropNav']).isRequired),
    ]),
    className: prop_types_1.default.string,
    extraClassName: prop_types_1.default.string,
    pageItemClassName: prop_types_1.default.string,
    pageLinkClassName: prop_types_1.default.string,
    activeItemClassName: prop_types_1.default.string,
    disabledItemClassName: prop_types_1.default.string,
    disabledLinkClassName: prop_types_1.default.string,
    srOnlyClassName: prop_types_1.default.string,
    previousLabel: prop_types_1.default.string,
    nextLabel: prop_types_1.default.string,
    renderNav: prop_types_1.default.bool,
    a11yActiveLabel: prop_types_1.default.string,
    ariaCurrentAttr: prop_types_1.default.bool,
};
