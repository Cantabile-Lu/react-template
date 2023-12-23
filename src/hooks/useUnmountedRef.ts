import {useEffect, useRef} from "react";

/**
 * @description : 判断组件是否卸载
 * @return {current: boolean }
 */
const useUnmountedRef = (): {readonly current: boolean} => {
    const unmountedRef = useRef(false)

  useEffect(() => {
    unmountedRef.current = false
    return () => {
      unmountedRef.current = true
    }
  }, []);
   return unmountedRef
}
export default  useUnmountedRef
