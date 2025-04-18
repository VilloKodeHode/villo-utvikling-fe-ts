'use client';

import React from 'react';

export const InputWithLabel = ({
  name,
  type,
  placeholder,
  setFormData,
  formData,
  children,
}) => {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-bold mb-2 text-light-black dark:text-dark-white">
        {children}
      </label>
      <InputComponent
        id={name}
        type={type === 'textarea' ? undefined : type}
        placeholder={placeholder}
        value={formData[name] || ''}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            [name]: e.target.value,
          }))
        }
        required
        rows={type === 'textarea' ? 4 : undefined}
        className="w-full px-4 py-2 border rounded-lg bg-light-white text-light-black border-light-black focus:border-light-primary focus:outline-light-primary dark:bg-dark-black dark:text-dark-white dark:border-dark-white dark:focus:border-dark-primary dark:focus:outline-dark-primary"
      />
    </div>
  );
};
