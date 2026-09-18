"use client";
import {
  BuildingComplex,
  CircleCheckBig,
  FireExtinguisher,
  UserRoundMinus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();
  console.log("pathname : ", pathname);
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
      url: "/companies",
      icon: <FireExtinguisher width={20} height={20} />,
      status: false,
    },
    {
      id: 3,
      label: "Departement",
      url: "/departments",
      icon: <FireExtinguisher width={20} height={20} />,
      status: false,
    },
    {
      id: 4,
      label: "Employés",
      url: "/employees",
      icon: <UserRoundMinus width={20} height={20} />,
      status: false,
    },
    {
      id: 5,
      label: "Taches",
      url: "/tasks",
      icon: <CircleCheckBig width={20} height={20} />,
      status: false,
    },
  ];
  return (
    <div className="px-5 flex flex-col justify-between h-screen shadow-xs">
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
            <Link
              key={op.id}
              href={op.url}
              className={`flex flex-row items-center justify-between h-[50] ${op.url == pathname && "bg-[#00bd5211]"}`}
            >
              <div className="flex flex-row items-center gap-2">
                <span className="  text-white p-2 rounded-md bg-primery04">
                  {op.icon}
                </span>
                <span
                  className={`  text-sm ${op.url === pathname ? "font-semibold text-black01" : "text-black04"}`}
                >
                  {op.label}
                </span>
              </div>
              <span
                className={`w-[7] h-[7] rounded-full ${op.url === pathname && "bg-primery04"}`}
              ></span>
            </Link>
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
