import { useCallback, useState } from 'react';

export function useToggleState(
  initialState = false,
): readonly [boolean, VoidFunction, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState<boolean>(initialState);

  const toggleState = useCallback<VoidFunction>(() => setState((st) => !st), []);

  return [state, toggleState, setState] as const;
}
