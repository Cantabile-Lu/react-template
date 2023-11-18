import { memo } from "react";

import type { FC, ReactNode } from "react";

interface Props {
  name: string;
  age: number;
  height?: number;
  children?: ReactNode;
}

const Download: FC<Props> = (props) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );
};

Download.defaultProps = {
  height: 1.88,
  age: 18
};
export default memo(Download);
