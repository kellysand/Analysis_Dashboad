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



function PieGraphes() {
    const {data,error}=useUserData();
    const active = data ? data.filter(user => user.last_login_at !== null).length : 0;
    const nonActive = data ? data.length - active : 0;
const PieData=[{names:'Active Users',value:active },
  {names:'Non-Active Users', value:nonActive}
]
const COLORS = ['#2F3542', '#57606f'];
  return ( 
    <Card>
              <CardHeader>
                <CardTitle>Active Users /Non-Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
  <PieChart>
     <Pie  data={PieData}
      dataKey="value"
      nameKey="names"
      outerRadius={100}
      fill="#8884d8"
      isAnimationActive={true}
    
      animationBegin={500}
      animationDuration={1500}
      animationEasing="ease-out">{PieData.map((entry, index) => (
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

export default PieGraphes
