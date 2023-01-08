'use server';

import { SessionProvider } from "next-auth/react";

const SettingsPane = () => {
  return (
    <SessionProvider>
      <div className="h-full w-full bg-neutral-900 md:rounded-2xl">
        <button />
      </div>
    </SessionProvider>
  );
};

export default SettingsPane;
