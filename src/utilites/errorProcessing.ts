import { ErrorType } from '../types/error.type';

export function getErrorMessage(currentError: ErrorType): string {
  let errMsg = '';
  if (currentError) {
    if ('status' in currentError) {
      errMsg =
        'error' in currentError
          ? currentError.error
          : JSON.stringify(currentError.data);
      if (currentError.status === 'PARSING_ERROR') {
        if (currentError.originalStatus === 401) {
          errMsg = 'Помилка авторизації';
          // signIn(false);
        }
      } else if ('data' in currentError) {
        errMsg =
          'error' in currentError
            ? currentError.error
            : JSON.stringify(currentError.data);
        // : currentError.data[0].message;
      }
    } else {
      // you can access all properties of `SerializedError` here
      if (currentError.message) {
        errMsg = currentError.message;
      }
    }
  }
  return errMsg;
}
