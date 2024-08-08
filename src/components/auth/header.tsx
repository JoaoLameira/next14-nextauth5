import React from "react";

export const HeaderAuth = ({ label }: { label: string }) => {
  return (
    <header className="w-full min-w-[400px] flex flex-col gap-y-4 items-center">
      <h1 className="text-4xl font-bold">🔐 Authentication</h1>
      <p>{label}</p>
    </header>
  );
};
