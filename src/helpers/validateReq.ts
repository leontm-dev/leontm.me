// Imports

import express from "express";
import dotenv from "dotenv";

// Code

dotenv.config();

const validateReq = (
  req: express.Request,
  tier: 1 | 2 | 3 | 4 | 5 | 6
): { p: boolean; requestedTier: number; currentTier: number } => {
  console.log(req.headers);
  console.log(process.env);
  let returnObj: { p: boolean; requestedTier: number; currentTier: number } = {
    p: false,
    requestedTier: tier,
    currentTier: 0,
  };
  switch (tier) {
    case 6:
      if (
        req.headers.authorization === `DEV ${process.env.DEV_TOKEN}` &&
        req.headers["x-leontm-tier"] === "6" &&
        req.headers["x-leontm-auth"] === process.env.ADMIN_KEY
      ) {
        returnObj.p = true;
        returnObj.currentTier = 6;
      }
      break;
    case 5:
      if (
        req.baseUrl === "leontm.me" &&
        req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`
      ) {
        returnObj.p = true;
        returnObj.currentTier = 5;
      }
      break;
    case 4:
      if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
        returnObj.p = true;
        returnObj.currentTier = 4;
      }
      break;
    case 3:
      // Hier können Sie die Bedingungen für Stufe 3 hinzufügen
      // Beispiel:
      // if (/* Bedingung für Stufe 3 */) {
      //   returnObj.p = true;
      //   returnObj.currentTier = 3;
      // }
      break;
    case 2:
      // Hier können Sie die Bedingungen für Stufe 2 hinzufügen
      break;
    case 1:
      // Hier können Sie die Bedingungen für Stufe 1 hinzufügen
      break;
    default:
      returnObj.p = false;
      returnObj.currentTier = NaN;
      break;
  }
  return returnObj;
};

// Exports

export default validateReq;
