
type ButtonProps = {
  onClick?: () => void;
  label: string;
  className?: string;
};
const Button = ({ onClick, label, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-sm hover:scale-[1.02] hover:bg-gray-900/90 transition-transform bg-gray-900 text-white px-5 py-2`}>
      {label}
    </button>
  );
};

export default Button;
