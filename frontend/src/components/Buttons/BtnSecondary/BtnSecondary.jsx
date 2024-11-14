import './BtnSecondary.css'
const BtnSecondary = ({ children, className = "", onClick }) => {
  return (
    <button className={`btn-secondary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnSecondary;
