import { useState, useEffect } from 'react';
import { Message, MessageContainer } from '../styles/message';

function FlashMessage({ message }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [message]);

  return (
    <MessageContainer status={showMessage}>
      <Message>{message}</Message>
    </MessageContainer>
  );
}

export default FlashMessage;
