import { Career, TOGGLE_CAREER_SAVE, ToggleCareerSaveAction } from "./types/careerTypes";
import { TOGGLE_COLLEGE_SAVE, ToggleCollegeSaveAction } from "./types/collegeTypes";

export const toggleCollegeSave = (id: number): ToggleCollegeSaveAction => {
  return {
    type: TOGGLE_COLLEGE_SAVE,
    payload: id,
  };
};

export const toggleCareerSave = (career: Career): ToggleCareerSaveAction => {
  return {
    type: TOGGLE_CAREER_SAVE,
    payload: career,
  };
};
