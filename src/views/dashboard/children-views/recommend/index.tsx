import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = () => {
  return <div>Reaimmend</div>;
};
Recommend.defaultProps = {};
export default memo(Recommend);
