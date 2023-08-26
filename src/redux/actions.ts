import { CareerType } from "../types/CareerType";
import { TOGGLE_SAVE_COLLEGE, ToggleSaveCollegeActionType } from "../types/ReduxToggleSaveCollegeActionType";
import { TOGGLE_SAVE_CAREER, ToggleSaveCareerActionType } from "../types/ReduxToggleSaveCareerActionType";

export const toggleCollegeSave = (college: any): ToggleSaveCollegeActionType => {
  return {
    type: TOGGLE_SAVE_COLLEGE,
    payload: college,
  };
};

export const toggleCareerSave = (career: CareerType): ToggleSaveCareerActionType => {
  return {
    type: TOGGLE_SAVE_CAREER,
    payload: career,
  };
};
