import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ShopPagination() {
   return (
      <div className="shop__pagination">
         <span>
            <FontAwesomeIcon icon={faBackward} />
         </span>
         <p>1</p>
         <span>
            <FontAwesomeIcon icon={faForward} />
         </span>
      </div>
   );
}
