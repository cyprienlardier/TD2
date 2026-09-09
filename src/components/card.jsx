export default function Card({ title, price, storage, users, upside, featured, annual, Featured, Active }) {
  const cardClass = featured ? "pricing-card pricing-card--featured" : "pricing-card";

  return (
    <div className={cardClass}>
      <h2 className="card-title">{title}</h2>
      <div className="card-price">
        <span className="currency">$</span>
        <span className="amount">{price.toFixed(2)}</span>
      </div>
      <ul className="card-features">
        <li>{storage}</li>
        <li>{users}</li>
        <li>{upside}</li>
      </ul>
      <button className="card-button">LEARN MORE</button>
    </div>
  );
}