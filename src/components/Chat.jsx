import React, { useContext } from 'react';
import Dots from '../assets/dots.svg';
import { ChatContext } from '../context/ChatContext';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Dots} alt="More" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
