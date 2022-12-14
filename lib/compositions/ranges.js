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
import { createEllipsis, createPage } from '../compositionItem';
function narrowToWidePaginationItemRanges(start, end, collapsePos) {
    var _a, _b, range, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, 6, 7]);
                _a = __values(narrowToWideNumberRanges(start, end, collapsePos)), _b = _a.next();
                _d.label = 1;
            case 1:
                if (!!_b.done) return [3 /*break*/, 4];
                range = _b.value;
                return [4 /*yield*/, range.map(function (item) {
                        return item === '???' ? createEllipsis(collapsePos) : createPage(item);
                    })];
            case 2:
                _d.sent();
                _d.label = 3;
            case 3:
                _b = _a.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
export { narrowToWidePaginationItemRanges as narrowToWideRanges };
function narrowToWideNumberRanges(first, last, collapsePos) {
    var fullWidth, iterationWidth, range;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fullWidth = last - first + 1;
                iterationWidth = 1;
                _a.label = 1;
            case 1:
                if (!(iterationWidth < fullWidth)) return [3 /*break*/, 4];
                range = getCollapsedRange(first, last, iterationWidth, collapsePos);
                if (!range) return [3 /*break*/, 3];
                return [4 /*yield*/, range];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                iterationWidth++;
                return [3 /*break*/, 1];
            case 4: return [4 /*yield*/, getFullRange(first, last)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function getCollapsedRange(first, last, requiredWidth, collapsePos) {
    if (requiredWidth < 3)
        return;
    var widthOfRange = requiredWidth - 2;
    return collapsePos === 'L'
        ? __spreadArray([first, '???'], __read(getFullRange(last - (widthOfRange - 1), last)), false) : __spreadArray(__spreadArray([], __read(getFullRange(first, first + (widthOfRange - 1))), false), ['???', last], false);
}
function getFullRange(start, end) {
    if (end < start)
        return [];
    return Array.from(Array(end - start + 1).keys(), function (i) { return i + start; });
}
