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
      <label htmlFor={name} className="block font-bold mb-2 text-light-charcoal dark:text-dark-frost">
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
        className="w-full px-4 py-2 focus:outline-3 outline-offset-[-2.5px] border rounded-lg bg-light-mist text-light-charcoal border-light-charcoal focus:outline-light-violet dark:bg-dark-onyx dark:text-dark-frost dark:border-dark-frost dark:focus:outline-dark-lavender"
      />
    </div>
  );
};
