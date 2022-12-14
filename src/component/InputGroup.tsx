import React from "react";
type Props = {
  children?: React.ReactNode;
};
function InputGroup({ children }: Props) {
  return (
    <div className="flex flex-col space-y-4 bg-teal-700 rounded-lg my-4 px-4 py-6">
      {children}
    </div>
  );
}

export default InputGroup;
