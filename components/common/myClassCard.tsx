const MyClassCard: React.FC = ({ children }) => {
  return (
    <li className="bg-gray-600 w-full flex flex-col justify-start shadow-md hover:shadow-lg transition ease-in-out rounded py-5 px-6">
      {children}
    </li>
  );
};

export default MyClassCard;
