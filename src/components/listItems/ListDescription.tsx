import { ListDescriptionProps } from '../../types/ListContent';

const ListDescription = ({ content, title }: ListDescriptionProps) => {
  return (
    <div className='mt-4'>
      <span className='text-sm font-medium text-gray-600 block mb-2'>
        {title}
      </span>
      <p className='text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded-md'>
        {content}
      </p>
    </div>
  );
};

export default ListDescription;
