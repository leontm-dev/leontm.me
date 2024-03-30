// Code

type ApiResponse = {
  responseInformation: {
    type: "response" | "error" | "info";
    message: string;
    statusCode: number;
    status: number;
    thrownAt: Date;
    processable: boolean;
  };
  responseData: Record<string, any> | "none";
};

// Exports

export { ApiResponse };
