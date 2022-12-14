import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type dataType = {
  id: string;
  text?: string;
  mode: string;
};

export type inputType = {
  id: string;
  text?: string;
  mode: string;
};
export interface CounterState {
  edit: boolean;
  data: dataType[];
  input: inputType;
}

const initialState: CounterState = {
  edit: false,
  input: {
    id: "",
    text: "",
    mode: "",
  },
  data: [
    {
      id: "1",
      text: "Play guitar for 30 min",
      mode: "Santai",
    },
    {
      id: "2",
      text: "Play Soccer with friend",
      mode: "Lumayan Penting",
    },
    {
      id: "3",
      text: "Play guitar for 30 min",
      mode: "Sangat Penting",
    },
    {
      id: "4",
      text: "Play Soccer with friend ",
      mode: "Santai",
    },
  ],
};

export const todosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    handleAddTask: (state, action: PayloadAction<dataType>) => {
      state.data = [...state.data, action.payload];
      console.log("Press submit");
    },
    handleUpdate: (state, action: PayloadAction<dataType>) => {
      if (!state.edit) {
        state.data = [...state.data, action.payload];
      } else {
        state.data.map((e) => {
          if (e.id === state.input.id) {
            e.text = state.input.text;
            e.mode = state.input.mode;
          } else {
            return state.data;
          }
        });
        state.input.text = "";
        state.input.mode = "";
        state.edit = false;
      }
    },
    handleDeleteTask: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    handleEditTask: (state, action: PayloadAction<dataType>) => {
      state.edit = true;
      state.input.id = action.payload.id;
      state.input.text = action.payload.text;
    },
    inputSearchHandle: (state, action: PayloadAction<string>) => {
      state.input.text = action.payload;
    },
    inputPriorityHandle: (state, action: PayloadAction<string>) => {
      state.input.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleDeleteTask,
  handleAddTask,
  inputSearchHandle,
  inputPriorityHandle,
  handleEditTask,
  handleUpdate,
} = todosSlice.actions;

export default todosSlice.reducer;
