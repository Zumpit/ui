import React from 'react';
import Free from './Free';
import Pro from './Pro';
import Vip from './Vip';

const Version = () => {
   return (
       <div>
           Free: <Free />
           <br />
           Pro : <Pro />
           <br />
           VIP : <Vip />
       </div>
   )
}

export default Version;