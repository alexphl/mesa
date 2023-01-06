"use client";

import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
//import { trpc } from "../../utils/trpc";

const _AuthShowcase = dynamic(() => import("./AuthShowcase"));
//const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

const SettingsPane = () => {
  return (
    <SessionProvider>
      <div className="h-full w-full bg-zinc-900 md:rounded-2xl">
        <button />
      </div>
    </SessionProvider>
  );
};

export default SettingsPane;
