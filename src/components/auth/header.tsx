import React from "react";

interface HeaderAuthProps {
  title: string;
  label: string;
}

export const HeaderAuth = ({ title, label }: HeaderAuthProps) => {
  return (
    <header className="w-full min-w-[400px] flex flex-col gap-y-4 items-center">
      <h1 className="text-4xl font-bold">🔐 {title}</h1>
      <p className="text-gray-500 text-sm">{label}</p>
    </header>
  );
};
