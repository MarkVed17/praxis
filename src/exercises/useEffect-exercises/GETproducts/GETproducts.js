import axios from "axios";
import { useEffect, useState } from "react";

export const GETproducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/products");
        // console.log(response);
        setProductsData(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Oops! error fetching data \n", error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1> Showcase Products </h1>
      {isLoading && <h2>Loading...</h2>}
      {productsData.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Rs. {product.price}</p>
        </div>
      ))}
    </>
  );
};
