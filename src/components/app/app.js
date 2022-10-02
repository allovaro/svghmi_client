import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import ProfilePage from '../pages/profile';
import Navbar from '../navBar/navBar';

import './app.css';


function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login mode="login" />} />
                <Route exact path="/signup" element={<Login mode="signup" />} />
                <Route exact path="/profile" element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;
