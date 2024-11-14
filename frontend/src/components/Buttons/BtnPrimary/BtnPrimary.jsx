import "./BtnPrimary.css";

const BtnPrimary = ({ children, className = "", onClick }) => {
  return <button className={`btn-primary ${className}`} onClick={onClick}>{children}</button>;
};

export default BtnPrimary;
