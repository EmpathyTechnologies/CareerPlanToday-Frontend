import { CareerType } from "../types/CareerType";
import { TOGGLE_SAVE_COLLEGE, ToggleSaveCollegeActionType } from "../types/ReduxToggleSaveCollegeActionType";
import { TOGGLE_SAVE_CAREER, ToggleSaveCareerActionType } from "../types/ReduxToggleSaveCareerActionType";

export const toggleCollegeSave = (id: number): ToggleSaveCollegeActionType => {
  return {
    type: TOGGLE_SAVE_COLLEGE,
    payload: id,
  };
};

export const toggleCareerSave = (career: CareerType): ToggleSaveCareerActionType => {
  return {
    type: TOGGLE_SAVE_CAREER,
    payload: career,
  };
};
