import React from 'react';

export default function HomeService() {
   const serviceContent = [
      { title: 'Free shipping', content: 'free shipping wordwide' },
      { title: '24 X 7 Service', content: 'free shipping wordwide' },
      { title: 'Festival offer', content: 'free shipping wordwide' },
   ];
   return (
      <>
         <div className="uppercase bg-opacity-10 service bg-secondary">
            <div className="grid grid-cols-3 gap-5 p-40 service__container">
               {serviceContent.map((item, index) => (
                  <div key={(item, index)} className="service__item">
                     <h2 className="text-title font-[500]">{item.title}</h2>
                     <h4 className="text-secondary">{item.content}</h4>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
