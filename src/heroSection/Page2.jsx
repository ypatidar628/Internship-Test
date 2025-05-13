import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WebService from '../service/WebService';
import WebAPI from '../service/WebAPI';

const Page2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const id = "666d6b07b9c7611ba9986a47";
      try {
        const response = await axios.get(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        console.log("Fetched data:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data.Title}</h1>
      <p>Status: {data.Status}</p>
    </div>
  );
};

export default Page2;
