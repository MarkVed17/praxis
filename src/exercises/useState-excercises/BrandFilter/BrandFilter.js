import { useState } from "react";

// brands data structure
const brandsList = [
  { id: "0a", brandName: "puma" },
  { id: "0b", brandName: "adiddas" },
  { id: "0c", brandName: "wildcraft" },
  { id: "0d", brandName: "levis" },
  { id: "0e", brandName: "celio" }
];

export const BrandFilter = () => {
  const [brands, setBrands] = useState(brandsList);
  const filterBrand = (brand) => {
    const data = brandsList.filter(({ brandName }) =>
      brandName.toLowerCase().includes(brand.toLowerCase())
    );
    setBrands(data);
  };
  return (
    <>
      <input onChange={(e) => filterBrand(e.target.value)} />
      {brands.map((brand) => (
        <li>{brand.brandName}</li>
      ))}
    </>
  );
};
