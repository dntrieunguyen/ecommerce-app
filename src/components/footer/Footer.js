import React from 'react';
import './Footer.scss';

export default function Footer() {
   const footerContent = [
      {
         title: 'Customer Service',
         content: [
            'Help & Contact Us',
            'Return and Refund',
            'Online Store',
            'Terms & Condition',
         ],
      },
      {
         title: 'Company',
         content: ['What we do', 'Available Services', 'Latest Post', 'FAQs'],
      },
      {
         title: 'Social Media',
         content: ['Twitter', 'Insagram', 'Facebook', 'Printerest'],
      },
   ];
   return (
      <footer className="italic bg-black footer text-light">
         <div className="footer__container container w-[80%] mx-auto grid grid-cols-3 gap-x-3 py-32">
            {footerContent.map((item, index) => (
               <div key={index} className="footer__content">
                  <h2 className="uppercase text-lead">{item.title}</h2>
                  <div className="pt-4 text-secondary">
                     {item.content.map(content => (
                        <p className="py-2 cursor-pointer">{content}</p>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </footer>
   );
}
