import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FinanceRatesChart = () => {
  const [rateData, setRateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/finance/rates',
        params: { loc: '93505' }, // Set location as required
        headers: {
          'X-RapidAPI-Key': '862f6090ffmshb31aa1281374aaap118f5fjsn52c23f15dd50',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const fetchedData = response.data; // Assuming this returns an array of rate data

        // Process data here
        const processedData = fetchedData.map(item => ({
          // Adjust these fields according to the actual structure of your response
          name: item.date, // For example, date
          rate: item.rate // For example, rate
        }));

        setRateData(processedData);
      } catch (error) {
        console.error('Error fetching finance rates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={rateData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FinanceRatesChart;
