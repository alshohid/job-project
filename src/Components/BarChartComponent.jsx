import React from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="KP" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="X" stackId="a" fill="#8884d8" />
        <Bar dataKey="KP" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
