import { useEffect } from "react";

// Componente Button que recibe los valores y la función onClick como propiedades
const Button = ({ children, onClick }) => {

  const getButtonType = (children) => {
    if (!isNaN(children) || children===".") return "number";
    if (["C", "del", "%", "=", "/", "*", "-", "+", "+/-",].includes(children)) return "operator";
    return "special"
}


  const getBackgroundColor = (children) => {
    switch (children) {
      case "number": 
        return "red";
      case "special":
        return "green";
      default:
        return "green"
    }
  }


  return (
    <button
      className="button p-4 text-white text-5xl rounded-[px] w-32"
      style={{
        backgroundColor: getBackgroundColor(getButtonType(children)),
      }}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
};

export default Button;
