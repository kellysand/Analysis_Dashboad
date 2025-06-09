import { useState } from "react"
import { supabase } from "../../supabaseClinte"
import { AuthError } from "@supabase/supabase-js"
import { useNavigate } from "react-router-dom"
import './login.css'
import { useContext } from "react";
import { UserContext } from "./loginContextProvider";
import CreateAccount from "../createAccount/createAccount"
import { motion, AnimatePresence } from "framer-motion";
//xxxxxxxxxxxxxxxxxxx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";

//XXXXXXXXXXXXXXXXXXXXXXX

export default function Login(){
   
const {setUserName}=useContext(UserContext)
const navigate =useNavigate()
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState<AuthError |string>('')
    async function loginAccount(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const {data,error} =await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
          setMessage(error.message)
        } else if(data.session){
       
         const metaData =data.user.user_metadata.display_user
         setUserName(metaData)
          navigate('dashboard/user')
     
          
        }
    }
     const [tab, setTab] = useState("login");
        return(
    <div className="flex flex-col gap-6 items-center justify-center h-screen bg-gray-200">
      <Tabs defaultValue="login" value={tab} onValueChange={setTab}>
        <TabsList>
            <TabsTrigger value="login">
                Login
            </TabsTrigger>
              <TabsTrigger value="Create_Account">
                Create Account
            </TabsTrigger>
        </TabsList>
         <AnimatePresence mode="wait">
             {tab === "login" && (
       <TabsContent value="login">
        <motion.div
                key="login"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
              >
      <Card className='w-94'>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginAccount}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required  onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              {message ? <p className="message">{typeof message ==="string" ? message: message.message}</p>: <></>}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
               
              </div>
            </div>
         
          </form>
        </CardContent>
      </Card>
      </motion.div>
      </TabsContent>
        )}
          {tab === "Create_Account" && (

     <TabsContent value="Create_Account"> <motion.div
                key="create"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
              ><CreateAccount/> </motion.div></TabsContent>  )}
     </AnimatePresence>
      </Tabs>
    </div>
            
        )
    }
