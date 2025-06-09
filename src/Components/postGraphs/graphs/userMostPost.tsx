import React, { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useUserData } from '@/Components/hook/userDataProvider'
import { Button } from '@/Components/ui/button';

function UserMostPost() {
    const{data}=useUserData()
  interface UserNumPost {
    user: string;
    Number_Post: any;
}  

const [sortBy,setSortBy]=useState('Most')  
const [barData, setBarData] = useState<UserNumPost[]>()

const numPost = data ? data.map((data)=>({
user:data.name,Number_Post: data.posts.length})
).sort((a, b) => b.Number_Post - a.Number_Post):[]


   useEffect(()=>{
    if(sortBy==='Less'){
      setBarData([...numPost].sort((a, b) => a.Number_Post - b.Number_Post))
    }
    else {
      setBarData(numPost)
 
    }
   },[sortBy,data])
   if(!data)return<div>Loadinding......</div>
  return (
    
<div className="p-4 border  robunded-xl shadow-md" >
     <h2>User with Most/Less Posts</h2>
      <div className="flex gap-2 mb-4">
     <Button variant="outline" onClick={()=>{
      setSortBy('Most')
     }}>Sort by Most</Button>   
    <Button variant="outline" onClick={()=>{
      setSortBy('Less')
     }}>Sort by less</Button>
 </div>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart data={barData}>
       <XAxis dataKey='user' angle={-45}  textAnchor="end"  height={80}  tickLine={false}
              tickMargin={10}
              axisLine={false}
          />
       <YAxis  />
       <Tooltip />
       <Bar dataKey='Number_Post' fill='#2F3542' radius={8} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default UserMostPost
