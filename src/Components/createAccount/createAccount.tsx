import React from 'react'
import { useState } from "react"
import { supabase } from "../../supabaseClinte"
import { AuthError } from "@supabase/supabase-js"

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
function CreateAccount() {
      const [email, setEmail] =useState('')
        const [password, setPassword] = useState('')
        const [message, setMessage] = useState<AuthError |string>('')
        const [name,setName]=useState('')

             async function createAccount(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
     const {data,error}= await supabase.auth.signUp({
        email,
        password,
        options:{
         data:{
            display_user:name
         }
        }
     })
     if(error){
        setMessage(error)
     }
     else if(data){
        setMessage('Check your email for the confirmation link!')
    }}
  return (
       <Card className='w-94 ' >
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your Name, Email and Password below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={createAccount}>
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
                  <Label htmlFor="password">Full Name</Label>
                </div>
                <Input id="name" type="text" required placeholder="e.g: John Khadi" onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
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
  )
}

export default CreateAccount
