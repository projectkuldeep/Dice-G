import React, { useState } from 'react';
import d1 from '../assets/D1.png';
import d2 from '../assets/D2.png';
import d3 from '../assets/D3.png';
import d4 from '../assets/D4.png';
import d5 from '../assets/D5.png';
import d6 from '../assets/D6.png';

const arr=[null ,d1,d2,d3,d4,d5,d6];

function Gpage() {
  const [value, setValue] = useState(0);
  const[tvalue,setTvalue] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const[dvalue,setDvalue] =useState(1);

  const handleClick = (buttonValue) => {

    setValue(buttonValue);
    setActiveButton(buttonValue);
  };
  const nowRoleDice=()=>{
  setDvalue(  Math.floor(Math.random() * 6) + 1)
  if(value==dvalue){
    setTvalue(tvalue+value)
  }
  else{
    setTvalue(tvalue-value)
  }
  }

  return (
    <>
      <div className='flex justify-between px-11 py-2'>
        <div>
          <div className='flex font-bold text-6xl justify-center'>{tvalue}</div>
          <div className='font-semibold uppercase'>Total Score</div>
        </div>
        <div>
          <div className='space-x-2'>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                className={`px-4 py-3 border-amber-950 border-2 font-semibold 
                  ${activeButton === num ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                onClick={() => handleClick(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className='flex justify-end pt-2 font-semibold'>Select Number</div>
        </div>
      </div>

      <div className='grid justify-center'>
        <div onClick={nowRoleDice}>
          <img src={arr[dvalue]} alt={`Dice ${value}`} />
        </div>
        <br />
        <div className='font-semibold'>Click On The Dice To Roll</div>
        <br />
        <div className='space-y-3 grid justify-center'>
          <button className='px-5 py-3 border-amber-950 border-2 font-semibold rounded hover:bg-black hover:text-white ' onClick={()=>{setTvalue(0);setDvalue(1)}}>
            Reset Score
          </button>
          <button className='px-5 py-3 border-amber-950 border-2 font-semibold rounded bg-black text-white'>
            Show Rules
          </button>
        </div>
      </div>
    </>
  );
}

export default Gpage;
