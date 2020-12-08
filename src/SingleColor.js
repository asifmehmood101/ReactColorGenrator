import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const handleClipboard = () => {};
  //join() convert the element of array in string
  const bcg = rgb.join(',');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor.toUpperCase()}</p>
      {alert && <p className='alert'>copied</p>}
    </article>
  );
};

export default SingleColor;
