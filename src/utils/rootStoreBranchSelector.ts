import { RootState, KeyOfRootState } from '@@RootState';

export const rootStoreBranchSelector = <T extends KeyOfRootState>(branch: T) =>
  (state: RootState): RootState[T] => state[branch];
