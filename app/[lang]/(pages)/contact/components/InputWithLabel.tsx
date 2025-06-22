'use client';

import React from 'react';

export const InputWithLabel = ({
  name,
  label,
  value,
  onChange,
  required = false,
  textarea = false,
  ...props
}) => {
  const InputComponent = textarea ? 'textarea' : 'input';

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-bold mb-2 text-light-charcoal dark:text-dark-frost">
        {label}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={textarea ? undefined : 'text'}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 4 : undefined}
        className="w-full px-4 py-2 focus:outline-3 outline-offset-[-2.5px] border rounded-lg bg-light-mist text-light-charcoal border-light-charcoal focus:outline-light-violet dark:bg-dark-onyx dark:text-dark-frost dark:border-dark-frost dark:focus:outline-dark-lavender"
        {...props}
      />
    </div>
  );
};
