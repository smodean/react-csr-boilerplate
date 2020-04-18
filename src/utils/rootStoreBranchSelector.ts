import { RootState, KeyOfRootState } from '@@RootState';

export const rootStoreBranchSelector = <
S extends Partial<RootState> = RootState,
T extends KeyOfRootState = KeyOfRootState,
>(branch: T) => (state: S): S[T] => state[branch];
