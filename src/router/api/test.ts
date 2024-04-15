// Imports

import express from "express";

// Project-Imports

import { testResponse } from "../../controller/test";

// Code

export default (router: express.Router) => {
  router.get("/api/test", testResponse);
};
