import { useEffect, useState } from 'react';
import { generateIdComponents } from '../utils/generateIdComponents';

interface CardNumberProps {
  numCard: string;
}

const CardNumber = ({ numCard }: CardNumberProps): JSX.Element => {
  const [visibleCardNumber, setVisibleCardNumber] = useState<string[]>(
    numCard.split('')
  );

  const addSpaceCardNumber = (i: number): string => {
    if (i === 3 || i === 7 || i === 11) {
      return 'mr-2';
    }
    return '';
  };

  useEffect(() => {
    setVisibleCardNumber(numCard.split(''));
    for (let i = 0; i <= 15 - numCard.split('').length; i++) {
      setVisibleCardNumber((before) => [...before, '*']);
    }
  }, [numCard]);

  return (
    <div>
      {visibleCardNumber.map((num, index) => (
        <span
          key={generateIdComponents()}
          className={addSpaceCardNumber(index)}
        >
          {num}
        </span>
      ))}
    </div>
  );
};

export default CardNumber;
