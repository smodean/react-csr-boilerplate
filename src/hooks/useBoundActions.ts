import { useMemo } from 'react';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { useReduxDispatch } from './useReduxDispatch';

export function useBoundActions<
  A extends ActionCreator<unknown>,
  B extends ActionCreator<unknown>,
>(actionCreator: A): B;

export function useBoundActions<A, M extends ActionCreatorsMapObject<A>>(actionCreators: M): M;

export function useBoundActions<
  M extends ActionCreatorsMapObject<unknown>,
  N extends ActionCreatorsMapObject<unknown>,
>(actionCreators: M): N;

export function useBoundActions<A, C extends ActionCreator<A>>(actionCreators: C): C {
  const dispatch = useReduxDispatch();

  return useMemo(() => bindActionCreators(actionCreators, dispatch), [actionCreators, dispatch]);
}
