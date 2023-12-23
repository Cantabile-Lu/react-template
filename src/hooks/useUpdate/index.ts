
import {useCallback, useState} from "react";
/**
 * @description 强制组件重新渲染
 * @return Function
 */
function useUpdate(){
  const [, setState] = useState({})
  return useCallback(() => setState({}), [])
}
export default  useUpdate
