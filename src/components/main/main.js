import React, { useState } from 'react';
import { Message } from './message/message';

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
      <div className="main__messages">
        {messages.map(({ text, isCurrentUser }, i) => (
          <Message key={i} text={text} isCurrentUser={isCurrentUser} />
        ))}
      </div>
      <div className="main__plate">
        <textarea />
      </div>
      <div className="main__plate">
        <button>Send Message</button>
      </div>
    </div>
  );
};
