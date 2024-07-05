// Imports

import express from "express";
import dotenv from "dotenv";

// Code

dotenv.config();

const validateReq = (
  req: express.Request,
  requestedTier: 1 | 2 | 3 | 4 | 5 | 6
): { p: boolean; requestedTier: number; currentTier: number } => {
  let returnObj: { p: boolean; requestedTier: number; currentTier: number } = {
    p: false,
    requestedTier,
    currentTier: 0,
  };

  // Bestimme das aktuelle Tier basierend auf den Anforderungsheadern
  let actualTier = 0;
  if (
    req.headers.authorization === `DEV ${process.env.DEV_TOKEN}` &&
    req.headers["x-leontm-tier"] &&
    req.headers["x-leontm-auth"] === process.env.ADMIN_KEY
  ) {
    actualTier = parseInt(<string>req.headers["x-leontm-tier"]);
  } else if (
    req.baseUrl === "leontm.me" &&
    req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`
  ) {
    actualTier = 5; // Annahme, dass dies Tier 5 entspricht
  } else if (req.headers.authorization === `DEV ${process.env.DEV_TOKEN}`) {
    actualTier = 4; // Annahme, dass dies Tier 4 entspricht
  }

  // Prüfe, ob das aktuelle Tier gleich oder höher als das angeforderte Tier ist
  if (actualTier >= requestedTier) {
    returnObj.p = true;
    returnObj.currentTier = actualTier;
  }

  return returnObj;
};

// Exports

export default validateReq;
