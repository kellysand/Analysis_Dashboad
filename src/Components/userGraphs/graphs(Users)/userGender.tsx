import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

import { useUserData } from "../../hook/userDataProvider";
import { User } from "lucide-react";

function UserGender() {
const genderCollaction: { [key: string]: number } = {};
const {data, error} = useUserData();
 data?.forEach((user) => {
    const gender = user.gender;
    genderCollaction[gender]= (genderCollaction[gender]||0)+1
});
const pieData =Object.entries(genderCollaction).map(([gender,users])=>({
    gender:gender,users:users
})) 
console.log(pieData)
  const COLORS = ["#2F3542", "#57606f"];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Female /Male</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="users"
              nameKey="gender"
              outerRadius={100}
              fill="#8884d8"
              isAnimationActive={true}
              animationBegin={500}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default UserGender;
