import { DispatchRootAction } from '@shared/models/RootAction';

import { useDispatch } from 'react-redux';

export function useReduxDispatch(): DispatchRootAction {
  return useDispatch<DispatchRootAction>();
}
