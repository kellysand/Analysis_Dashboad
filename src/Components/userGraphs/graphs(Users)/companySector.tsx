import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

import { useUserData } from  '../../hook/userDataProvider'
function CompanySector() {
    const sectorCollaction: { [key: string]: number } = {};
    const {data, error} = useUserData();
     data?.forEach((user) => {user.companies.forEach((company)=>{
        const sector =company.sector
        sectorCollaction[sector]= (sectorCollaction[sector]||0)+1
     })
       
        
    });
    const pieData =Object.entries(sectorCollaction).map(([sector,companies])=>({
        sector:sector,companies:companies
    })) 
    console.log(pieData)
    const COLORS = [
  "#1e3a8a", // Fintech - deep blue
  "#4d7c0f", // AgriTech - earthy green
  "#0e7490", // HealthTech - clean teal
  "#7c3aed", // EdTech - vibrant purple
  "#0369a1", // Telecom - signal blue
  "#22c55e", // Clean Energy - fresh green
  "#6b7280", // Logistics - industrial gray
  "#475569", // Software - modern slate
  "#ea580c", // FoodTech - warm orange
  "#4338ca"  // Blockchain - secure indigo
];
console.log(pieData)
  return (
    <Card>
              <CardHeader>
                <CardTitle>Business Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
  <PieChart>
     <Pie  data={pieData}
      dataKey="companies"
      nameKey="sector"
      outerRadius={100}
      fill="#8884d8"
      isAnimationActive={true}
      label={({ name }) => name} 
      animationBegin={500}
      animationDuration={1500}
      animationEasing="ease-out">{pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}</Pie>
           <Tooltip />
        <Legend />
  </PieChart>
 </ResponsiveContainer>
              </CardContent>
            </Card>
 
  )
}

export default CompanySector
