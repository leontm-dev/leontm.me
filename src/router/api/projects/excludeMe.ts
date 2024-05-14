// Imports

import express from "express";

// Project-Imports

// Code

export default (router: express.Router) => {
  router.post("/projects/excludeMe/collection/create");
  router.put("/projects/excludeMe/collection/update");
  router.delete("/projects/excludeMe/collection/delete");
  router.get("/projects/excludeMe/collection/get");
  router.get("/projects/excludeMe/collection/getAll");
};
