import { createStore, combineReducers } from "redux";
import collegeReducer from "./reducers/collegeReducer";
import careerReducer from "./reducers/careerReducer";
import { CareerType } from "../types/CareerType";

export interface RootState {
  careers: CareerType[];
  colleges: any;
}

const rootReducer = combineReducers({
  careers: careerReducer,
  colleges: collegeReducer,
});

export const store = createStore(rootReducer); 