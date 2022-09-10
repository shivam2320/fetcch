import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

import type { Chain } from "fetcch-chain-data";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface IParams {
  chain: Chain;
  setChain: Function;
  chainList: Chain[];
}

export default function ChainSelect(params: IParams) {
  const selectedChain = (chain: any) => {
    params.setChain(chain);
  };

  return (
    <Menu as="div" className="relative inline-block w-full text-left">
      <div>
        <Menu.Button className="inline-flex h-10 w-full items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-fetcch-dark shadow-sm hover:bg-gray-50 dark:border-2 focus:outline-none dark:bg-fetcch-dark/50">
          {params.chain ? (
            <div className="flex flex-row items-center">
              <img
                src={params.chain.icon}
                alt="chain"
                className="mr-3 w-5 shrink-0 rounded-md fill-current text-gray-400 group-hover:text-gray-500"
              />
              <span className="text-left text-fetcch-dark dark:text-white">
                {params.chain.name}
              </span>
            </div>
          ) : (
            <svg
              className="mr-2 h-4 w-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 dark:text-white"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
              <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
          )}
          <ChevronDownIcon
            className="h-5 w-5 dark:text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute inset-x-0 z-10 mt-2 w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-black/5 focus:outline-none">
          {params.chainList.map((chain: any) => (
            <div className="pt-1" key={chain.internalId}>
              <Menu.Item>
                {({ active }: { active: any }) => (
                  <div
                    className={classNames(
                      active
                        ? 'bg-gray-100 dark:bg-fetcch-purple/20 rounded-md dark:text-fetcch-mustard text-gray-900'
                        : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm cursor-pointer'
                    )}
                    onClick={() => selectedChain(chain)}>
                    <div className="flex h-full flex-row items-center">
                      <img
                        className="mr-2.5 w-5 rounded-md object-cover"
                        src={chain.icon}
                        alt="chain_icon"
                      />
                      <span className="leading-6">{chain.name}</span>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
