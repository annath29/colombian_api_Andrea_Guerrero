import React from "react";

const RenderObject = ({ obj }) => {
  // Función recursiva para renderizar el objeto
  if (obj != null) {
    const keys = obj.length > 0 ? Object.keys(obj[0][0]) : [];

    const renderContent = (obj) => {
      return Object.entries(obj).map(([key, value]) => {
        // Si el valor es un objeto, volvemos a llamar a la función recursiva
        if (typeof value === "object" && value !== null) {
          return (
            <div key={key} className="obj_data_structure end">
              <strong>{"{"}</strong>
              {renderContent(value)}
              <strong >{"}"}</strong>
            </div>
          );
        } else {
          // Si es un valor primitivo, lo mostramos directamente
          return (
            <div key={key} className="obj_data_structure">
              <strong>{key}:</strong> {value}
            </div>
          );
        }
      });
    };

    return (
      <>
        <div className="title_data_structure">
          {keys.map((item, index) => {
            if (index != keys.length - 1) {
              return <h1> {item} - </h1>;
            } else {
              return <h1> {item} </h1>;
            }
          })}
        </div>
        <div>{renderContent(obj)}</div>{" "}
      </>
    );
  }
};

export default RenderObject;
