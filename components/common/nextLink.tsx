import Link from "next/link";

type ButtonTypes = {
  href: string;
  success?: boolean;
  danger?: boolean;
  className?: string;
  click?: () => void;
};

const NextLink: React.FC<ButtonTypes> = ({
  children,
  href,
  success = true,
  danger,
  click,
  className = "",
}) => {
  return (
    <Link href={href}>
      <a
        className={`${success && "hover:text-green-600 text-green-500"} ${
          danger && "hover:text-gray-500 text-gray-400"
        } ${className} font-bold cursor-pointer`}
        onClick={click}
      >
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
