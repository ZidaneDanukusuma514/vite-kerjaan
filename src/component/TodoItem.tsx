import React from "react";
import { dataType } from "../feature/TodoSlice";
import { AiFillCloseSquare, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleDeleteTask, handleEditTask } from "../feature/TodoSlice";
type keranjang = {
  data: dataType;
};

function TodoItem({ data }: keranjang) {
  const dispatch = useDispatch();

  const themes: any = {
    "Sangat Penting": `bg-rose-500 hover:bg-rose-600`,
    "Lumayan Penting": "bg-yellow-500 hover:bg-yellow-600",
    Santai: "bg-sky-500 hover:bg-sky-600",
  };
  const addThemechange = themes[data.mode];

  return (
    <div className={`${addThemechange} p-4 rounded-lg`}>
      <div className="flex items-center">
        <p className="w-full px-2 text-white font-semibold">
          {data.text} {data.mode}
        </p>
        <button onClick={() => dispatch(handleEditTask(data))}>
          <AiFillEdit style={{ color: "white", fontSize: "25px" }} />
        </button>
        <button onClick={() => dispatch(handleDeleteTask(data.id))}>
          <AiFillCloseSquare style={{ color: "white", fontSize: "25px" }} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
