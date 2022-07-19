import axios from "axios";
import { useState } from "react";

export const GETdata = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/users");
      // console.log(response);
      setUsersData(response.data.users);
      setIsLoading(false);
    } catch (error) {
      console.error("Oops! error fetching data. \n", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <h1> Loading...</h1> : <h1> Data </h1>}
      <button onClick={getUsers}> Click to load data from server </button>
      {usersData.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};
