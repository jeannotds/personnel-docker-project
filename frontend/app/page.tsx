import Image from "next/image";
import Health from "./components/Health";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Health test</h1>
      <Health />
    </div>
  );
}
