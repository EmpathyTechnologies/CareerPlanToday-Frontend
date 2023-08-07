export type CalculatorLabelType = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
};
