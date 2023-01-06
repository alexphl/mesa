'use client'

import {
  Cog6ToothIcon,
  UserCircleIcon,
  ChartBarSquareIcon,
  PlusCircleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

import dynamic from "next/dynamic";
import { useState } from 'react';

const OverlayComponent = dynamic(() => import("./OverlayComponent"));


const NavPane = () => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  return (
    <>
    <OverlayComponent controller={[overlayIsOpen, setOverlayIsOpen]}/>

    <nav className="fixed hidden sm:grid h-screen grid-cols-1 grid-rows-[50px_5fr_50px] gap-8 p-6 text-neutral-300 transition-all lg:p-10">
      <div className="aspect-square cursor-pointer rounded-3xl bg-black/[0.3] p-3 shadow-lg transition-all hover:scale-105 hover:text-white">
        <UserCircleIcon />
      </div>

      <div className="flex flex-col place-content-evenly self-end rounded-3xl bg-black/[0.3] py-2 shadow-lg transition-all hover:scale-105">
        <div className="cursor-pointer rounded-3xl p-3 transition-all hover:scale-105 hover:text-white">
          <ClipboardDocumentListIcon />
        </div>

        <div className="cursor-pointer rounded-3xl p-3 transition-all hover:scale-105 hover:text-white">
          <PlusCircleIcon />
        </div>

        <div className="cursor-pointer rounded-3xl p-3 transition-all hover:scale-105 hover:text-white">
          <ChartBarSquareIcon />
        </div>
      </div>

      <div
        className="aspect-square w-14 cursor-pointer rounded-3xl bg-black/[0.3] p-3 text-neutral-300 shadow-lg transition-all hover:scale-105 hover:text-white"
        onClick={() => setOverlayIsOpen(true)}
      >
        <Cog6ToothIcon />
      </div>
    </nav>
    </>
  );
};

export default NavPane;
