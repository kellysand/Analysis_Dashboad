
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
    <SidebarProvider className="dashboard flex flex-col md:flex-row min-h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 flex flex-col md:flex-row justify-between items-center bg-gray-200 px-4 md:px-6 py-3 md:py-4 shadow-sm gap-2 md:gap-0">
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
            <SidebarTrigger />
            <h1 className="m-0 text-xl md:text-2xl font-bold text-gray-900">
              Data dashboards
            </h1>
          </div>
          <div className="flex items-center gap-1 md:gap-2 w-full md:w-64 justify-center md:justify-end mt-2 md:mt-0">
            <span className="text-gray-500 text-sm md:text-base">Account Holder:</span>
            <span className="truncate max-w-[120px] md:max-w-[180px] text-sm md:text-base">
              {userName ? userName : sessionStorage.getItem("userName")}
            </span>
          </div>
        </div>
        <section className="flex-1 p-2 md:p-4">
          <Outlet />
        </section>
      </div>
    </SidebarProvider>
  );
}

export default Dashboard
