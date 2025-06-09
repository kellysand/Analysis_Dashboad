import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useUserData } from '../../hook/userDataProvider'
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";


function UserCountryChart() {
    const countryData: Record<string, number> ={}
 const {data,error}=useUserData()

 data?.forEach(data=>{const country =data.country
    countryData[country] =(countryData[country] ||0)+1
 })
const rechartData =Object.entries(countryData).map(([country,usersNum])=>({country:country,Users:usersNum}))

return (
  <Card>
             <CardHeader>
                <CardTitle>Country Distribution</CardTitle>
              </CardHeader>
              <CardContent>
               <ResponsiveContainer width="100%" height={300}>
              <BarChart data={rechartData}>
               <XAxis dataKey='country' angle={-45}  textAnchor="end"  height={80}  tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                  />
               <YAxis  />
               <Tooltip />
               <Bar dataKey='Users' fill='#2F3542' radius={8} />
              </BarChart>
            </ResponsiveContainer>
              </CardContent>
          </Card>
        
    
)
  
}

export default UserCountryChart
