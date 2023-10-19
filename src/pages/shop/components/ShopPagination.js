import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ShopPagination() {
   return (
      <>
         <span className="px-3 next">
            <FontAwesomeIcon icon={faBackward} />
         </span>
         <p className="items-center px-4 py-2 text-sm font-semibold text-white cursor-pointer bg-dark">
            1
         </p>
         <span className="px-3 next">
            <FontAwesomeIcon icon={faForward} />
         </span>
      </>
   );
}
