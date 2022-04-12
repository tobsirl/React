import cardImage from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card() {
  return (
    <div className="card">
      <img src={cardImage} alt="katie-zaferes" className="card--image" />
      <div class="card--stats">
        <img src={star} alt="star" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  );
}
