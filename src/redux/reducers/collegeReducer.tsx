import { TOGGLE_SAVE_COLLEGE, ToggleSaveCollegeActionType } from "../../types/ReduxToggleSaveCollegeActionType";

const collegeReducer = (state: number[] = [], action: ToggleSaveCollegeActionType) => {
  switch (action.type) {
    case TOGGLE_SAVE_COLLEGE:
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
