import {useRef} from "react";

/**
 * @description 缓存数据, 解决闭包问题
 * @param value 需要缓存的值
 * @return current 返回最新的值
 */
 const useLatest = <T>(value: T): {readonly current: T} => {
   const ref = useRef(value)
  ref.current = value
  return  ref
}
export default useLatest
