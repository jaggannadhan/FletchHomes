import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from '../../styles/MapPage/InvestmentGraph.scss'; // Import the SCSS module

// Sample data, replace this with your actual data
const data = [
  { name: 'Mon', investments: 2200 },
  { name: 'Tue', investments: 2600 },
  { name: 'Wed', investments: 1900 },
  { name: 'Thu', investments: 2780 },
  { name: 'Fri', investments: 1890 },
  { name: 'Sat', investments: 2390 },
  { name: 'Sun', investments: 3490 },
];

const InvestmentGraph = () => {
  return (
    <div className="investmentGraph">
      <h2>Investments over the last week</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="investments" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentGraph;