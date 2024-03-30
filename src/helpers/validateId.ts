// Imports

import { getUById } from "../db/user";

// Project-Imports

import IdValidationResponse from "../types/idValidationResponse";

// Code

async function validateId(id: string): Promise<IdValidationResponse> {
  const testable: { function: Function; type: string }[] = [
    { function: getUById, type: "user" },
  ];
  const result: IdValidationResponse = {
    valid: false,
    id: id,
    type: null,
  };

  for (const test of testable) {
    const result = await test.function(id);

    result.valid = true;
    result.type = test.type;
  }
  return result;
}

// Exports

export default validateId;
