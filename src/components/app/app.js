import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import ProfilePage from '../pages/profile';
import PaymentResult from '../paymentResult/paymentResult';
import NotFoundPage from '../notFoundPage/notFoundPage';
import PricingTable from '../pricingTable/pricingTable';

import './app.css';


function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login mode="login" />} />
                <Route exact path="/signup" element={<Login mode="signup" />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/success_purchase" element={<PaymentResult type="success" />} />
                <Route exact path="/failed_purchase" element={<PaymentResult type="fail" />} />
                <Route exact path="/test" element={<PricingTable />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
