import { DispatchRootActionType } from '@@RootAction';

import { useDispatch } from 'react-redux';

export function useReduxDispatch(): DispatchRootActionType {
  return useDispatch<DispatchRootActionType>();
}
