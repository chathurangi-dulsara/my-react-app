import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useData = (Location) => {
  const [data, setData] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/${Location}`;

  const fetchData = async (getLocation=Location) => {
      try {
        const { data } = await axios.get(url); // Destructuring to get data directly from response {data, status, headers}
        if (data){
          console.log("Fetched data:", data);
          setData(data);
        } else {
          toast.error("No data found for the specified location.");
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data. Please try again later.");
      }
    };

  useEffect(() => {
   fetchData();

   return () => {
    fetchData();
   }
  }, [Location]);

  return [data, setData];
};

export default useData;
