export const ColorChanger = ({ color }) => {
  const cuadradoStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: color,
  };
  return (
    <div className="contenedor">
      <div className="color-changer" style={cuadradoStyle}></div>
    </div>
  );
};
