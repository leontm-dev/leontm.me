// Code

type ApiResponse = {
  status: number;
  message: string;
  data: Record<string, any> | null | any[];
};

// Exports

export { ApiResponse };
