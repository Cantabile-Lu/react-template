import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Main: FC<Props> = () => {
  return <div>Main</div>;
};
Main.defaultProps = {};
export default memo(Main);
