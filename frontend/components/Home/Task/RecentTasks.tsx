import { ResponseTasks } from "@/app/interfaces/interface";
import { CircleCheck, Clock, MoveRight } from "lucide-react";

interface RecentsProps {
  tasks: ResponseTasks;
}

const RecentTasks = ({ tasks }: RecentsProps) => {
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
        {tasks?.data?.map((task) => (
          <div
            key={task.id}
            className="flex flex-row justify-between items-center gap-16"
          >
            <div className="flex items-center gap-7">
              <span
                className={` ${task.completed === true ? "text-green-700 bg-green-100" : " text-red-500 bg-amber-100"} `}
              >
                <CircleCheck />
              </span>
              <span>
                <div>{task?.title}</div>
                <div className="text-[12px] text-black04">
                  {task.employee?.firstName} {task.employee?.lastName}
                </div>
              </span>
            </div>
            <span
              className={`${task.completed === true ? "text-green-700 bg-green-100" : " text-amber-600 bg-amber-100"} text-[12px] font-semibold rounded-2xl bg-[rgba(188,168,54,0.4)] border border-[rgba(240,240,240,0.3)] shadow-xs py-[2] px-2`}
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
