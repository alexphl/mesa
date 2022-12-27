import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import Head from "./Head";
import MovesetPane from "./components/MovesetPane";
import AuthShowcase from "./AuthShowcase";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head />

      <div className="flex flex-col items-center gap-2">
        <MovesetPane />
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
        <AuthShowcase />
      </div>
      
    </>
  );
};

export default Home;
