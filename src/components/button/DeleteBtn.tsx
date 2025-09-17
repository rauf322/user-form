import { DeleteBtnProps } from '../../types/BtnTypes';

const DeleteBtn = ({ onClick, id, content, className }: DeleteBtnProps) => {
  return (
    <button
      onClick={onClick}
      id={id}
      className={
        className
          ? className
          : 'px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
      }
    >
    {content}
    </button>
  );
};

export default DeleteBtn;
