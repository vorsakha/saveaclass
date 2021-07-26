const Card: React.FC = ({ children }) => {
  return (
    <li className="uppercase font-bold gap-4 w-full bg-gray-600 flex flex-col sm:flex-row items-center justify-between shadow-md hover:shadow-lg transition ease-in-out rounded py-5 px-6 mb-4">
      {children}
    </li>
  );
};

export default Card;
