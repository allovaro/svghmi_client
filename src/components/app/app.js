import { Routes, Route } from 'react-router-dom';

import useGaTracker from '../../hooks/useGaTracker';

import Main from '../pages/main';
import Login from '../pages/login';
import ProfilePage from '../pages/profile';
import PaymentResult from '../paymentResult/paymentResult';
import NotFoundPage from '../notFoundPage/notFoundPage';
import PricingTable from '../pricingTable/pricingTable';
import CommonMessage from '../commonMessage/commonMessage';
import ForgotPassword from '../forgotPassword/forgotPassword';
import ResetPasswordForm from '../resetPasswordForm/resetPasswordForm';
import ConfirmationPage from '../pages/confirmationPage';
import ExamplesPage from '../pages/examplesPage';

import './app.css';

function App() {
  useGaTracker();

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
        <Route exact path="/forgot_password" element={<ForgotPassword />} />
        <Route exact path="/reset_password/:token/:id" element={<ResetPasswordForm />} />
        <Route
          exact
          path="/email_sent"
          element={(
            <CommonMessage
              header="We sent you confirmation email."
              message="Please follow the instraction in email"
            />
          )}
        />
        <Route exact path="/signup_confirm/:email/:id" element={<ConfirmationPage />} />
        <Route
          exact
          path="/reset_email_sent/:email"
          element={(
            <CommonMessage
              header="We sent you reset link."
              message="Please follow the instraction in email"
            />
          )}
        />
        <Route
          exact
          path="/reset_password_successfull"
          element={(
            <CommonMessage
              header="You set new password!"
              message="Great, you set new password, and can continue use our service"
            />
          )}
        />
        <Route exact path="/examples" element={<ExamplesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
