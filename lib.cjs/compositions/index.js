"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.narrowToWideCompositionsUnfiltered = exports.narrowToWideCompositions = void 0;
var compositionItem_1 = require("../compositionItem");
var iterator_1 = require("../helpers/iterator");
var ranges_1 = require("./ranges");
function narrowToWideCompositions(current, total, narrowStrategies, renderNav) {
    var compositions, _a, initialComposition, done;
    if (renderNav === void 0) { renderNav = true; }
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (current === null)
                    return [2 /*return*/];
                compositions = narrowToWideCompositionsUnfiltered(current, total, renderNav);
                if (!(narrowStrategies.length > 0)) return [3 /*break*/, 3];
                _a = compositions.next(), initialComposition = _a.value, done = _a.done;
                if (done)
                    return [2 /*return*/];
                return [5 /*yield**/, __values(initialReducedCompositions(initialComposition, narrowStrategies))];
            case 1:
                _b.sent();
                return [4 /*yield*/, initialComposition];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3: return [5 /*yield**/, __values(compositions)];
            case 4:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
exports.narrowToWideCompositions = narrowToWideCompositions;
function initialReducedCompositions(initialComposition, narrowStrategies) {
    var hasEllipsis, applicableStrategies, _loop_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hasEllipsis = initialComposition.some(compositionItem_1.isEllipsis);
                applicableStrategies = narrowStrategies.filter(function (strategy) { return strategy !== 'dropEllipsis' || hasEllipsis; });
                _loop_1 = function () {
                    var dropEllipsis, dropNav;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                dropEllipsis = applicableStrategies.includes('dropEllipsis');
                                dropNav = applicableStrategies.includes('dropNav');
                                return [4 /*yield*/, initialComposition.filter(function (item) { return (!dropEllipsis || !(0, compositionItem_1.isEllipsis)(item)) && (!dropNav || !(0, compositionItem_1.isNav)(item)); })];
                            case 1:
                                _b.sent();
                                applicableStrategies.pop();
                                return [2 /*return*/];
                        }
                    });
                };
                _a.label = 1;
            case 1:
                if (!(applicableStrategies.length > 0)) return [3 /*break*/, 3];
                return [5 /*yield**/, _loop_1()];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
function narrowToWideCompositionsUnfiltered(current, total, renderNav) {
    var navPrevious, navNext, activePage, leftRanges, rightRanges, staggeredPairs, staggeredPairs_1, staggeredPairs_1_1, _a, leftRange, rightRange, e_1_1;
    var e_1, _b;
    if (renderNav === void 0) { renderNav = true; }
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                navPrevious = (0, compositionItem_1.createNavPrevious)(current > 1 ? current - 1 : undefined);
                navNext = (0, compositionItem_1.createNavNext)(current < total ? current + 1 : undefined);
                activePage = (0, compositionItem_1.createActivePage)(current);
                leftRanges = (0, ranges_1.narrowToWideRanges)(1, current - 1, 'L');
                rightRanges = (0, ranges_1.narrowToWideRanges)(current + 1, total, 'R');
                staggeredPairs = staggeredIterationRightRangeFirst(leftRanges, rightRanges);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 8, 9, 10]);
                staggeredPairs_1 = __values(staggeredPairs), staggeredPairs_1_1 = staggeredPairs_1.next();
                _c.label = 2;
            case 2:
                if (!!staggeredPairs_1_1.done) return [3 /*break*/, 7];
                _a = staggeredPairs_1_1.value, leftRange = _a.leftRange, rightRange = _a.rightRange;
                if (!renderNav) return [3 /*break*/, 4];
                return [4 /*yield*/, __spreadArray(__spreadArray(__spreadArray(__spreadArray([navPrevious], __read(leftRange), false), [activePage], false), __read(rightRange), false), [navNext], false)];
            case 3:
                _c.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, __spreadArray(__spreadArray(__spreadArray([], __read(leftRange), false), [activePage], false), __read(rightRange), false)];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6:
                staggeredPairs_1_1 = staggeredPairs_1.next();
                return [3 /*break*/, 2];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (staggeredPairs_1_1 && !staggeredPairs_1_1.done && (_b = staggeredPairs_1.return)) _b.call(staggeredPairs_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
        }
    });
}
exports.narrowToWideCompositionsUnfiltered = narrowToWideCompositionsUnfiltered;
function staggeredIterationRightRangeFirst(leftRanges, rightRanges) {
    var zippedRanges, initial, _a, _b, leftRange, _c, rightRange, zippedRanges_1, zippedRanges_1_1, _d, nextLeftRange, nextRightRange, e_2_1;
    var e_2, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                zippedRanges = (0, iterator_1.zipIterators)(leftRanges, rightRanges);
                initial = zippedRanges.next();
                if (initial.done)
                    return [2 /*return*/];
                _a = __read(initial.value, 2), _b = _a[0], leftRange = _b === void 0 ? [] : _b, _c = _a[1], rightRange = _c === void 0 ? [] : _c;
                return [4 /*yield*/, { leftRange: leftRange, rightRange: rightRange }];
            case 1:
                _f.sent();
                _f.label = 2;
            case 2:
                _f.trys.push([2, 9, 10, 11]);
                zippedRanges_1 = __values(zippedRanges), zippedRanges_1_1 = zippedRanges_1.next();
                _f.label = 3;
            case 3:
                if (!!zippedRanges_1_1.done) return [3 /*break*/, 8];
                _d = __read(zippedRanges_1_1.value, 2), nextLeftRange = _d[0], nextRightRange = _d[1];
                if (!nextRightRange) return [3 /*break*/, 5];
                rightRange = nextRightRange;
                return [4 /*yield*/, { leftRange: leftRange, rightRange: rightRange }];
            case 4:
                _f.sent();
                _f.label = 5;
            case 5:
                if (!nextLeftRange) return [3 /*break*/, 7];
                leftRange = nextLeftRange;
                return [4 /*yield*/, { leftRange: leftRange, rightRange: rightRange }];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                zippedRanges_1_1 = zippedRanges_1.next();
                return [3 /*break*/, 3];
            case 8: return [3 /*break*/, 11];
            case 9:
                e_2_1 = _f.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 11];
            case 10:
                try {
                    if (zippedRanges_1_1 && !zippedRanges_1_1.done && (_e = zippedRanges_1.return)) _e.call(zippedRanges_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}
