"use strict";
// Imports
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../db/user");
// Code
function validateId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const testable = [
            { function: user_1.getUById, type: "user" },
        ];
        const result = {
            valid: false,
            id: id,
            type: null,
        };
        for (const test of testable) {
            const result = yield test.function(id);
            result.valid = true;
            result.type = test.type;
        }
        return result;
    });
}
// Exports
exports.default = validateId;
