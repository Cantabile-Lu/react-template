export interface Result<T = any> {
  Language: string;
  Total: number;
  LastUpdate: string;
  message: string;
  status: boolean;
  success: boolean;
  data: T;
}
