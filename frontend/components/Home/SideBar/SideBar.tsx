import {
  BuildingComplex,
  CircleCheckBig,
  FireExtinguisher,
  UserRoundMinus,
} from "lucide-react";
import React from "react";

const SideBar = () => {
  const options = [
    {
      id: 1,
      label: "Accueil",
      url: "/",
      icon: <BuildingComplex width={20} height={20} />,
      status: true,
    },
    {
      id: 2,
      label: "Entreprise",
      url: "/",
      icon: <FireExtinguisher width={20} height={20} />,
      status: false,
    },
    {
      id: 3,
      label: "Departement",
      url: "/",
      icon: <FireExtinguisher width={20} height={20} />,
      status: false,
    },
    {
      id: 4,
      label: "Employés",
      url: "/",
      icon: <UserRoundMinus width={20} height={20} />,
      status: false,
    },
    {
      id: 5,
      label: "Taches",
      url: "/",
      icon: <CircleCheckBig width={20} height={20} />,
      status: false,
    },
  ];
  return (
    <div className="px-5 flex flex-col justify-between h-screen">
      <div className="">
        <div className="flex flex-row items-center h-[10vh] gap-4">
          <div className=" bg-primery04 p-2 rounded-xl">
            <BuildingComplex color="white" />
          </div>
          <div>
            <div className="text-black01 font-bold text-[14px]">
              EmployeeHub
            </div>
            <div className="text-black04 text-[13px]">Gestion du personnel</div>
          </div>
        </div>
        <hr className=" opacity-5 mb-8" />
        <h3 className=" uppercase font-bold text-[#0000003a] text-[13px] mb-3">
          Menu principal
        </h3>
        <div className="flex flex-col gap-3">
          {options.map((op) => (
            <div
              key={op.id}
              className={`flex flex-row items-center justify-between h-[50] ${op.status == true && "bg-[#00bd5211]"}`}
            >
              <div className="flex flex-row items-center gap-2">
                <span className="  text-white p-2 rounded-md bg-primery04">
                  {op.icon}
                </span>
                <span
                  className={`  text-sm ${op.status === true ? "font-semibold text-black01" : "text-black04"}`}
                >
                  {op.label}
                </span>
              </div>
              <span
                className={`w-[7] h-[7] rounded-full ${op.status === true && "bg-primery04"}`}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col pb-10">
        <hr className=" opacity-5 mb-8" />
        <div className=" bg-[#00bd5211] w-full py-3 px-5 flex flex-col gap-3 rounded-sm border border-[#00000007]">
          <div>
            <span className={`w-[7] h-[7] rounded-full bg-primery04`}></span>
            <span className="text-black01 font-bold">Système actif</span>
          </div>
          <div className="text-black04 text-[12px]">
            Toutes les données sont <br /> synchronisées et à jour.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
