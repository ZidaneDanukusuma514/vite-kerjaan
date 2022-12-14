import React from "react";
type Props = {
  children?: React.ReactNode;
};
function TodoGroup({ children }: Props) {
  return <div className="container mx-auto my-4 px-4 py-6">{children}</div>;
}

export default TodoGroup;
