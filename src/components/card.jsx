export default function Card({ title, Price, Storage, Users, upside, annual }) {
  return (
    <div className="pricing-card">
      <h2 className="card-title">{title}</h2>
      <div className="card-price">
        <span className="currency">$</span>
        <span className="amount">{Price.toFixed(2)}</span>
      </div>
      <ul className="card-features">
        <li>{Storage}</li>
        <li>{Users}</li>
        <li>{upside}</li>
      </ul>
      <button className="card-button">LEARN MORE</button>
    </div>
  );
}