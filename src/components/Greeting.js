import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsThunk } from '../redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsThunk());
  }, []);

  const greet = useSelector((state) => state.greetings.greetings);
  const { greeting } = greet;

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
