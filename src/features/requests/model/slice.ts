import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RequestsState } from "./types";
import { loadState } from "../../../shared/lib/localStorage";
import type { RequestItem } from "../../../entities/request/types";

const initialState: RequestsState = {
  requests: loadState()?.requests?.requests || [],
  loading: false,
  error: null,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequest: (
      state,
      action: PayloadAction<Omit<RequestItem, "id" | "createdAt">>
    ) => {
      const newRequest: RequestItem = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.requests.unshift(newRequest);
    },
    updateRequest: (state, action: PayloadAction<RequestItem>) => {
      const index = state.requests.findIndex(
        (req) => req.id === action.payload.id
      );
      if (index !== -1) {
        state.requests[index] = action.payload;
      }
    },
    deleteRequest: (state, action: PayloadAction<string>) => {
      state.requests = state.requests.filter(
        (req) => req.id !== action.payload
      );
    },
  },
});

export const { addRequest, updateRequest, deleteRequest } =
  requestsSlice.actions;
export default requestsSlice.reducer;
