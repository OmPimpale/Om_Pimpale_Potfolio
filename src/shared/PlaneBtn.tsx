import type { IBtnProps } from "./ColoredBtn";

const PlaneBtn = ({ text, link = "#", icon, className = "", type = "button" }: IBtnProps) => {

    return (
        <>
            <a
                href={link}
                className={`inline-flex gap-2 items-center justify-center px-8 py-3 border font-body border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100/60 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl${className}"`}
                type="button"
            >
                {text}
                {icon ? icon : null}
            </a>
        </>
    )
}

export default PlaneBtn;