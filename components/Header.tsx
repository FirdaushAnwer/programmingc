
import React from 'react';

const CLogo = () => (
  <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center font-bold text-2xl text-primary select-none">
    C
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="bg-secondary border-b border-border-color p-4 flex items-center space-x-4 sticky top-0 z-10">
      <CLogo />
      <h1 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
        🧑‍💻Firdaush Programming Hub
      </h1>
    </header>
  );
};