import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Singer: FC<Props> = () => {
  return <div>Singer</div>;
};
Singer.defaultProps = {};
export default memo(Singer);
