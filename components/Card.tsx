import React from 'react';
import { creditCard } from './FormCard';
import { Inconsolata } from '@next/font/google';
import CardNumber from './CardNumber';

interface CardProps {
  card: creditCard;
  viewBack: boolean;
}

const inconsolata = Inconsolata({ subsets: ['latin'] });

const Card = ({ card, viewBack }: CardProps): JSX.Element => {
  return (
    <div className={`${inconsolata.className} h-40 w-72 [perspective:1000px] `}>
      <div
        className={`${
          viewBack ? ' [transform:rotateY(180deg)] ' : ''
        } relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] `}
      >
        <div className=" [backface-visibility:hidden] absolute inset-0 shadow-xl text-white py-4 px-3 bg-red-400 h-full w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="pb-3 pt-2 flex justify-between">
            <div>VISA</div>
            <div>{`>>>`}</div>
          </div>
          <div className="text-2xl">
            <CardNumber numCard={card.numCard} />
          </div>
          <div className="flex justify-between my-4 ">
            <div>
              <p className=" text-gray-300 text-xs"> Name</p>
              <p className="uppercase text-xs">{card.name}</p>
            </div>
            <div className="text-center">
              <p className=" text-gray-300 text-xs"> Expires</p>
              <p className="uppercase text-xs">{card.expiration}</p>
            </div>
          </div>
        </div>
        <div className=" [transform:rotateY(180deg)] [backface-visibility:hidden]  absolute inset-0 shadow-xl py-4 bg-red-400 h-full w-full rounded bg-gradient-to-r from-purple-600 to-blue-600">
          <div className=" my-1 h-8 bg-gray-400 "></div>
          <div>
            <div className="flex justify-end px-3">
              <div className=" bg-slate-100 text-gray-500 text-xs w-16 p-1 my-2 ">
                CCV {card.ccv}
              </div>
            </div>
            <div className="flex">
              <div className=" w-4 h-8 bg-sky-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
