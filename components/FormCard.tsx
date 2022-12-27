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
  const [viewBack, setViewBack] = useState(false);

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
    <div className="max-w-md flex flex-wrap justify-center">
      <Card card={card} viewBack={viewBack} />
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
                onFocus={() => setViewBack(true)}
                onBlur={() => setViewBack(false)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleChangeCcv(e)}
                type="text"
              />
            </label>
          </div>
        </form>
        <div className="footer text-center text-gray-900 text-xs">
          <h3>Built and Design 💪🏾</h3>
          <p>
            <a href="https://twitter.com/adanuriplata">👉 @AdanUriPlata </a>
            <a href="https://adanplata.com">👉 adanuriplata.com </a>
            <a href="https://github.com/adanuriplata/passwordGenerator">
              👉 RepoGithub{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
