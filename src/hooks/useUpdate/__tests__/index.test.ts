import {act, renderHook} from '@testing-library/react'
import {expect} from "vitest";

import useUpdate from "@/hooks/useUpdate";

describe("useUpdate", () => {
  it("should update", () => {
    let count = 0;
    const {result} =  renderHook(() => {
      const update = useUpdate();
      return {
        count,
        onChange: () => {
          count++;
          update()
        }
      }
    })
    expect(result.current.count).toBe(0)
    act(result.current.onChange)
    expect(result.current.count).toBe(1)
  })
  it('should return same update function', () => {
    const hooks = renderHook(() => useUpdate())
    const preUpdate = hooks.result.current
    hooks.rerender()
    expect(hooks.result.current).toEqual(preUpdate)
  })
})
