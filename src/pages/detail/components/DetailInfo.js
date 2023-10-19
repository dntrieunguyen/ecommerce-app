import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
export default function DetailInfo() {
   return (
      <>
         <div className="flex gap-10 my-10 detail__info">
            <img src={require('../../../assets/img/product_1.png')} alt="" />
            <div className="detail__info__content">
               <h2 className="uppercase text-brand font-[500]">title</h2>
               <p className="my-10 text-lead text-secondary">10.999.999 VND</p>
               <p className=" text-content text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sit numquam nisi voluptas eligendi accusantium, eaque porro
                  reprehenderit animi dolores!
               </p>
               <div className="flex my-10 detail__info__category">
                  <h4 className="pe-3 font-[500] uppercase">category: </h4>
                  <p>type</p>
               </div>
               <div className="flex detail__info__action">
                  <div className="border detail__input w-[35rem] flex justify-between">
                     <span className="p-3 text-secondary">QUANTITY</span>
                     <div className="flex items-center gap-5 px-3">
                        <FontAwesomeIcon
                           className="cursor-pointer hover:text-warning"
                           icon={faBackward}
                        />
                        <span className="font-[500]">1</span>
                        <FontAwesomeIcon
                           className="cursor-pointer hover:text-warning"
                           icon={faForward}
                        />
                     </div>
                  </div>
                  <button>Add to cart</button>
               </div>
            </div>
         </div>
      </>
   );
}
