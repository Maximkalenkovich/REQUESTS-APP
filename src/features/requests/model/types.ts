import type { RequestItem } from "../../../entities/request/types";

export type Category = "Technical" | "Billing" | "General" | "Other";

export interface RequestsState {
  requests: RequestItem[];
  loading: boolean;
  error: string | null;
}
