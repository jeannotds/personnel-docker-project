import { ListChecks, MoveRight, Sparkles } from "lucide-react";
import React from "react";

const BennerHome = () => {
  return (
    <div className="px-16 pt-32">
      <div className="pt-12 pb-12 bg-linear-to-r from-primery02 to-primeryO1  w-full  rounded-2xl px-12 flex flex-col justify-center gap-6">
        <div className=" border border-[#dcdcdc2d] rounded-2xl w-[340] p-2 items-center ">
          <div className="flex flex-row justify-center gap-3">
            <Sparkles className="text-teal-300" size={20} />
            <h2 className="text-white03  text-sm font-semibold ">
              Bienvenue sur votre tableau de bord
            </h2>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="w-2xl text-4xl font-bold text-white01">
            Gérez vos équipes avec{" "}
            <span className="text-primery03">simplicité</span> et{" "}
            <span className="text-primery03">efficacité</span>
          </div>
          <p className="w-2xl text-white03">
            EmployeeHub centralise la gestion de vos entreprises, départements,
            employés et tâches dans une interface unique, élégante et
            collaborative. Suivez l'activité de votre organisation en temps
            réel.
          </p>
          <div className="flex flex-row gap-3">
            <button className="flex flex-row items-center justify-center bg-white01 px-3 py-2 rounded-xl gap-2 text-sm font-semibold text-[#272525]">
              Voir les employés <MoveRight />
            </button>
            <button className="flex flex-row items-center justify-center bg-primery03opac border border-[rgba(255,255,255,0.2)] px-3 py-2 rounded-xl gap-2 text-sm font-semibold text-white02">
              Gérer les tâches
              <ListChecks />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BennerHome;
