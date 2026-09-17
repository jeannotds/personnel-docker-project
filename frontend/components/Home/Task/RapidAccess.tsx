import {
  BuildingComplex,
  CircleCheckBig,
  FireExtinguisher,
  MoveRight,
  UserRoundMinus,
} from "lucide-react";
import React from "react";

const RapidAccess = () => {
  const models = [
    {
      id: 1,
      name: "Entreprises",
      icone: <BuildingComplex />,
    },
    {
      id: 2,
      name: "Departements",
      icone: <FireExtinguisher />,
    },
    {
      id: 3,
      name: "Employés",
      icone: <UserRoundMinus />,
    },
    {
      id: 4,
      name: "Taches",
      icone: <CircleCheckBig />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 bg-white01 rounded-2xl shadow-2xs border-black04 p-7">
      <div className="flex flex-row justify-between items-center pb-5">
        <div>
          <h2 className=" font-bold text-xl text-black01">Tâches récentes</h2>
          <div className="text-sm text-black04">Activité de votre équipe</div>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {models.map((model) => (
          <div
            key={model.id}
            className="flex flex-row justify-between items-center gap-16"
          >
            <div className="flex items-center gap-7">
              <span className={` text-amber-600 bg-amber-100" `}>
                {model.icone}
              </span>
              <span>
                <div className="text-sm">{model.name}</div>
              </span>
            </div>
            <span className="text-[rgba(47,46,46,0.4)]">
              <MoveRight width={15} height={15} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RapidAccess;
