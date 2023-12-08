import React, { useState, useEffect } from 'react';
import { getVillages } from '../services/villageService'; // Import service for fetching villages

const VillageList = () => {
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    // Fetch villages from the backend on component mount
    const fetchVillages = async () => {
      try {
        const villagesData = await getVillages(); // Call service to fetch villages
        setVillages(villagesData);
      } catch (error) {
        console.error('Error fetching villages:', error);
      }
    };

    fetchVillages();
  }, []);

  return (
    <div>
      <h2>List of Villages</h2>
      <ul>
        {villages.map((village) => (
          <li key={village.id}>
            <h3>{village.name}</h3>
            <p>{village.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VillageList;
