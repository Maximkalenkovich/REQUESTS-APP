import type { RootState } from "../../../app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectRequestsState = (state: RootState) => state.requests;

export const selectAllRequests = createSelector(
  [selectRequestsState],
  (requestsState) => requestsState.requests
);

export const selectRequestsLoading = createSelector(
  [selectRequestsState],
  (requestsState) => requestsState.loading
);

export const selectRequestById = (id: string) =>
  createSelector([selectAllRequests], (requests) =>
    requests.find((request) => request.id === id)
  );
