import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "../../features/requests/model/slice";
import { saveState } from "../../shared/lib/localStorage";

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
