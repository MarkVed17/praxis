import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";

export const AddressManagement = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewAddress = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/addresses", {
        address: { id: uuid(), city: newAddress }
      });
      // console.log(response, "new address");

      if (response.status === 201 && response.data.address.city !== "") {
        setAddresses((addresses) => [...addresses, response.data.address]);
        setNewAddress("");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Oops! Couldn't save the data \n", error);
      setIsLoading(false);
    }
  };

  const handleDeleteAddress = (address) => {
    const updatedAddresses = addresses.filter(
      (currentAddress) => currentAddress.id !== address.id
    );
    setAddresses(updatedAddresses);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/addresses");
      // console.log(data);
      setAddresses(response.data.addresses);
    })();
  }, []);

  return (
    <div>
      <h1> address book </h1>
      <input
        type="text"
        value={newAddress}
        placeholder="enter city"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <button onClick={handleNewAddress}> Save Address </button>
      {isLoading && <h2>Saving your changes...</h2>}
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            {address.city}
            <button onClick={() => handleDeleteAddress(address)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
