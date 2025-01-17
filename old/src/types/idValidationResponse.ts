// Code

interface IdValidationResponse {
  valid: boolean;
  id: string;
  type: "user" | "project" | "smurf" | "prebuild" | null;
}

// Exports

export default IdValidationResponse;
