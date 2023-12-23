import {SetStateAction, Dispatch, useState, useCallback} from "react";
import index from "@/hooks/useUnmountedRef";

function index<S>(initialState: S| (() => S)): [S, Dispatch<SetStateAction<S>>]

function useSafeState<S = undefined>(): [S | undefined,
Dispatch<SetStateAction<S | undefined>>]

function useSafeState<S> (initialState?: S| (() => S)): [S | undefined, Dispatch<SetStateAction<S>>] {
  const isUmountRef = index()
  const [state, setState] = useState(initialState)
  const setCurrentState = useCallback((currentState: any) => {
    if(isUmountRef.current) return
    setState(currentState)
  }, [])
  return [state, setCurrentState]
}
export default index
