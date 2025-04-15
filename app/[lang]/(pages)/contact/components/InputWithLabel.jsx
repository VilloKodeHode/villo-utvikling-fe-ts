

export const InputWithLabel = ({ name, type, placeholder, setFormData, children, formData }) => {
  const InputComponent = type === `textarea` ? `textarea` : `input`;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`block font-bold mb-2 ${
          theme === "light" ? "text-light-black" : "text-dark-white"
        }`}
      >
        {children}
      </label>
      <InputComponent
        type={type === `textarea` ? undefined : type}
        id={name}
        className={` ${
          theme === "light"
            ? "text-light-black bg-light-white border-light-black focus:border-light-primary focus:outline-light-primary"
            : "text-dark-white bg-dark-black focus:border-dark-primary border-dark-white focus:outline-dark-primary"
        } w-full px-4 py-2 border rounded-lg  focus:outline `}
        placeholder={placeholder}
        value={formData[name] || ""}
        onChange={(e) =>
            setFormData({ ...formData, [name]: e.target.value })}
        required
        rows={type === `textarea` ? 4 : undefined}
      />
    </div>
  );
};
