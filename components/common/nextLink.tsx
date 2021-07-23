import Link from "next/link";

type ButtonTypes = {
  href: string;
  success?: boolean;
  danger?: boolean;
  className?: string;
};

const NextLink: React.FC<ButtonTypes> = ({
  children,
  href,
  success = true,
  danger,
  className = "",
}) => {
  return (
    <Link href={href}>
      <a
        className={`${success && "hover:text-green-600 text-green-500"} ${
          danger && "hover:text-gray-500 text-gray-400"
        } ${className} font-bold cursor-pointer`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
