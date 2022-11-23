"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaginationItems = void 0;
var react_1 = require("react");
var compositions_1 = require("../compositions");
var util_1 = require("../helpers/util");
var paginationItem_1 = require("../paginationItem");
var useWidestComposition_1 = require("./useWidestComposition");
function usePaginationItems(inputCurrent, inputTotal, maxWidth, options) {
    var total = (0, util_1.sanatizeInteger)(inputTotal);
    var current = total < 1 ? null : Math.max(1, Math.min((0, util_1.sanatizeInteger)(inputCurrent), total));
    var narrowStrategies = sanatizeNarrowStrategies(options === null || options === void 0 ? void 0 : options.narrowStrategy);
    var narrowToWideCompositionsProvider = function () {
        return (0, compositions_1.narrowToWideCompositions)(current, total, narrowStrategies, options === null || options === void 0 ? void 0 : options.renderNav);
    };
    var _a = (0, useWidestComposition_1.useWidestComposition)(narrowToWideCompositionsProvider, maxWidth), compositionItems = _a.items, ref = _a.ref, clearCache = _a.clearCache;
    (0, react_1.useEffect)(function () {
        return function () { return clearCache(); };
    }, [clearCache, options === null || options === void 0 ? void 0 : options.previousLabel, options === null || options === void 0 ? void 0 : options.nextLabel]);
    var items = (0, paginationItem_1.compositionToPaginationItems)(compositionItems, options);
    return { items: items, ref: ref, clearCache: clearCache };
}
exports.usePaginationItems = usePaginationItems;
function sanatizeNarrowStrategies(inputNarrowStrategies) {
    return (Array.isArray(inputNarrowStrategies)
        ? inputNarrowStrategies
        : [inputNarrowStrategies]).filter(function (strategy) { return strategy === 'dropEllipsis' || strategy === 'dropNav'; });
}
