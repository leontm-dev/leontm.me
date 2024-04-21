// Imports

import express from "express";

// Project-Imports

import sendApiResponse from "../../../helpers/sendApiResponse";
import validateId from "../../../helpers/validateId";
import {
  createC,
  getAllC,
  getCById,
  getCByName,
  deleteCById,
  deleteCByName,
  updateCById,
  updateCByName,
} from "../db/collection";

// Code

// Exports

// Path: src/db/collection.ts
