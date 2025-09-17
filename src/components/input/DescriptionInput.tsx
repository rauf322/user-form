import { TextInputProps } from '../../types/InputTypes';

const DescriptionInput = ({
  name,
  title,
  onChange,
  value,
  className,
}: TextInputProps) => {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-sm font-medium text-gray-700 mb-2'
      >
        {title}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        rows={4}
        className={
          className
            ? className
            : 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        }
        placeholder='Enter description'
      />
    </div>
  );
};

export default DescriptionInput;
