//import dynamic from "next/dynamic";
import AuthShowcase from "./AuthShowcase";
import { trpc } from "../utils/trpc";

//const AuthShowcase = dynamic(() => import("./AuthShowcase"));
//const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

const SettingsPane = () => {
  return (
    <div className="bg-zinc-900 w-full h-full md:rounded-2xl">
      <AuthShowcase />
    </div>
  );
};

export default SettingsPane;
