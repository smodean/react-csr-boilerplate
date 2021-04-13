import { RootAction } from '@shared/models/RootAction';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
