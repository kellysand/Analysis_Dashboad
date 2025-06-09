
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";
import PieGraphes from "./graphs(Users)/Pie";
import UserloginOvertime from './graphs(Users)/userloginOvertime';
import UserCountryChart from './graphs(Users)/userCountryChart';
import UserCompaniesBar from './graphs(Users)/userCompaniesBar';
import NewUserGrowth from './graphs(Users)/newUserGrowth';
import UserDataProvider from '../hook/userDataProvider';
// import UsersBarChart from "./graphs(Users)/Test";
import UserGender from "./graphs(Users)/userGender";
import UserAgeBar from "./graphs(Users)/userAgeBar";
import CompanySector from "./graphs(Users)/companySector";
function UserDashBoards() {
  return (
    <UserDataProvider>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
          <TabsTrigger value="countries/Business">Countries/Business</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6">
            <div> <PieGraphes /></div> 
             <div><UserAgeBar/></div> 
           <div className="col-start-1 col-span-2 "><UserloginOvertime /></div>
            <div><UserGender/></div>

          
          </section>
        </TabsContent>

        <TabsContent value="growth">
          <NewUserGrowth />
        </TabsContent>

        <TabsContent value="countries/Business">
          <section className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex-1"><UserCountryChart /></div>
            <div className="flex-1"> <UserCompaniesBar /></div>
            <div className="col-span-2 row-start-2"><CompanySector/></div>
            </section>
           
        </TabsContent>

      </Tabs>
      
    </UserDataProvider>
  );
}

export default UserDashBoards;
