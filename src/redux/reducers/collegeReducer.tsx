import { TOGGLE_SAVE_COLLEGE, ToggleSaveCollegeActionType } from "../../types/ReduxToggleSaveCollegeActionType";

const collegeReducer = (state: any[] = [], action: ToggleSaveCollegeActionType) => {
  switch (action.type) {
    case TOGGLE_SAVE_COLLEGE:
      const college = action.payload;
      if (state.some((c) => c.id === college.id)) {
        return state.filter((c) => c.id !== college.id);
      } else {
        return [...state, college];
      }
    default:
      return state;
  }
};

export default collegeReducer;

// import { TOGGLE_SAVE_COLLEGE, ToggleSaveCollegeActionType } from "../../types/ReduxToggleSaveCollegeActionType";

// const collegeReducer = (state: number[] = [], action: ToggleSaveCollegeActionType) => {
//   switch (action.type) {
//     case TOGGLE_SAVE_COLLEGE:
//       const collegeId = action.payload;
//       if (state.includes(collegeId)) {
//         return state.filter((element: number) => element !== collegeId);
//       } else {
//         return [...state, collegeId];
//       }
//     default:
//       return state;
//   }
// };

// export default collegeReducer;
