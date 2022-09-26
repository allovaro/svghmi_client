import { Component } from 'react';
import Main from '../pages/main';
import LoginComponent from '../LoginComponent/loginComponent';

import {
    Routes, Route,
} from 'react-router-dom';

import './app.css';
import './baner.css';


class App extends Component {

    render() {
        return (
            <div className="app">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/login" element={<LoginComponent mode="login" onSubmit={
                        function() {
                            console.log('submit');
                        }
                    } />} />
                </Routes>
            </div>
        );
    }
}

export default App;
