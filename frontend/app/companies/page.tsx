import {
  BuildingComplex,
  CalendarDays,
  Ellipsis,
  Plus,
  Search,
} from "lucide-react";
import { getCompaniesHttp } from "../api/company.api";

const CompaniesPage = async () => {
  const companies = await getCompaniesHttp();
  return (
    <div className="pt-36 pb-20 px-16">
      <div className="flex flex-row justify-between mb-8">
        <div className="flex flex-row items-center bg-white01 px-3 rounded-xl w-fit border border-green-200">
          <div className="pl-2 text-black04">
            <Search className="" width={14} height={14} />
          </div>
          <input
            type="text"
            placeholder="Rechercher une entreprise..."
            className=" border-0 outline-none ml-0 p-2 pr-8 placeholder:text-sm"
          />
        </div>
        <button className=" bg-primery04 flex flex-row gap-2 items-center justify-center rounded-xl px-3 text-sm font-semibold text-white01">
          <Plus width={20} height={20} /> Nouvelle entreprise
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {companies.data.map((comp) => (
          <div
            key={comp.id}
            className="bg-white01 px-5 py-5 rounded-xl flex flex-col gap-5"
          >
            <div className="flex flex-row justify-between">
              <div className=" bg-primery04 text-white01 p-3 rounded-xl">
                <BuildingComplex width={30} height={30} />
              </div>
              <Ellipsis width={20} height={20} opacity={0.5} />
            </div>
            <div className="flex flex-col justify-between ">
              <div className=" font-semibold">{comp.name}</div>
              <div className="flex flex-row gap-2 items-center">
                <CalendarDays
                  className=" text-primeryO1"
                  width={12}
                  height={12}
                />
                <span className="text-[12px] text-black04">
                  Créée le 15 janvier 2024
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
