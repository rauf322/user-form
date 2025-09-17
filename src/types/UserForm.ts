export type UserFormProps = {
  userForms: FormData[];
  setUserForms: React.Dispatch<React.SetStateAction<FormData[]>>;
};
export type FormData = {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Work' | 'Ideas' | 'Personal';
  description: string;
};
