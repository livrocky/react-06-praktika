import { houseData } from '../../data';
import HouseCard from './HouseCard';

function Card() {
  return (
    <div className='house-cards'>
      {houseData.map((cObj, index) => (
        <HouseCard key={index} image={cObj.image} text={cObj.text} />
      ))}
    </div>
  );
}

export { Card };
