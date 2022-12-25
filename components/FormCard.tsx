import { ChangeEvent, useState } from 'react';
import Card from './Card';

export interface creditCard {
  numCard: string;
  name: string;
  ccv: string;
  expiration: string;
}

const initialStateCard: creditCard = {
  numCard: '',
  name: 'fulanito de tal',
  ccv: '000',
  expiration: '00/00',
};

export const FormCard = (): JSX.Element => {
  const [card, setCard] = useState<creditCard>(initialStateCard);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setCard({ ...card, name: e.target.value });
  };

  const handleChangeCcv = (e: ChangeEvent<HTMLInputElement>): void => {
    setCard({ ...card, ccv: e.target.value });
  };

  const handleChangeExpiration = (e: ChangeEvent<HTMLInputElement>): void => {
    setCard({ ...card, expiration: e.target.value });
  };

  const hanfleChangeNumCard = (e: ChangeEvent<HTMLInputElement>): void => {
    setCard({ ...card, numCard: e.target.value });
  };

  return (
    <div>
      <Card card={card} />
      <div className="w-full max-w-xs mt-10 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              Number card:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => hanfleChangeNumCard(e)}
                type="text"
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleChangeName(e)}
                type="text"
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              Expiration
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleChangeExpiration(e)}
                type="text"
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              CCV
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleChangeCcv(e)}
                type="text"
              />
            </label>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};
