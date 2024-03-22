// Imports

import { ApiResponse } from "../types/apiResponse";

// Code

const sendApiResponse = (status: number, content: any): ApiResponse => {
  const response: ApiResponse = {
    status,
    message: "",
    data: content,
  };
  switch (status) {
    case 200:
      response.message = "Success";
      break;
    case 201:
      response.message = "Created";
      break;
    case 204:
      response.message = "No Content";
      break;
    case 400:
      response.message = "Bad Request";
      break;
    case 401:
      response.message = "Unauthorized";
      break;
    case 403:
      response.message = "Forbidden";
      break;
    case 404:
      response.message = "Not Found";
      break;
    case 409:
      response.message = "Conflict";
      break;
    case 500:
      response.message = "Internal Server Error";
      break;
    default:
      response.message = "Unknown";
      break;
  }
  return response;
};

// Exports

export default sendApiResponse;
