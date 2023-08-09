export type TSwitcherProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};
