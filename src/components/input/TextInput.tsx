import { TextInputProps } from '../../types/InputTypes';

const TextInput = ({
  title,
  name,
  value,
  onChange,
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
      <input
        id={name}
        type='text'
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className={
          className
            ? className
            : 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        }
        placeholder='Enter title'
      />
    </div>
  );
};

export default TextInput;
