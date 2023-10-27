import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import './ChatComponent.scss';

export default function ChatComponent() {
   const [toggleMessengerPop, setToggleMessengerPop] = useState(false);

   const handleToggleMessengerPop = () => {
      //hanlde
      setToggleMessengerPop(!toggleMessengerPop);
   };
   return (
      <>
         <div className="messenger__icon">
            <FontAwesomeIcon
               onClick={handleToggleMessengerPop}
               className="text-primary"
               icon={faFacebookMessenger}
            />
            {/* <div>sadasdsa</div> */}
         </div>
         {toggleMessengerPop && <ChatWidget></ChatWidget>}
      </>
   );
}
