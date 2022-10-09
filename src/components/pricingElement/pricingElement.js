import './pricingElement.css';

function PricingElement(props) {
    return (
        <div className="pricing-table">
            <div className="pricing-table-header">
                <h1>{props.header}</h1>
            </div>

            <div className="pricing-table-content">
                <ul>
                    <li><strong>75GB</strong> Disk Space</li>
                    <li><strong>50</strong> Email Addresses</li>
                    <li><strong>20</strong> Subdomains</li>
                    <li><strong>50</strong> MySQL Databases</li>
                </ul>
            </div>

            <div className="pricing-table-footer">
                <h2><sup>$</sup>{props.price}</h2>
                <a href="https://cryptopay.com">Purchase</a>
            </div>
        </div>
    )
}

export default PricingElement;
