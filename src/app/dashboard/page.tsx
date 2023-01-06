"use client";

import { type NextPage } from "next";
import MovesetPane from "./MovesetPane";
import { useState } from "react";
import NavPane from "./NavPane";
import dynamic from "next/dynamic";

const OverlayComponent = dynamic(() => import("./OverlayComponent"));

const Home: NextPage = () => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  return (
    <>
      <OverlayComponent OverlayController={[overlayIsOpen, setOverlayIsOpen]} />

      <div className="grid-cols-[105px_5fr] justify-evenly sm:grid lg:grid-cols-[140px_5fr]">
        <div className="hidden sm:block">
          <NavPane OverlayController={[overlayIsOpen, setOverlayIsOpen]} />
        </div>

        <div className="my-10 grid gap-6 sm:pr-10 lg:pr-14">
          {[...Array(5)].map((_x, i) => (
            <MovesetPane pos={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
