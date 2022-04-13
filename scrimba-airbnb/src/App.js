import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import cardImage from './images/katie-zaferes.png';

import './style.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        img={cardImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
