import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import data from './data';

import './style.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map((data, id) => (
          <Card key={id} data={{ ...data }} />
        ))}
      </section>
    </div>
  );
}
