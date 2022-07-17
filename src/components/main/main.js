import React, { useState } from 'react';
import { Message } from './message/message';

import './main.css';

export const INITIAL_MESSAGES = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 1',
    isCurrentUser: true,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 2',
    isCurrentUser: false,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Message 3',
    isCurrentUser: true,
  },
];

export const Main = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [currentMessage, setCurrentMessage] = useState('');

  const onTextAreaChange = ({ target: { value } }) => {
    setCurrentMessage(value);
  };

  return (
    <div className="main">
      <div className="main__messages">
        {messages.map(({ text, isCurrentUser }, i) => (
          <Message key={i} text={text} isCurrentUser={isCurrentUser} />
        ))}
      </div>
      <div className="main__plate">
        <textarea className="main__textarea" onChange={onTextAreaChange} value={currentMessage} />
      </div>
      <div className="main__plate">
        <button>Send Message</button>
      </div>
    </div>
  );
};
