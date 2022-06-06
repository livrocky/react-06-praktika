import HouseImg from './HouseImg';
import HouseTitle from './HouseTitle';

export default function HouseCard({ image, text }) {
  return (
    <div className='card-container'>
      <HouseImg image={image} />
      <HouseTitle text={text} />
    </div>
  );
}
