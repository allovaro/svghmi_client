import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import ProfilePage from '../pages/profile';
import PaymentResult from '../paymentResult/paymentResult';
import NotFoundPage from '../notFoundPage/notFoundPage';
import PricingTable from '../pricingTable/pricingTable';
import CommonMessage from '../commonMessage/commonMessage';
import ForgotPassword from '../forgotPassword/forgotPassword';
import ResetPasswordForm from '../resetPasswordForm/resetPasswordForm';

import LoginComponent2 from '../loginComponent2/loginComponent2';

import './app.css';


function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login mode="login" />} />
                <Route exact path="/login2" element={<LoginComponent2 />} />
                <Route exact path="/signup" element={<Login mode="signup" />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/success_purchase" element={<PaymentResult type="success" />} />
                <Route exact path="/failed_purchase" element={<PaymentResult type="fail" />} />
                <Route exact path="/test" element={<PricingTable />} />
                <Route exact path="/forgot_password" element={<ForgotPassword />} />
                <Route exact path="/reset_password" element={<ResetPasswordForm />} />
                <Route exact path="/signup_confirm/:email" element={<CommonMessage header="Thanks for signing up!" message="Please confirm your email. We sent you a message with link"/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
