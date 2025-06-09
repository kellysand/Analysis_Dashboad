
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
          <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="w-full"><PieGraphes /></div>
            <div className="w-full"><UserAgeBar /></div>
            <div className="col-span-1 md:col-span-2 w-full"><UserloginOvertime /></div>
            <div className="w-full"><UserGender /></div>
          </section>
        </TabsContent>

        <TabsContent value="growth">
          <section className="w-full flex flex-col items-stretch">
            <NewUserGrowth />
          </section>
        </TabsContent>

        <TabsContent value="countries/Business">
          <section className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2">
            <div className="w-full"><UserCountryChart /></div>
            <div className="w-full"><UserCompaniesBar /></div>
            <div className="md:col-span-2 w-full"><CompanySector /></div>
          </section>
        </TabsContent>

      </Tabs>
      
    </UserDataProvider>
  );
}

export default UserDashBoards;
