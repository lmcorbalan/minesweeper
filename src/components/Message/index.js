import React from 'react';

const Message = (props) => {
  let message = '';
  let messageClass = '';
  if (props.data.isOver) {
    message = "LOSE";
    messageClass = "message--lose";
  }
  if (props.data.isWin) {
    message = "WIN";
    messageClass = "message--win";
  }

  return (
    <div className={`message ${messageClass}`}>{message}</div>
  );
};

export default Message;
