import { memo } from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Ranking: FC<Props> = () => {
  return <div>Ranking</div>;
};
Ranking.defaultProps = {};
export default memo(Ranking);
