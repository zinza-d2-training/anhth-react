
import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../hook'

import { increment, decrement, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const [number, setNumber] = useState(0)
  const dispatch = useAppDispatch()
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(number));
  };
   return (
    <>
      <Button variant="outlined" size="small" onClick={() => dispatch(decrement())}>-</Button>
      <span style={{fontSize: "24px", padding:"20px"}}>{count}</span>
      <Button variant="outlined" size="small" onClick={() => dispatch(increment())}>+</Button>
      <br/>
      <div style={{height: "24px", padding:"20px"}}>
        <TextField
            id="outlined-number"
            label="Number"
            type="number"
            onChange={(event) => setNumber(Number(event.target.value))}
            value={number}
          />
        <Button style={{margin:"20px"}} variant="outlined" size="small" onClick={handleIncrementByAmount}>Increment by {number}</Button>
      </div>
    </>
  );
}