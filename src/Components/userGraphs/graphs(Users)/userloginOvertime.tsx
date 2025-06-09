import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { format } from 'date-fns';
import { useUserData } from'../../hook/userDataProvider'
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

function UserloginOvertime() {
    const { data, error } = useUserData();
    if (error) {
      return <div>Error loading user data.</div>;
    }
    if (!data) {
      return <div>Loading...</div>;
    }
    const loginsPerDay: Record<string, number> = {}; // Create an object to store the number of logins per day
    data?.forEach(user => { 
      if(user.last_login_at!==null){ // Check if the user has a last login date
          const date = format(new Date(user.last_login_at), 'MMM dd') // Format the last login date as 'MMM dd' (e.g., 'Jan 01')
          loginsPerDay[date] = (loginsPerDay[date] || 0) + 1; // Increment the count for that date in the loginsPerDay object
         }         
  });

 const lineData =Object.entries(loginsPerDay).sort((a, b) => {
  const dayA = parseInt(a[0].split(' ')[1])
  const dayB = parseInt(b[0].split(' ')[1])
  return dayA - dayB
}).map(([date,count])=>(
  {date:date,
   users:count} 
 ))

    
  return (
    <div>
       <Card >
              <CardHeader>
                <CardTitle>Total users loged in </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
   <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
     <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='bump' dataKey="users" stroke="#2F3542" activeDot={{ r: 8 }} />
      </LineChart>
</ResponsiveContainer>
              </CardContent>
            </Card>

    </div>
  )
}

export default UserloginOvertime
