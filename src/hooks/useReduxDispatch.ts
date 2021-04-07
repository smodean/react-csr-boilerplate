import { DispatchRootActionType } from '@models/RootAction';

import { useDispatch } from 'react-redux';

export function useReduxDispatch(): DispatchRootActionType {
  return useDispatch<DispatchRootActionType>();
}
