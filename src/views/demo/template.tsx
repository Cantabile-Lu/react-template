import { memo } from "react";
import type { FC, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const Template: FC<Props> = () => {
  return <div>Template</div>;
};
Template.defaultProps = {};
export default memo(Template);
