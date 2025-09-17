type BtnProps = {
  content: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export type SubmitBtnProps = BtnProps;
export type DeleteBtnProps = BtnProps & {
  id: string;
};
