import { useState, useCallback } from 'react';

export default function useToggleState(
  initialState = false,
): readonly [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState<boolean>(initialState);

  const toggleState = useCallback<() => void>(() => setState((st) => !st), [setState]);

  return [state, toggleState, setState] as const;
}
