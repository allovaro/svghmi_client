import PricingElement from '../pricingElement/pricingElement';

import './pricingTable.css';

function PricingTable(props) {
  const { onPurchase } = props;
  return (

    <div className="pricing-container">
      <PricingElement month="1" price="10" onPurchase={onPurchase} />
      <PricingElement month="3" price="25" onPurchase={onPurchase} />
      <PricingElement month="6" price="45" onPurchase={onPurchase} />
    </div>
  );
}

export default PricingTable;
