import PricingElement from '../pricingElement/pricingElement';

import './pricingTable.css';

function PricingTable(props) {
    return (
        <div className="pricing-main-container" >
            <div className="pricing-container">
                <PricingElement month="1" price="10" onPurchase={props.onPurchase} />
                <PricingElement month="3" price="27" onPurchase={props.onPurchase} />
                <PricingElement month="6" price="55" onPurchase={props.onPurchase} />
            </div>
        </div>
    )
}

export default PricingTable;
