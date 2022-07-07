import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2002-04-10T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 8,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1nqJnJg_qPabFlJqpO_C2cDJzuvnL5kU&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Singapore, SG',
  },
];

export default data;
