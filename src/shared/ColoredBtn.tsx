import React from "react";

export interface IBtnProps {
    text: string | any;
    link?: string;
    icon?: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    target?: "_blank" | "_self";
}

const ColoredBtn = ({
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
        "inline-flex gap-2 items-center justify-center px-8 py-3 border border-transparent text-base font-body font-medium rounded-lg text-white bg-blue-600 transition-colors duration-200 shadow-lg";

    const disabledStyles = disabled
        ? "cursor-not-allowed bg-blue-700 opacity-60 pointer-events-none"
        : "hover:bg-blue-700 hover:shadow-xl";

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

export default ColoredBtn;