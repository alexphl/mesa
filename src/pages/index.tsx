import { type NextPage } from "next";
//import { trpc } from "../utils/trpc";
import Head from "../components/Head";
import MovesetPane from "../components/MovesetPane";
import { useState } from "react";
import NavPane from "../components/NavPane";
import OverlayComponent from "../components/OverlayComponent";

const Home: NextPage = () => {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const testPanesCount = 5;
  //const components = ["Testing1", "2"];
  //const [selectedTab, setSelectedTab] = useState(0);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  return (
    <>
      <Head />
      <OverlayComponent OverlayController={[overlayIsOpen, setOverlayIsOpen]}/>

      <div className="grid grid-cols-[105px_5fr] lg:grid-cols-[140px_5fr] justify-evenly">
        <div className="hidden sm:block">
          <NavPane OverlayController={[overlayIsOpen, setOverlayIsOpen]}/>
        </div>

        <div className="my-10 pr-10 lg:pr-14 grid gap-6">
          {[...Array(testPanesCount)].map((x, i) => (
            <MovesetPane pos={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
