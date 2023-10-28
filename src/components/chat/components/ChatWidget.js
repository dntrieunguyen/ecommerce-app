import {
   faLink,
   faPaperPlane,
   faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ChatWidget() {
   const imgIcon =
      'https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png';

   return (
      <>
         <div className="chat__container slide-in-fwd-br">
            <div className="chat__title">
               <h4 className="">Customer Support</h4>
               <span className="">Let's Chat App</span>
            </div>
            <div className="chat__display">
               <div className="chat__display__admin ">
                  <p className="">Hello</p>
               </div>
               <div className="chat__display__user">
                  <img src={imgIcon} className="" alt="" />
                  <p className="">Hello</p>
               </div>
            </div>
            <div className="chat__input">
               <img src={imgIcon} className="" alt="" />
               <input
                  className=""
                  placeholder="Enter Message ..."
                  type="text"
                  name=""
                  id=""
               />
               <div className="chat__icon__actions ">
                  <FontAwesomeIcon
                     className="cursor-pointer hover:text-warning "
                     icon={faLink}
                  />
                  <FontAwesomeIcon
                     className="cursor-pointer hover:text-warning "
                     icon={faFaceSmile}
                  />
                  <FontAwesomeIcon
                     className="cursor-pointer hover:text-warning text-primary"
                     icon={faPaperPlane}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
