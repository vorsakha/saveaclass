import Link from "next/link";

type ButtonTypes = {
  href: string;
  success?: boolean;
  danger?: boolean;
};

const NextLink: React.FC<ButtonTypes> = ({
  children,
  href,
  success = true,
  danger,
}) => {
  return (
    <Link href={href}>
      <a
        className={`${
          success && "hover:text-green-600 text-green-500 focus:text-green-600"
        } ${
          danger && "hover:text-gray-500 text-gray-400 focus:text-gray-500"
        } font-bold`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
