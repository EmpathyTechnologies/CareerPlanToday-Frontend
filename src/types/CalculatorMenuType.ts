export type CalculatorMenuType = {
  children: React.ReactNode;
  style: React.CSSProperties;
  "aria-labelledby": string;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  setCollegeName: React.Dispatch<React.SetStateAction<string>>;
  setCollegeCost: React.Dispatch<React.SetStateAction<number>>;
  freshmenYear?: boolean;
  setSophomoreCollege?: any;
  setJuniorCollege?: any;
  setSeniorCollege?: any;
  setSophomoreTuition?: any;
  setJuniorTuition?: any;
  setSeniorTuition?: any;
  colleges: any[];
};
