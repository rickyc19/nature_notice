import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { AppRoutes } from './AppRoutes';
import Navbar from './components/Navbar';

ReactDOM.render(
    <div>
    <Navbar />
    <Router>
        <AppRoutes />
    </Router>
    </div>,
    document.getElementById('root')
);
