type InputProps = {
  title: string;
  name: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  className?: string;
};
export type TextInputProps = InputProps;
export type SelectInputProps = InputProps & {
  options: string[];
};
