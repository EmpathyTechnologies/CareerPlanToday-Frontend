import { TOGGLE_COLLEGE_SAVE, ToggleCollegeSaveAction } from "../types/collegeTypes";

const collegeReducer = (state: number[] = [], action: ToggleCollegeSaveAction) => {
  switch (action.type) {
    case TOGGLE_COLLEGE_SAVE:
      const collegeId = action.payload;
      if (state.includes(collegeId)) {
        return state.filter((element: number) => element !== collegeId);
      } else {
        return [...state, collegeId];
      }
    default:
      return state;
  }
};

export default collegeReducer;
