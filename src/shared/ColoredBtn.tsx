export interface IBtnProps {
  text: string;
  link?: string;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ColoredBtn = ({ text, link="#", icon,className = "", type = "button" }: IBtnProps) => {
    return (
        <>
            <a
                href={link}
                className={`inline-flex gap-2 items-center justify-center px-8 py-3 border border-transparent text-base font-body font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl  ${className}`}
                type="button"
            >
                {text}
                {icon}
            </a>
        </>
    )
}

export default ColoredBtn;

// interface ColoredBtnProps {
//   text: string;
//   link?: string;
//   icon?: React.ReactNode;
//   className?: string;
//   type?: "button" | "submit" | "reset";
// }

// const ColoredBtn = ({ text, link = "#", icon, className = "", type = "button" }: ColoredBtnProps) => {
//   return (
//     <a
//       href={link}
//       className={`inline-flex gap-2 items-center justify-center px-8 py-3 border border-transparent text-base font-body font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl max-w-[188px] ${className}`}
//       role="button"
//     >
//       {text}
//       {icon}
//     </a>
//   );
// };

// export default ColoredBtn;
