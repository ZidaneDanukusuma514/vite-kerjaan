import React, { useState, useEffect } from "react";
import { RxPaperPlane } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  inputSearchHandle,
  handleAddTask,
  handleUpdate,
} from "../feature/TodoSlice";
import { RootState } from "../../app/store";
import { v4 } from "uuid";

function InputSearch() {
  const dispatch = useDispatch();
  const textTyped = useSelector((state: RootState) => state.todos.input.text);
  const modeTyped = useSelector((state: RootState) => state.todos.input.mode);

  const [status, setStatus] = useState(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSearchHandle(String(e.target.value)));
  };
  // const handleSubmit = () => {

  // };

  useEffect(() => {
    console.log(textTyped);
  }, [textTyped]);

  return (
    <div className="flex">
      <input
        className="flex-1 rounded-l-md text-lg text-black placeholder-black/75 px-2 bg-white"
        type="text"
        placeholder="Put your todo here"
        onChange={handleSearch}
        value={textTyped}
      />
      <button
        onClick={() =>
          dispatch(
            handleUpdate({
              id: String(v4()),
              text: textTyped,
              mode: modeTyped,
            })
          )
        }
        className="px-4 bg-white rounded-r-md"
      >
        <RxPaperPlane style={{ color: "black", fontSize: "18px" }} />
      </button>
    </div>
  );
}

export default InputSearch;
