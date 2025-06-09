import  { useState,useEffect,useContext,createContext } from 'react'

import { supabase } from '../../supabaseClinte';
import type { PostgrestError } from '@supabase/supabase-js';
type User = {
  name:string
  age:number
  gender:string
  last_login_at: any
  country:string
  company:string
  joined_at:Date
  posts:{}[]
  companies:{id:number
location:string
name:string
sector:string
stage:string
user_id:number}[]
};
type Post = {
  id: number;
  content: string;
  created_at: Date;
  likes:number;
  shares:number;
  engagement_score:number;
  is_trending:boolean;
  users:{name:string};
        
    

};
type UserDataContextType = {
  data: User[] | null;
  posts:Post[] |null;
  error: PostgrestError | null;
};
const UserDataContext = createContext<UserDataContextType>({ data: null, posts: null, error: null });
function UserDataProvider({ children }: { children: React.ReactNode }) {
    const[data ,setData]=useState<User[] | null>(null);
    const [postData,setPostData]=useState<Post[] |null>(null)
    const [error,setError]=useState<PostgrestError | null>(null)

 useEffect(()=>{
        const getData = async () => {
            try{
              const {data ,error}= await supabase.from('users').select(`*,posts(*),companies(*)`)
                const { data: postsData } = await supabase.from('posts').select('id, content,created_at, likes,shares,engagement_score,is_trending,users (name)');
                setPostData(postsData);
                
              setData(data)
              // console.log(postsData)
              if(error){
               setError(error)
              }
            }
            catch(issue){
              alert(issue)
           }
        }
       getData()

    },[])
       
  return(
    <UserDataContext.Provider value={{ data, error, posts: postData }}>
      {children}
    </UserDataContext.Provider>
  )
}
export default UserDataProvider
export const useUserData = () => useContext(UserDataContext);
