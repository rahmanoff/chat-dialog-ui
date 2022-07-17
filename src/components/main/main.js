import React, { useState } from 'react';

import './main.css';

export const INITIAL_MESSAGES = [
  { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', isCurrentUser: true },
  { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', isCurrentUser: false },
  { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', isCurrentUser: true },
];

export const Main = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  return (
    <div className="main">
      {messages.map(({ text, isCurrentUser }, i) => (
        <div key={i}>{text}</div>
      ))}
    </div>
  );
};
