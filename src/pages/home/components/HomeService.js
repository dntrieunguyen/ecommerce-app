import React from 'react';

export default function HomeService() {
   const serviceContent = [
      { title: 'Free shipping', content: 'free shipping wordwide' },
      { title: '24 X 7 Service', content: 'free shipping wordwide' },
      { title: 'Festival offer', content: 'free shipping wordwide' },
   ];
   return (
      <>
         <div className="service">
            <div className="service__container">
               {serviceContent.map((item, index) => (
                  <div key={(item, index)} className="service__item">
                     <h2>{item.title}</h2>
                     <h4>{item.content}</h4>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
