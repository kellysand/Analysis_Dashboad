
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { AppSidebar } from "./sideBar"
import { Outlet } from 'react-router-dom'


import { UserContext } from '../login/loginContextProvider'
import { useContext } from 'react'
function Dashboard() {
  const { userName } = useContext(UserContext);

  // Store userName in session storage whenever it changes
  if (userName) {
    sessionStorage.setItem("userName", userName);
  }

  return (
    <SidebarProvider className="dashboard">
      <AppSidebar></AppSidebar>
      <div className=" grid grid-cols-1 flex-1">
      <div className="sticky top-0 z-10 flex justify-between items-center bg-gray-200 px-6 py-4 shadow-sm w-full"
        style={{ minWidth: 0, flexWrap: "nowrap" }}>
        <div className="flex items-center gap-4 min-w-0" style={{ flexWrap: "nowrap" }}>
          <SidebarTrigger />
          <h1 className="m-0 text-2xl font-bold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
         Data dashboards
          </h1>
        </div>
        <div className="hidden sm:flex items-center gap-2 w-64 justify-center min-w-0" style={{ flexWrap: "nowrap" }}>
          <span className="text-gray-500 whitespace-nowrap">Account Holder:</span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {userName ? userName : sessionStorage.getItem("userName")}
          </span>
        </div>
      </div>
      <section className="p-6 md:p-8 lg:p-12 w-full max-w-full">
        <Outlet />
      </section>
  </div>
   
   </SidebarProvider>
  )
}

export default Dashboard
