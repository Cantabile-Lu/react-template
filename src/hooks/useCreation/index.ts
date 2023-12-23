
import {DependencyList, useRef} from "react";

function depsAreSame(prev:DependencyList, next: DependencyList): boolean{
  if(prev === next) return true

  for(let i = 0; i <  prev.length; i++){
    console.log(`🚀🚀🚀🚀🚀-> in useCreation.ts on 8`,prev, next)
    if(!Object.is(prev[i], next[i]))return false
  }
  return true
}
/**
 * @description 确保实列不会被重复创建
 * @param factory 执行函数
 * @param deps 对应数组
 * @return  返回实列
 */
function index<T>(factory: () => T, deps: DependencyList): T {
    const {current} = useRef({
      deps,
      obj: undefined as undefined | T,
      initialized: false
    })
    if(!current.initialized|| !depsAreSame(current.deps, deps)){
      current.obj = factory()
      current.deps = deps
      current.initialized = true
    }
    return current.obj as T

}
export default  index
