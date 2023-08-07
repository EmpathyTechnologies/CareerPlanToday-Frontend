import { CareerType } from "../../types/CareerType";
import { TOGGLE_SAVE_CAREER, ToggleSaveCareerActionType } from "../../types/ReduxToggleSaveCareerActionType";

const careerReducer = (state: CareerType[] = [], action: ToggleSaveCareerActionType) => {
  switch (action.type) {
    case TOGGLE_SAVE_CAREER:
      const career = action.payload;
      const existingIndex = state.findIndex((c: CareerType) => c.id === career.id);
      if (existingIndex !== -1) {
        return state.filter((c: CareerType) => c.id !== career.id);
      } else {
        return [...state, career];
      }
    default:
      return state;
  }
};

export default careerReducer;
