export interface Career {
  id: number;
  title: string;
  salary: {
    national: {
      average: number;
    };
  };
}

export const TOGGLE_CAREER_SAVE = "TOGGLE_CAREER_SAVE";

export interface ToggleCareerSaveAction {
  type: typeof TOGGLE_CAREER_SAVE;
  payload: Career;
}
