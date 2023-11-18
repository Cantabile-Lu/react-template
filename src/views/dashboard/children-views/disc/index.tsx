import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Disc: FC<Props> = () => {
  return <div>Disc</div>;
};
Disc.defaultProps = {};
export default memo(Disc);
