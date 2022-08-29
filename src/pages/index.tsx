import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 font-bol
       text-xl">
        Hello world!
      </main>
    </>
  );
};

export default Home;
