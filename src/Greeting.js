import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from './greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.data);

  async function fetchMessage() {
    const response = await fetch(
      'http://localhost:3000/api/random_greeting.json',
    );
    const greetings = await response.json();
    const greet = greetings.greeting;
    dispatch(getMessage(greet));
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <div>
        <h1>{greet.data}</h1>
      </div>
    </>
  );
};

export default Greeting;
