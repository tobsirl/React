import cardImage from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card() {
  return (
    <div className="card">
      <div class="card--image">
        <img src={cardImage} alt="katie-zaferes" />
      </div>
      <div class="card--body">
        <div class="card--body-img">
          <img src={star} alt="star" />
          <p class="card--body-rating">5.0</p>
        </div>
      </div>
    </div>
  );
}
