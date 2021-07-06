import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';

class Dashboard extends React.Component {
    render() {
        return (

            <div className="d-flex">
                <h1 className="col-md-6">dashboard page</h1>
                <Link className="col-md-6 text-right mt-3 btn custom-button" to='./login'>Logout</Link>
            </div>
        )

    }
}

export default Dashboard