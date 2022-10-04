import PricingElement from '../pricingElement/pricingElement';

import './pricingTable.css';

function PricingTable() {
    return (
        <div className="pricing-main-container" >
            <div className="pricing-container">
                <PricingElement header="1 Month" price="10" />
                <PricingElement header="3 Month" price="30" />
                <PricingElement header="6 Month" price="55" />
            </div>
        </div>
    )
}

export default PricingTable;
