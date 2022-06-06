// import { useEffect, useState } from 'react';
import CardsData from '../../../src/data/services1.json';
// import Icon from './components/Card/Icon';

function ServiceCard() {
  return (
    <div className='CardDisplay'>
      {CardsData.length === 0 && <h2>Loading services ...</h2>}
      {CardsData.map((sObj) => (
        <div key={sObj.id} className='card'>
          <div className='card-info'>
            {/* <Icon icon='fa-plane' /> */}
            <h2 className='desc'>{sObj.title}</h2>
            <p className='price'>{sObj.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
