"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import NavDesktop from "./Nav_Desktop";

const OverlayComponent = dynamic(() => import("./OverlayComponent"));

const UIProvider = () => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  return (
    <>
      <OverlayComponent controller={[overlayIsOpen, setOverlayIsOpen]} />
      <NavDesktop modalController={[overlayIsOpen, setOverlayIsOpen]}/>
    </>
  );
};

export default UIProvider;
