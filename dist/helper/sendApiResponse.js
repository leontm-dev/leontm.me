"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
// Code
const sendApiResponse = (status, content) => {
    const messages = {
        200: "Success",
        201: "Created",
        204: "No Content",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        409: "Conflict",
        500: "Internal Server Error",
    };
    const message = messages[status] || "Unknown";
    const response = {
        status,
        message,
        data: content,
    };
    return response;
};
// Exports
exports.default = sendApiResponse;
