import React from "react";

export const HeaderAuth = ({ label }: { label: string }) => {
  return (
    <header className="w-full flex flex-col gap-y-4 items-center">
      <h1 className="text-5xl font-bold">🔐 Authentication</h1>
      <p>{label}</p>
    </header>
  );
};
