import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget';

export default function ChatComponent() {
   const [toggleMessengerPop, setToggleMessengerPop] = useState(false);

   const handleToggleMessengerPop = () => {
      //hanlde
      setToggleMessengerPop(!toggleMessengerPop);
   };
   return (
      <>
         <div className="transition-all fixed text-brand right-10 z-10 bottom-80 cursor-pointer hover:scale-150 hover:duration-300">
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
