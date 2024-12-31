'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-01", value: 33000 },
  { date: "2023-02", value: 35000 },
  { date: "2023-03", value: 37000 },
  { date: "2023-04", value: 39000 },
  { date: "2023-05", value: 41000 },
  { date: "2023-06", value: 43000 },
  { date: "2023-07", value: 45000 },
  { date: "2023-08", value: 47000 },
  { date: "2023-09", value: 49000 },
  { date: "2023-10", value: 51000 },
  { date: "2023-11", value: 53000 },
  { date: "2023-12", value: 53400 },
]

export function PortfolioChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="date" 
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `€${value}`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

