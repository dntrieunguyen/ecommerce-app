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
      <footer className="footer">
         <div className="footer__container">
            {footerContent.map((item, index) => (
               <div key={index} className="footer__content">
                  <h2>{item.title}</h2>
                  <div>
                     {item.content.map((content, index) => (
                        <p key={index}>{content}</p>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </footer>
   );
}
