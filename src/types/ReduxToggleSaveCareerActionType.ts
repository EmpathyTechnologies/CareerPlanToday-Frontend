import { CareerType } from "./CareerType";

export const TOGGLE_SAVE_CAREER = "TOGGLE_SAVE_CAREER";

export type ToggleSaveCareerActionType = {
  type: typeof TOGGLE_SAVE_CAREER;
  payload: CareerType;
};
