import React from "react";

const Tarjeta = () => {
  return (
    <div className="bg-background-primary rounded-md shadow-md p-6 border border-border">
      <h2 className="text-xl font-semibold text-primary mb-2">
        Título de la Tarjeta
      </h2>
      <p className="text-text-primary text-sm mb-4">
        Este es el contenido de la tarjeta. Aquí puedes agregar información
        relevante o cualquier otro texto que necesites mostrar.
      </p>
      <button className="bg-primary text-figma-white py-2 px-4 rounded-md hover:bg-[oklch(0.55_0.15_260)] transition-colors">
        Acción
      </button>
    </div>
  );
};

export default Tarjeta;
