import { TOGGLE_CAREER_SAVE, ToggleCareerSaveAction, Career } from "../types/careerTypes";

const careerReducer = (state: Career[] = [], action: ToggleCareerSaveAction) => {
  switch (action.type) {
    case TOGGLE_CAREER_SAVE:
      const career = action.payload;
      const existingIndex = state.findIndex((c: Career) => c.id === career.id);
      if (existingIndex !== -1) {
        return state.filter((c: Career) => c.id !== career.id);
      } else {
        return [...state, career];
      }
    default:
      return state;
  }
};

export default careerReducer;
