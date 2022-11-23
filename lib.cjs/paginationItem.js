"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compositionToPaginationItems = void 0;
function compositionToPaginationItems(compositionItems, options) {
    return compositionItems.map(function (_a) {
        var type = _a.type, page = _a.page;
        switch (type) {
            case '<':
                return {
                    type: 'previous',
                    key: "previous".concat(page === undefined ? '_disabled' : ''),
                    label: (options === null || options === void 0 ? void 0 : options.previousLabel) || '«',
                    a11yLabel: 'Previous',
                    gotoPage: page,
                };
            case '>':
                return {
                    type: 'next',
                    key: "next".concat(page === undefined ? '_disabled' : ''),
                    label: (options === null || options === void 0 ? void 0 : options.nextLabel) || '»',
                    a11yLabel: 'Next',
                    gotoPage: page,
                };
            case '…L':
            case '…R':
                return {
                    type: 'ellipsis',
                    key: "ellipsis_".concat(type === '…L' ? 'l' : 'r'),
                    label: '…',
                    a11yHidden: true,
                    gotoPage: undefined,
                };
            default:
                return {
                    type: 'page',
                    key: "".concat(type, "_").concat(page),
                    label: page.toString(),
                    a11yLabel: (type === 'active' && (options === null || options === void 0 ? void 0 : options.a11yActiveLabel)) || undefined,
                    gotoPage: page,
                    active: type === 'active',
                };
        }
    });
}
exports.compositionToPaginationItems = compositionToPaginationItems;
