import { languageType } from './language.type';

export interface IUsersOptionsType {
  function: string;
  language: languageType;
}
export interface IUserType {
  name: string;
  options: IUsersOptionsType;
}
