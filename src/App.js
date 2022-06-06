import './App.css';
import ServiceCard from './components/Card/ServiceCard';
import SectionTitle from './components/ServiceSection/SectionTitle';
// import Icon from './components/Card/Icon';

function App() {
  return (
    <div className='App'>
      <main>
        <SectionTitle title='OUR SERVICES' subtitle='The best services in the world' />
        <ServiceCard />
      </main>
    </div>
  );
}

export default App;
