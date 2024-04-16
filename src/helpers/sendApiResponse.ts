// Imports

import { ApiResponse } from "../types/apiResponse";

// Code

const sendApiResponse = (
  status: number,
  content: any,
  details: string
): ApiResponse => {
  const messages: { [key: number]: string } = {
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

  const response: ApiResponse = {
    responseInformation: {
      type: status >= 200 ? "response" : status >= 300 ? "info" : "error",
      message: details,
      statusCode: status,
      status: message,
      thrownAt: new Date(),
      processable: status >= 200 && status < 300,
    },
    responseData: content || "none",
  };

  return response;
};

// Exports

export default sendApiResponse;
