// Code

interface IdValidationResponse {
  valid: boolean;
  id: string;
  type: "user" | "project" | "smurf" | "prebuild";
}

// Exports

export default IdValidationResponse;
