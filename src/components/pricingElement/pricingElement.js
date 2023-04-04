import './pricingElement.css';

function PricingElement(props) {
  const { month, price, onPurchase } = props;
  return (
    <div className="pricing-table">
      <div className="pricing-table-header">
        <h1>
          {month}
          MONTH
        </h1>
      </div>

      <div className="pricing-table-content">
        <ul>
          <li>
            <strong>100</strong>
            Files per batch
          </li>
          <li>
            <strong>2Mb</strong>
            Max file size
          </li>
          <li>
            <strong>{month}</strong>
            Month of premium
          </li>
        </ul>
      </div>

      <div className="pricing-table-footer">
        <h2>
          <sup>$</sup>
          {price}
        </h2>
        <button type="button" onClick={() => onPurchase(price, month)}>Purchase</button>
      </div>
    </div>
  );
}

export default PricingElement;
