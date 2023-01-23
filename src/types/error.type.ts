import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface CustomErrorType {
  data?: [
    {
      message: string;
    }
  ];
  message?: string;
}

export type ErrorType =
  | FetchBaseQueryError
  | SerializedError
  | CustomErrorType
  | undefined;

export interface IErrorType {
  text: string;
}
