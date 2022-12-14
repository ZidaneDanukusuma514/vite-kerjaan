import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { inputPriorityHandle } from "../feature/TodoSlice";
function InputPriority() {
  const dispatch = useDispatch();
  const modeTyped = useSelector((state: RootState) => state.todos.input.mode);

  const handlePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputPriorityHandle(String(e.target.value)));
  };
  useEffect(() => {
    console.log(modeTyped);
  }, [modeTyped]);

  return (
    <ul className="flex text-center bg-teal-600 p-2 rounded-lg justify-evenly">
      <li className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 checked:outline-none focus:ring focus:ring-sky-300 text-white px-4 py-2">
        <input
          type="radio"
          id="num3"
          value={"Santai"}
          checked={modeTyped === "Santai"}
          onChange={handlePriority}
        />
        <label htmlFor="num3">Santai</label>
      </li>
      <li className="bg-yellow-500 text-white px-4 py-2">
        <input
          type="radio"
          id="num2"
          value={"Lumayan Penting"}
          checked={modeTyped === "Lumayan Penting"}
          onChange={handlePriority}
        />
        <label htmlFor="num2">Lumayan Penting</label>
      </li>
      <li className="bg-red-500 text-white px-4 py-2">
        <input
          type="radio"
          id="num1"
          value={"Sangat Penting"}
          checked={modeTyped === "Sangat Penting"}
          onChange={handlePriority}
        />
        <label htmlFor="num1">Sangat Penting</label>
      </li>
    </ul>
  );
}

export default InputPriority;
