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

  const onMessageReply = () => {
    setTimeout(
      () =>
        setMessages((prevState) => [
          ...prevState,
          { text: 'This is Dummy Text!', isCurrentUser: false },
        ]),
      1000,
    );
  };

  const onTextAreaChange = ({ target: { value } }) => {
    setCurrentMessage(value);
  };

  const onButtonClick = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, isCurrentUser: true }]);
      setCurrentMessage('');
      onMessageReply();
    }
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
        <button className="main__button" onClick={onButtonClick}>
          Send Message
        </button>
      </div>
    </div>
  );
};
