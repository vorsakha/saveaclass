type ButtonTypes = {
  click?: () => void;
  success?: boolean;
  danger?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<ButtonTypes> = ({
  children,
  click,
  success = true,
  danger,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={click}
      className={`${
        success && "hover:bg-green-600 bg-green-500 focus:bg-green-600"
      } ${
        danger && "hover:bg-gray-400 bg-gray-500 focus:bg-gray-400"
      }  ${className} px-6 py-2 rounded font-medium inline-block shadow-lg   ring-black ring-opacity-5 transition ease-in-out disabled:opacity-40`}
    >
      {children}
    </button>
  );
};

export default Button;
