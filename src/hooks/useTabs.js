import { useState, useCallback} from 'react'

export function useTabs() {
  const [tabState, setTabState] = useState({ index: 0 });

  const onChange = useCallback(index => setTabState({...tabState, index}), [tabState]);

  return {
    onChange,
    ...tabState,
  }
}
