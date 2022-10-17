import './pricingElement.css';

function PricingElement(props) {
    return (
        <div className="pricing-table">
            <div className="pricing-table-header">
                <h1>{props.month} MONTH</h1>
            </div>

            <div className="pricing-table-content">
                <ul>
                    <li><strong>100</strong> Files per batch</li>
                    <li><strong>2Mb</strong> Max file size</li>
                    <li><strong>{props.month}</strong> Month of premium</li>
                </ul>
            </div>

            <div className="pricing-table-footer">
                <h2><sup>$</sup>{props.price}</h2>
                <button onClick={() => props.onPurchase(props.price, props.month)} >Purchase</button>
            </div>
        </div>
    )
}

export default PricingElement;
