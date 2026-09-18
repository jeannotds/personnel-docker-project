import BennerHome from "./Banner/BennerHome";
import Statistics from "./Stat/Statistics";
import RecentTasks from "./Task/RecentTasks";
import RapidAccess from "./Task/RapidAccess";
import { getCompaniesHttp } from "@/app/api/company.api";
import { ResponseCompanies } from "@/app/interfaces/interface";
import { getDepartmentsHttp } from "@/app/api/department.api";

const Home = async () => {
  const responseComp = await getCompaniesHttp();
  const responseDepart = await getDepartmentsHttp();
  return (
    <div>
      <BennerHome />
      <Statistics companies={responseComp} departments={responseDepart} />
      <div className="px-16 grid grid-cols-[70%_30%] pb-12 w-full gap-8">
        <RecentTasks />
        <RapidAccess />
      </div>
    </div>
  );
};

export default Home;
