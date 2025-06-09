import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { supabase } from "@/supabaseClinte"
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"

export function AppSidebar() {
     const navigate =useNavigate()
const [loading, setLoading]=useState(true)
    const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }
useEffect(()=>{
  async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session){
        navigate('/')
      }
      else{
        setLoading(false)
      }
    }
    checkSession()
})
if (loading){return <div>Checking authentication...</div>}
  return (
    <div>
    <Sidebar className=" ">
      <SidebarContent className="bg-gray-400">
        <SidebarGroup>
        <div className="flex flex-col items-center w-full mb-4">
            <SidebarGroupLabel>
                <span className="text-lg font-semibold tracking-wide text-gray-700">Dashboard Menu</span>
            </SidebarGroupLabel>
        </div>

        <SidebarGroupContent>
            <SidebarMenu>
                <div className="flex flex-col items-center gap-4 w-full">
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Button onClick={handleSignOut} className="w-24 font-medium text-base">
                                Log Out
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link
                                to="/dashboard/user"
                                style={{ color: 'inherit', textDecoration: "none" }}
                                className="w-full"
                            >
                                <h3 className="text-center w-full text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
                                    Users
                                </h3>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link
                                to="/dashboard/post"
                                style={{ color: 'inherit', textDecoration: "none" }}
                                className="w-full"
                            >
                                <h3 className="text-center w-full text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
                                    Posts
                                </h3>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </div>
            </SidebarMenu>
        </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar></div>
  )
}