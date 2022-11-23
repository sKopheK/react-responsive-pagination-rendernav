import { useEffect } from 'react';
import { narrowToWideCompositions } from '../compositions';
import { sanatizeInteger } from '../helpers/util';
import { compositionToPaginationItems } from '../paginationItem';
import { useWidestComposition } from './useWidestComposition';
export function usePaginationItems(inputCurrent, inputTotal, maxWidth, options) {
    var total = sanatizeInteger(inputTotal);
    var current = total < 1 ? null : Math.max(1, Math.min(sanatizeInteger(inputCurrent), total));
    var narrowStrategies = sanatizeNarrowStrategies(options === null || options === void 0 ? void 0 : options.narrowStrategy);
    var narrowToWideCompositionsProvider = function () {
        return narrowToWideCompositions(current, total, narrowStrategies, options === null || options === void 0 ? void 0 : options.renderNav);
    };
    var _a = useWidestComposition(narrowToWideCompositionsProvider, maxWidth), compositionItems = _a.items, ref = _a.ref, clearCache = _a.clearCache;
    useEffect(function () {
        return function () { return clearCache(); };
    }, [clearCache, options === null || options === void 0 ? void 0 : options.previousLabel, options === null || options === void 0 ? void 0 : options.nextLabel]);
    var items = compositionToPaginationItems(compositionItems, options);
    return { items: items, ref: ref, clearCache: clearCache };
}
function sanatizeNarrowStrategies(inputNarrowStrategies) {
    return (Array.isArray(inputNarrowStrategies)
        ? inputNarrowStrategies
        : [inputNarrowStrategies]).filter(function (strategy) { return strategy === 'dropEllipsis' || strategy === 'dropNav'; });
}
