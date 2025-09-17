import { SubmitBtnProps } from '../../types/BtnTypes';

const SubmitBtn = ({ type, onClick, content, className }: SubmitBtnProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        className
          ? className
          : 'w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      }
    >
      {content}
    </button>
  );
};

export default SubmitBtn;
