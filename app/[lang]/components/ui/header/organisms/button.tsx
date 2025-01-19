export const StandardButton = ({ text }: { text: string }) => {
  return (
    <button className="dark:bg-Villo-light-white bg-Villo-dark-black dark:text-Villo-dark-black text-Villo-light-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};
