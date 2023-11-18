import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Focus: FC<Props> = () => {
  return <div>Focus</div>;
};
Focus.defaultProps = {};
export default memo(Focus);
