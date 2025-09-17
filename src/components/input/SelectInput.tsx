import { SelectInputProps } from '../../types/InputTypes';

const SelectInput = ({
  title,
  options,
  name,
  value,
  onChange,
  className,
}: SelectInputProps) => {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-sm font-medium text-gray-700 mb-2'
      >
        {title}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className={
          className
            ? className
            : 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        }
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
