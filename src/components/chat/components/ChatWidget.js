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
         <div className="slide-in-fwd-br fixed top-32 rounded-xl shadow-2xl right-32 bg-light p-5 w-[400px] min-h-[400px]">
            <div className="chat__title flex justify-between border-b-2 items-center pb-5">
               <h4 className="font-bold">Customer Support</h4>
               <span className="text-sm bg-slate-200 p-3">Let's Chat App</span>
            </div>
            <div className="chat__display h-[300px] overflow-y-auto border-b-2">
               <div className="chat__display__admin flex justify-end my-5">
                  <p className="bg-primary p-3 text-light rounded-xl">Hello</p>
               </div>
               <div className="chat__display__user flex justify-start my-5 gap-3 items-center">
                  <img
                     src={imgIcon}
                     className="w-[40px] h-[40px] p-1 bg-slate-200 rounded-full"
                     alt=""
                  />
                  <p className="bg-secondary p-3  rounded-xl">Hello</p>
               </div>
            </div>
            <div className="chat__input grid grid-cols-9 my-5 gap-1">
               <img
                  src={imgIcon}
                  className="w-[40px] h-[40px] p-1 bg-slate-200 rounded-full col-start-1 "
                  alt=""
               />
               <input
                  className="col-start-2 col-span-5 p-3"
                  placeholder="Enter Message ..."
                  type="text"
                  name=""
                  id=""
               />
               <div className="chat__icon__actions col-start-7 col-span-3 flex items-center justify-evenly text-title">
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
