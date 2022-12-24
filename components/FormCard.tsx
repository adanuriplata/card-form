import { ChangeEvent, useState } from 'react';
import Card from './Card';

export interface creditCard {
  numCard: string;
  name: string;
  ccv: string;
  expiration: string;
}

const initialStateCard: creditCard = {
  numCard: '0000000000000000',
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
      <div className=" mt-10 ">
        <div>
          <label htmlFor="">
            Number card:
            <input onChange={(e) => hanfleChangeNumCard(e)} type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Name:
            <input onChange={(e) => handleChangeName(e)} type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Expiration
            <input onChange={(e) => handleChangeExpiration(e)} type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            CCV
            <input onChange={(e) => handleChangeCcv(e)} type="text" />
          </label>
        </div>
      </div>
    </div>
  );
};
