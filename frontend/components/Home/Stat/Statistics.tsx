import { ResponseCompanies } from "@/app/interfaces/interface";
import { BuildingComplex } from "lucide-react";

interface StaticsProps {
  companies: ResponseCompanies;
}

const Statistics = ({ companies }: StaticsProps) => {
  console.log("companies : ", companies);
  return (
    <div className="px-16 py-9 grid grid-cols-4 gap-4">
      <div className="flex flex-col gap-3 px-4 py-4 bg-white rounded-2xl border shadow-2xs border-[rgba(71,63,63,0.1)]">
        <div className="flex flex-row justify-between relative">
          <span className="text-primery04 text-sm font-medium">Entreprise</span>
          <div className="bg-primery04 p-3 rounded-2xl absolute right-0">
            <BuildingComplex color="white" />
          </div>
        </div>
        <span className="text-3xl font-bold">{companies?.data?.length}</span>
        {/* <span className="text-sm text-primery04 font-medium">
          3 Organisation
        </span> */}
      </div>
      <div className="flex flex-col gap-3 px-4 py-4 bg-white rounded-2xl border shadow-2xs border-[rgba(71,63,63,0.1)]">
        <div className="flex flex-row justify-between relative">
          <span className="text-black04 text-sm font-medium">Entreprise</span>
          <div className=" bg-blue-500 p-3 rounded-2xl absolute right-0">
            <BuildingComplex color="white" />
          </div>
        </div>
        <span className="text-3xl font-bold">{3}</span>
        <span className="text-sm text-blue-500 font-medium">
          3 Organisation
        </span>
      </div>
      <div className="flex flex-col gap-3 px-4 py-4 bg-white rounded-2xl border shadow-2xs border-[rgba(71,63,63,0.1)]">
        <div className="flex flex-row justify-between relative">
          <span className="text-black04 text-sm font-medium">Entreprise</span>
          <div className=" bg-yellow-600 p-3 rounded-2xl absolute right-0">
            <BuildingComplex color="white" />
          </div>
        </div>
        <span className="text-3xl font-bold">{3}</span>
        <span className="text-sm text-yellow-600 font-medium">
          3 Organisation
        </span>
      </div>
      <div className="flex flex-col gap-3 px-4 py-4 bg-white rounded-2xl border shadow-2xs border-[rgba(71,63,63,0.1)]">
        <div className="flex flex-row justify-between relative">
          <span className="text-black04 text-sm font-medium">Entreprise</span>
          <div className=" bg-amber-700 p-3 rounded-2xl absolute right-0">
            <BuildingComplex color="white" />
          </div>
        </div>
        <span className="text-3xl font-bold">{3}</span>
        <span className="text-sm text-amber-700 font-medium">
          3 Organisation
        </span>
      </div>
    </div>
  );
};

export default Statistics;
