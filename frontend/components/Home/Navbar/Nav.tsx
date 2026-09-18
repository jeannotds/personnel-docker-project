import { Bell } from "lucide-react";

const Nav = () => {
  return (
    <div className="px-16 flex flex-row font-semibold justify-between p-7 h-[10vh] bg-white01 fixed right-0 left-[20%] z-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Tableau de bord</h1>
        <div className="text-[12px] font-light opacity-60">
          Vue d'ensemble de votre organisation
        </div>
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="bg-[#ebebeb] py-[6] px-3 rounded-md border border-[#dcdcdc]">
          <input
            className=" placeholder:text-sm placeholder:text-[#2c2c2c] placeholder:opacity-70 placeholder:font-light outline-none focus:outline-none"
            type="text"
            placeholder="Rechercher..."
          />
        </div>
        <div>
          <Bell className=" opacity-60" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center justify-center text-[13px] font-bold text-white bg-linear-to-r from-[#228b63] to-[#106142] w-9 h-9 rounded-xl">
            AD
          </div>
          <div>
            <div className="text-sm">Admin</div>
            <div className="text-[12px] font-normal opacity-60">
              Administrateur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
