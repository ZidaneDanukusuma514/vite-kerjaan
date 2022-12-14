import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Warning() {
  const edit = useSelector((state: RootState) => state.todos.edit);
  return (
    <div className="text-center font-bold text-white/75 hover:text-white">
      {!edit ? "This is Writing mode" : "This is edit mode"}
    </div>
  );
}

export default Warning;
