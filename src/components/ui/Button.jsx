// Simple reusable button component
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
};

export default Button;
