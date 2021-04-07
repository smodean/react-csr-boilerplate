import { KeyOfRootState, RootState } from '@models/RootState';

export const rootStoreBranchSelector = <
  BranchName extends KeyOfRootState,
>(branch: BranchName) => (state: RootState): RootState[BranchName] => state[branch];
