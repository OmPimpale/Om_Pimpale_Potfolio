import type { IBtnProps } from "./ColoredBtn";

const PlaneBtn = ({
  text,
  link,
  icon,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  target = "_self",
}: IBtnProps) => {
  const baseStyles =
    "inline-flex gap-2 items-center justify-center px-8 py-3 border font-body border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 transition-colors duration-200 shadow-lg";

  const disabledStyles = disabled
    ? "cursor-not-allowed opacity-60 pointer-events-none"
    : "hover:bg-gray-100/60 dark:hover:bg-gray-700 hover:shadow-xl";

  const combinedClass = `${baseStyles} ${disabledStyles} ${className}`;

  if (link) {
    return (
      <a
        href={disabled ? undefined : link}
        onClick={(e) => {
          if (disabled) e.preventDefault();
          else if (onClick) onClick();
        }}
        className={combinedClass}
        target={target}
      >
        {text}
        {icon && icon}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClass}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default PlaneBtn;
