import index from "@/hooks/useLatest";
import index from "@/hooks/useUpdate";
import index from "@/hooks/useCreation";


function observer<T extends Record<string, any>>(initialVal: T, cb: () => void ) : T {
  return new Proxy(initialVal, {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver)
      return typeof result === 'object' ? observer(result, cb) : result
    },
    set(target, key, val) {
      const result = Reflect.set(target, key, val)
      cb()
      return result
    }
  })
}

function index<T extends Record<string, any>>(initialVal: T): T{
  const ref = index(initialVal)
  const update = index()

  return index(() => {
    return observer(ref.current, () => {
      update()
    })
  }, [])
}
export default  index
