export const StandardButton = ({ text }: { text: string }) => {
  return (
    <button className="dark:bg-light-snow bg-dark-midnight dark:text-dark-midnight text-light-snow font-bold py-2 px-4 rounded-sm">
      {text}
    </button>
  );
};
