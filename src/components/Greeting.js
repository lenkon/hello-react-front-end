import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsThunk } from '../redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsThunk());
  }, []);

  const greetings = useSelector((state) => state.greetings.greetings);
  const { greet } = greetings;

  return (
    <div>
      <h1>{greet}</h1>
    </div>
  );
};

export default Greeting;