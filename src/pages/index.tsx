import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import Head from "./Head";
import MovesetPane from "../components/MovesetPane";
import { useState } from "react";
import NavPane from "../components/NavPane";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const testPanesCount = 5;
  const components = ["Testing1", "2"];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Head />

      <div className="grid grid-cols-[32px_5fr]">
        <div>
          <NavPane />
        </div>

        <div className="grod-rows-2 my-10 grid w-full justify-center gap-6 px-24">
          {[...Array(testPanesCount)].map((x, i) => (
            <MovesetPane pos={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
