const MyClassCard: React.FC = ({ children }) => {
  return (
    <li className="uppercase font-bold w-full bg-gray-600 flex flex-col items-center justify-between shadow-md hover:shadow-lg transition ease-in-out rounded py-5 px-6 mb-4">
      {children}
    </li>
  );
};

export default MyClassCard;
