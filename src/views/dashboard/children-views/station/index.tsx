import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Station: FC<Props> = () => {
  return <div>Station</div>;
};
Station.defaultProps = {};
export default memo(Station);
