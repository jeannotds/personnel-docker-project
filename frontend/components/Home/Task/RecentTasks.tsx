import { Clock, MoveRight } from "lucide-react";
import React from "react";

const RecentTasks = () => {
  const tasks = [
    {
      id: 1,
      icone: <Clock />,
      task: "Migration serveurs cloud",
      user: "Bruno Dubois",
      status: "en cours",
    },
    {
      id: 2,
      icone: <Clock />,
      task: "Formation nouveaux arrivants",
      user: "Julien Fournier",
      status: "en cours",
    },
    {
      id: 3,
      icone: <Clock />,
      task: "Base de connaissances FAQ",
      user: "Iris Roux",
      status: "Terminée",
    },
    {
      id: 4,
      icone: <Clock />,
      task: "Prototype IA conversationnelle",
      user: "Hugo Lefebvre",
      status: "en cours",
    },
    {
      id: 5,
      icone: <Clock />,
      task: "Audit accessibilité WCAG",
      user: "Grace Michel",
      status: "en cours",
    },
  ];
  return (
    <div className="flex flex-col gap-4 bg-white01 rounded-2xl shadow-2xs border-black04 p-7">
      <div className="flex flex-row justify-between items-center pb-5">
        <div>
          <h2 className=" font-bold text-xl text-black01">Tâches récentes</h2>
          <div className="text-sm text-black04">Activité de votre équipe</div>
        </div>
        <span className="flex flex-row items-center gap-2 text-sm text-primery04">
          <span>Tout voir</span>
          <MoveRight width={15} height={15} />
        </span>
      </div>
      <div className="flex flex-col gap-9">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-row justify-between items-center gap-16"
          >
            <div className="flex items-center gap-7">
              <span
                className={` ${task.status === "Terminée" ? "text-green-700 bg-green-100" : " text-amber-600 bg-amber-100"} `}
              >
                {task.icone}
              </span>
              <span>
                <div>{task.task}</div>
                <div className="text-[10px] text-black04">{task.user}</div>
              </span>
            </div>
            <span
              className={`${task.status === "Terminée" ? "text-green-700 bg-green-100" : " text-amber-600 bg-amber-100"} text-[12px] font-semibold rounded-2xl bg-[rgba(188,168,54,0.4)] border border-[rgba(240,240,240,0.3)] shadow-xs py-[2] px-2`}
            >
              En cours
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;
