import React from 'react';

export default function DetailDesc() {
   return (
      <>
         <div className="my-10 detail__desc">
            <div className="uppercase detail__desc__title">
               <button>description</button>
               <h2 className="my-5 text-lead">product description</h2>
            </div>

            <div className="w-1/2 detail__desc__content text-secondary">
               <p>Đặc điểm nổi bật:</p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  commodi autem laudantium dignissimos quaerat dolorem porro
                  optio nulla alias obcaecati voluptas velit vel possimus,
                  tenetur pariatur nostrum sequi. Modi, sit.
               </p>
            </div>
         </div>
      </>
   );
}
