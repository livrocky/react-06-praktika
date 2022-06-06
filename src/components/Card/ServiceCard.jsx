// import { useEffect, useState } from 'react';
import CardsData from '../../../src/data/services1.json';
import Icon from './Icon';

function ServiceCard() {
  return (
    <div className='CardDisplay'>
      {CardsData.length === 0 && <h2>Loading services ...</h2>}
      {CardsData.map((sObj) => (
        <div key={sObj.id} className='card'>
          <div className='card-info'>
            <div className='icon-display'>
              <Icon icon={sObj.icon} />
            </div>
            <div className='text'>
              <h2 className='desc'>{sObj.title}</h2>
              <p className='summary'>{sObj.summary}</p>
              <a href='#'>Learn More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
