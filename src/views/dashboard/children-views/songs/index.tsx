import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Songs: FC<Props> = () => {
  return <div>Songs</div>;
};
Songs.defaultProps = {};
export default memo(Songs);
