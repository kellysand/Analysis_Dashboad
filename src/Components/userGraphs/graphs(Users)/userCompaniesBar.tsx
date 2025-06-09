import { useUserData } from '../../hook/userDataProvider'
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

function UserCompaniesBar() {
    const {data,error}=useUserData()
    if (error) {
      return <div>Error loading data</div>;
    }
    if (!data) {
      return <div>Loading...</div>;
    }

  

    const companyCounts: Record<string, number> = {};
    data.forEach((data) => {data.companies.forEach((company)=>{
      const companyStage =company.stage
companyCounts[companyStage] = (companyCounts[companyStage] || 0) + 1;
    })
      
    });
    const rechartData =Object.entries(companyCounts).map(([names,users])=>({names,users}))


    
  return (
    <Card>
               <CardHeader>
              <CardTitle>Companies Stages</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
      <BarChart data={rechartData}>
       <XAxis dataKey='names' angle={-45}  textAnchor="end"  height={80}  tickLine={false}
              tickMargin={10}
              axisLine={false}
          />
       <YAxis  />
       <Tooltip />
       <Bar dataKey='users' fill='#2F3542' radius={8} />
      </BarChart>
    </ResponsiveContainer>
            </CardContent>
            </Card>
    
  )
}

export default UserCompaniesBar
