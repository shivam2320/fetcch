import React from 'react';

import SwapCard from './SwapCard';

const Swap = () => {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center px-2">
      <div className="mt-4 flex w-full max-w-5xl flex-col rounded-md bg-black p-2 sm:mt-24">
        <SwapCard />
      </div>
    </div>
  );
};

export default Swap;
