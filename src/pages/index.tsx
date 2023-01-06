import { type NextPage } from "next";
import MovesetPane from "../components/MovesetPane";
import { useState } from "react";
import NavPane from "../components/NavPane";
import dynamic from "next/dynamic";

const OverlayComponent = dynamic(() => import("../components/OverlayComponent"));

const Home: NextPage = () => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  return (
    <>
      <OverlayComponent OverlayController={[overlayIsOpen, setOverlayIsOpen]}/>

      <div className="sm:grid grid-cols-[105px_5fr] lg:grid-cols-[140px_5fr] justify-evenly">
        <div className="hidden sm:block">
          <NavPane OverlayController={[overlayIsOpen, setOverlayIsOpen]}/>
        </div>

        <div className="my-10 sm:pr-10 lg:pr-14 grid gap-6">
          {[...Array(5)].map((_x, i) => (
            <MovesetPane pos={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
