import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

import { useUserData } from '@/Components/hook/userDataProvider';
function UserAgeBar() {
    const {data}=useUserData()
    const dataz = [
  { ageRange: '0-9', users: 0 },
  { ageRange: '10-19', users: 0 },
  { ageRange: '20-29', users: 0},
  { ageRange: '30-39', users: 0 },
  { ageRange: '40-49', users:0 },
  { ageRange: '50+', users: 0 },
];
dataz[0].users = data?.filter(user => user.age >= 0 && user.age <= 9).length || 0;
dataz[1].users = data?.filter(user => user.age >= 10 && user.age <= 19).length || 0;
dataz[2].users = data?.filter(user => user.age >= 20 && user.age <= 29).length || 0;
dataz[3].users = data?.filter(user => user.age >= 30 && user.age <= 39).length || 0;
dataz[4].users = data?.filter(user => user.age >= 40 && user.age <= 49).length || 0;
dataz[5].users = data?.filter(user => user.age >= 50).length || 0;
    console.log(dataz)
    
  return (
    <div>
        <Card className=" ">
              <CardHeader>
                <CardTitle>Age </CardTitle>
              </CardHeader>
              <CardContent>
          <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataz}>
            <XAxis 
            dataKey="ageRange" 
            label={{ 
              value: 'Age Range', 
              position: 'insideBottom', 
              offset: -5 
            }} 
            />
            <YAxis 
            label={{ 
              value: 'User Count', 
              angle: -90, 
              position: 'insideLeft', 
              offset:16 
            }} 
            />
            <Tooltip />
            <Bar dataKey="users" fill="#2F3542" />
           
          </BarChart>
        </ResponsiveContainer>

              </CardContent>
            </Card>
        
      
    </div>
  )
}

export default UserAgeBar
