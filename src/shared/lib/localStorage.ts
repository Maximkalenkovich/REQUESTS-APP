import type { RootState } from "../../app/store/store";

const STORAGE_KEY = "requests_app";

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (e) {
    console.error("Failed to save state to localStorage", e);
  }
};

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error("Failed to load state from localStorage", e);
    return undefined;
  }
};
