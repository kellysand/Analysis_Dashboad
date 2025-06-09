import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

import { format } from 'date-fns';
import { useUserData } from '../../hook/userDataProvider';

    

function NewUserGrowth() {
    const { data } = useUserData();
   
    // Prepare data for the line chart using joined_at
    const userGrowthByDate: Record<string, number> = {};

    data?.forEach((user) => {
      const date = format(new Date(user.joined_at), 'yyyy-MM-dd');
      userGrowthByDate[date] = (userGrowthByDate[date] || 0) + 1;
    });
    const LineData =Object.entries(userGrowthByDate).sort().map(([date,usersNum])=>({date:date,New_User:usersNum}))

  return (
  
       <Card >
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
   <LineChart data={LineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
     <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='linear' dataKey="New_User" stroke="#2F3542" activeDot={{ r: 8 }} />
      </LineChart>
</ResponsiveContainer>
            </CardContent>
          </Card>
    
  )
}

export default NewUserGrowth
