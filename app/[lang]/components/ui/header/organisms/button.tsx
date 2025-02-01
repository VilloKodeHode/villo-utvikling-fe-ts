export const StandardButton = ({ text }: { text: string }) => {
  return (
    <button className="dark:bg-light-white bg-dark-black dark:text-dark-black text-light-white font-bold py-2 px-4 rounded-sm">
      {text}
    </button>
  );
};
