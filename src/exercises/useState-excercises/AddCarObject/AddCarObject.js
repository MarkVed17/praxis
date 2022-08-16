import { useState } from "react";

let id = 4;

const data = [
  {
    id: "1",
    brand: "Toyota",
    make: "Corolla",
    model: "2007"
  },
  {
    id: "2",
    brand: "Maruti Suzuki",
    make: "Omni",
    model: "2003"
  },
  {
    id: "3",
    brand: "Hyundai",
    make: "Santro",
    model: "2005"
  }
];

export const AddCarObject = () => {
  const [cars, setCars] = useState(data);
  const [carSpecs, setCarSpecs] = useState({ brand: "", make: "", model: "" });
  const { brand, make, model } = carSpecs;

  const addCarHandler = () => {
    setCars([...cars, { id: ++id, brand: brand, make: make, model: model }]);
  };

  return (
    <>
      <div>
        <input
          value={carSpecs.brand}
          onChange={(e) => setCarSpecs({ ...carSpecs, brand: e.target.value })}
          placeholder="Brand"
        />
        <input
          value={carSpecs.make}
          onChange={(e) => setCarSpecs({ ...carSpecs, make: e.target.value })}
          placeholder="Make"
        />
        <input
          value={carSpecs.model}
          onChange={(e) => setCarSpecs({ ...carSpecs, model: e.target.value })}
          placeholder="Model"
        />
      </div>
      <button
        onClick={() => {
          addCarHandler();
          setCarSpecs({ brand: "", make: "", model: "" });
        }}
      >
        Add
      </button>

      {cars.map(({ id, brand, make, model }) => (
        <div key={id} style={{ border: "1px solid black" }}>
          <h2>{brand}</h2>
          <h3>{make}</h3>
          <h4>{model}</h4>
        </div>
      ))}
    </>
  );
};
