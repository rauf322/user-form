import { ListContentProps } from '../../types/ListContent';

const ListContent = ({ title, value, options }: ListContentProps) => {
  return (
    <div className='flex items-center'>
      <span className='inline-block w-2 h-2 rounded-full mr-2 bg-blue-500'></span>
      <span className='text-sm font-medium text-gray-600'>{title}</span>
      <span
        className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
          value === options[0]
            ? 'bg-red-100 text-red-800'
            : value === options[1]
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default ListContent;
