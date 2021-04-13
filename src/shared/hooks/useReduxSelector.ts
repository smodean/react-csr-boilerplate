import { RootState } from '@shared/models/RootState';

import { useSelector } from 'react-redux';

export function useReduxSelector<Selected = unknown>(
  selector: (state: RootState) => Selected,
  equalityFn?: (left: Selected, right: Selected) => boolean,
): Selected {
  return useSelector<RootState, Selected>(selector, equalityFn);
}
