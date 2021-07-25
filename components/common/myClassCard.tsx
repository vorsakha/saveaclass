const MyClassCard: React.FC = ({ children }) => {
  return (
    <li className="bg-gray-600 flex flex-col items-center justify-between w-1/3 shadow-md hover:shadow-lg transition ease-in-out rounded py-5 px-6 mb-4">
      {children}
    </li>
  );
};

export default MyClassCard;
