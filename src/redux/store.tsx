import { createStore, combineReducers } from "redux";
import collegeReducer from "./reducers/collegeReducer";
import careerReducer from "./reducers/careerReducer";
import { CareerType } from "../types/CareerType";

export interface RootState {
  careers: CareerType[];
  colleges: number[];
}

const rootReducer = combineReducers({
  careers: careerReducer,
  colleges: collegeReducer,
});

export const store = createStore(rootReducer); // Export the store as named export
