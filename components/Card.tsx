import React from 'react';
import { creditCard } from './FormCard';
import { Inconsolata } from '@next/font/google';
import CardNumber from './CardNumber';

interface CardProps {
  card: creditCard;
}

const inconsolata = Inconsolata({ subsets: ['latin'] });

const Card = ({ card }: CardProps): JSX.Element => {
  return (
    <div className={inconsolata.className}>
      <div className=" shadow-lg text-white py-4 px-3 w-72 bg-red-400 h-40 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="pb-3 pt-2 flex justify-between">
          <div>VISA</div>
          <div>{`>>)`}</div>
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
      <br />
      <div className=" shadow-lg py-4 w-72 bg-red-400 h-40 rounded bg-gradient-to-r from-purple-600 to-blue-600">
        <div className=" my-2 h-8 bg-gray-400 "></div>
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
  );
};

export default Card;
