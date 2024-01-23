import React from "react";
import { useField } from "formik";
import { TextInputProps } from "Types";


const TextInput: React.FC<TextInputProps> = React.memo(
  ({ label, onValueChange, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      helpers.setValue((e.target as HTMLInputElement).value);
      onValueChange((e.target as HTMLInputElement).value);
    };

    return (
      <div className="mb-12">
        <label
          htmlFor={props.id || props.name}
          className="block text-cyan-700 font-bold mb-1"
        >
          {label}
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          {...field}
          {...props}
          onChange={handleChange} // Handle input change
        />
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm font-bold">{meta.error}</div>
        ) : null}
      </div>
    );
  }
);

export default TextInput;
