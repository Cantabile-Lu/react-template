import {SetStateAction, Dispatch, useState, useCallback} from "react";
import useUnmountedRef from "@/hooks/useUnmountedRef.ts";

function useSafeState<S>(initialState: S| (() => S)): [S, Dispatch<SetStateAction<S>>]

function useSafeState<S = undefined>(): [S | undefined,
Dispatch<SetStateAction<S | undefined>>]

function useSafeState<S> (initialState?: S| (() => S)): [S | undefined, Dispatch<SetStateAction<S>>] {
  const isUmountRef = useUnmountedRef()
  const [state, setState] = useState(initialState)
  const setCurrentState = useCallback((currentState: any) => {
    if(isUmountRef.current) return
    setState(currentState)
  }, [])
  return [state, setCurrentState]
}
export default useSafeState
