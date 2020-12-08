import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState();
  const [IsError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <article className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${IsError ? 'error' : null}`}
          />
          <button className='btn'>Generator</button>
        </form>
      </article>
      <section>
        {list.map((item, index) => {
          console.log(item);
          const hex = item.hex;
          return (
            <SingleColor key={index} {...item} index={index} hexColor={hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
