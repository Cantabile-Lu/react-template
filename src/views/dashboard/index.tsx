import {Button} from "antd";
import {useState, useMemo} from "react";
import useCreation from "@/hooks/useCreation.ts";

class Foo{
  constructor() {
    this.data = Math.random()
  }
  data: number

}
const App = () => {
   const [flag, setFlag] = useState(false)
  const getNow =  new Foo()
  const foo =  useCreation(() => new Foo(), [])
  const bar = useMemo(() => new Foo(), [])
  return (
    <div>
      <h1>Hello World</h1>
      <h1>getNow: {getNow.data}</h1>
      <h1>creation:{foo.data}</h1>
      <h1>memo: {bar.data}</h1>
      <Button onClick={() => setFlag((v) => !v)}>anniu{JSON
        .stringify(flag)}</Button>
    </div>
  );
};
export default App;
